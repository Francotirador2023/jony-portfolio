# Subconsultas Anidadas (Inception en SQL)

Una "Subconsulta" (Subquery) es simplemente una consulta `SELECT` incrustada dentro de otra consulta principal. Es como la película Inception: "Un sueño dentro de un sueño".

Las utilizamos cuando necesitas el resultado temporal de una operación para alimentar el filtro o el cálculo oficial de la tabla principal.

## Subconsulta Escalar en el WHERE

Devuelve un único valor. Se suele utilizar comúnmente con operadores matemáticos `=, <, >`.

> *"Tráeme el nombre del empleado que gane más dinero en la empresa"*

Si intentas filtrar con un `MAX()` directo en el `WHERE`, SQL se quejará de un error sintáctico.

**Solución correcta (Inception):**
```sql
SELECT Nombre, Puesto, Salario 
FROM Empleados 
WHERE Salario = (
    -- Consulta interior que se ejecuta primero:
    SELECT MAX(Salario) 
    FROM Empleados
);
```
El motor correrá primero el sub-código interno (ej: da 15000), y luego correrá la consulta externa diciendo "tráeme a todos los empleados donde el salario sea igual a 15000".

## Subconsultas de Lista con `IN`

Si la consulta interna te va a devolver una **lista** o columna entera de resultados, debemos usar siempre `IN` en vez de `=` (igual).

> *"Tráeme la información de las ventas pertenecientes a mis Mejores Clientes (Clientes Premium)"*

```sql
SELECT * 
FROM Ventas 
WHERE ClienteID IN (
    -- Esta consulta lista docenas de identificadores Premium
    SELECT ClienteID 
    FROM Clientes 
    WHERE Tipo = 'Premium'
);
```

### Uniendo vs. Anidando (JOINs vs Subqueries)
Mucha de la lógica resuelta con subconsultas `IN` puede resolverse mediante una cláusula `INNER JOIN`. ¿Cuál es mejor?
- Por lo general, **los JOINs son más rápidos** porque los motores de bases de datos están masivamente optimizados para realizarlos velozmente.
- Las **Subconsultas** a veces son mucho más **fáciles de leer y mantener** por un humano cuando la lógica comercial empieza a ser excesivamente ridícula y llena de 15 tablas.

### En el SELECT

Puedes poner una subconsulta escalar directamente como una columna autocalculada, aunque tiende a ser un gran penalizador de rendimiento (pues el motor ejecuta el SELECT anidado para **cada** fila arrojada a diferencia del WHERE que lo lanza una única vez).

Si necesitas un tablero en un banco urgente, la próxima lección sobre CTEs (*Common Table Expressions*) es la verdadera arquitectura que las "Big Tech" usan hoy en día por temas de legibilidad y limpieza visual.
