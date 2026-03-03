import { useState, useEffect, useRef } from 'react';

export function usePyodide() {
    const [isReady, setIsReady] = useState(false);
    const [error, setError] = useState(null);
    const pyodideRef = useRef(null);

    useEffect(() => {
        // Since Pyodide is massive, we load it exclusively from CDN dynamically 
        // to avoid killing the Vite build bundle size.
        let isMounted = true;

        const loadPyodideAsync = async () => {
            if (window.loadPyodide) return initializeEngine();

            // Inject the Pyodide CDN script into the document head
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
            script.async = true;
            document.head.appendChild(script);

            script.onload = () => {
                initializeEngine();
            };

            script.onerror = () => {
                if (isMounted) setError("Failed to load Pyodide CDN.");
            };
        };

        const initializeEngine = async () => {
            try {
                // Initialize the Python engine
                const pyodide = await window.loadPyodide();

                // Load critical Data Science packages natively
                // Removed matplotlib and seaborn as they cause massive network payloads (+40MB)
                // and terminal outputs cannot render images natively.
                await pyodide.loadPackage(['pandas']);

                // Hydrate the virtual File System with our mock data
                // By fetching from public and writing to Pyodide's MEMFS
                const filesToMount = ['ventas.csv', 'historico_clientes_2024.csv', 'Raw_Log_Transaccional_Banco_2024.csv'];

                for (const file of filesToMount) {
                    const response = await fetch(`/data/${file}`);
                    const text = await response.text();
                    pyodide.FS.writeFile(file, text);
                }

                if (isMounted) {
                    pyodideRef.current = pyodide;
                    setIsReady(true);
                }
            } catch (err) {
                console.error("Pyodide Init Error:", err);
                if (isMounted) setError(err);
            }
        };

        loadPyodideAsync();

        return () => { isMounted = false; };
    }, []);

    const executePython = async (code) => {
        if (!pyodideRef.current) return "Error: Python engine not ready.";

        // We must redirect stdout (prints) because Pyodide writes to console.log by default
        let consoleOutput = "";

        await pyodideRef.current.runPythonAsync(`
            import sys
            import io
            sys.stdout = io.StringIO()
        `);

        try {
            await pyodideRef.current.runPythonAsync(code);

            // Extract the captured print output
            consoleOutput = await pyodideRef.current.runPythonAsync(`sys.stdout.getvalue()`);

            // If the code evaluated into a direct value without print, handle it
            if (!consoleOutput.trim()) {
                consoleOutput = "✓ Ejecución completada (Sin salida de consola).";
            }
            return consoleOutput;
        } catch (err) {
            return `Python Error:\n${err.message}`;
        } finally {
            // Restore stdout just in case
            await pyodideRef.current.runPythonAsync(`sys.stdout = sys.__stdout__`);
        }
    };

    return { executePython, isReady, error };
}
