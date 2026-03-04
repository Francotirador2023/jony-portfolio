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

                // Load only the essential minimum for fast boot
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
        let images = [];

        try {
            // Analizamos el código del estudiante cargando los paquetes necesarios (matplotlib, seaborn, etc)
            await pyodideRef.current.loadPackagesFromImports(code);

            // Redirigir consola y aplicar parches gráficos
            await pyodideRef.current.runPythonAsync(`
import sys
import io
import base64
            
sys.stdout = io.StringIO()
            
# Monkey Patch para interceptar Matplotlib solo si está disponible
try:
    import matplotlib
    matplotlib.use("Agg") # Usar backend sin interfaz gráfica
    import matplotlib.pyplot as plt
    
    def custom_show():
        buf = io.BytesIO()
        plt.savefig(buf, format='png', bbox_inches='tight', dpi=150)
        buf.seek(0)
        img_str = base64.b64encode(buf.read()).decode('utf-8')
        print(f"\\n[[IMAGE:{img_str}]]\\n")
        plt.clf()
        
    plt.show = custom_show
except ImportError:
    pass
            `);

            await pyodideRef.current.runPythonAsync(code);

            // Extract the captured print output
            consoleOutput = await pyodideRef.current.runPythonAsync(`sys.stdout.getvalue()`);

            // Check for intercepted Base64 images from Matplotlib
            const regex = /\\[\\[IMAGE:(.*?)\\]\\]/g;
            let match;
            while ((match = regex.exec(consoleOutput)) !== null) {
                images.push(match[1]);
            }

            // Remove image tags from standard text output
            consoleOutput = consoleOutput.replace(/\\[\\[IMAGE:.*?\\]\\]/g, '').trim();

            // If the code evaluated into a direct value without print, handle it
            if (!consoleOutput) {
                consoleOutput = "✓ Ejecución completada (Sin salida de consola).";
            }

            return { text: consoleOutput, images };
        } catch (err) {
            return { text: `Python Error:\n${err.message}`, images: [] };
        } finally {
            // Restore stdout just in case
            await pyodideRef.current.runPythonAsync(`sys.stdout = sys.__stdout__`);
        }
    };

    return { executePython, isReady, error };
}
