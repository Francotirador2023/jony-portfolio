import { useState, useEffect } from 'react';

export function useSqlJs() {
    const [db, setDb] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const initializeSql = async () => {
            try {
                // Initialize the WASM engine.
                const SQL = await window.initSqlJs({
                    locateFile: file => `/${file}`
                });

                // Create a new in-memory DB
                const database = new SQL.Database();

                // Fetch our seed data to hydrate the DB so lessons work
                const response = await fetch('/data/empleados.sql');
                const sqlScript = await response.text();

                // Execute the seed script
                database.run(sqlScript);

                if (isMounted) {
                    setDb(database);
                    setIsLoading(false);
                }
            } catch (err) {
                console.error("Failed to append SQL.js or seed DB:", err);
                if (isMounted) {
                    setError(err);
                    setIsLoading(false);
                }
            }
        };

        const loadSqlAsync = async () => {
            if (window.initSqlJs) return initializeSql();

            const script = document.createElement('script');
            script.src = '/sql-wasm.js';
            script.async = true;
            document.head.appendChild(script);

            script.onload = () => {
                initializeSql();
            };

            script.onerror = () => {
                if (isMounted) {
                    setError("Failed to load SQL.js script.");
                    setIsLoading(false);
                }
            };
        };

        loadSqlAsync();

        return () => { isMounted = false; };
    }, []);

    // A helper function to execute queries and format them for the console
    const executeQuery = (query) => {
        if (!db) return "Error: Base de datos no inicializada.";

        try {
            // Execute the query
            const results = db.exec(query);

            if (results.length === 0) {
                return "Query OK. 0 rows affected.";
            }

            // Formatting the output as a simple text table
            const columns = results[0].columns;
            const values = results[0].values;

            // Simple padding for table
            const tableOutput = values.map(row =>
                row.map((val, idx) => String(val)).join(' | ')
            );

            // Add Header
            tableOutput.unshift(columns.join(' | '));
            tableOutput.unshift('-'.repeat(tableOutput[0].length));

            return tableOutput.join('\n');

        } catch (err) {
            return `SQL Error: ${err.message}`;
        }
    };

    return { executeQuery, isReady: !isLoading, error };
}
