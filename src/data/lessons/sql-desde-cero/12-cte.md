# CTEs (Common Table Expressions)

Si en la lección pasada vimos que las subconsultas pueden ser difíciles de leer para ti o tus colegas de mantenimiento, las **Common Table Expressions** o CTEs, son la solución elegante moderna.

Fueron creadas bajo la filosofía: *"¿Por qué no le ponemos un nombre bonito y temporal a esa consulta infernal, la guardamos arriba, y luego simplemente la unimos con un JOIN limpio limpio limpio al final del reporte?"*

## ¡Invocando a la Palabra Sagrada `WITH`!

Las CTE se definen siempre con la directiva obligatoria **`WITH`** en la cima absoluta de todo el código de tu archivo SQL.

> **Objetivo de reporte:** Extraer a todos mis empleados, pero pegándoles una nueva columna que diga "Promedio de lo que ganan todos los que trabajan en su mismo puesto para comparar si están bien o mal remunerados".

Hacer esto con Subqueries o JOINs anidados es un enredo visual brutal. Veamos la elegancia suprema:

```sql
-- Parte Superior: Creamos el CTE con WITH
WITH CTE_PromedioPuesto AS (
    SELECT 
        Puesto, 
        AVG(Salario) AS Salario_Promedio
    FROM Empleados
    GROUP BY Puesto
)
-- Fin de la burbuja. Esa "tabla virtual temporal" ya existe en la nube por 1 nanosegundo.

-- Parte Inferior: Nuestro reporte ejecutivo real.
SELECT 
    E.Nombre, 
    E.Puesto, 
    E.Salario,
    C.Salario_Promedio, -- Esta columna se lee limpia de la CTE arriba!
    (E.Salario - C.Salario_Promedio) AS Diferencia
FROM Empleados AS E
LEFT JOIN CTE_PromedioPuesto AS C 
    ON E.Puesto = C.Puesto;
```

## Beneficios del WITH
1. **Legibilidad:** Se lee como un libro de arriba a abajo.
2. **Reutilización:** Una vez declarada la CTE arriba, puedes invocarla dentro de ese script tantas veces como desees sin volver a escribir todo el Select larguísimo.
3. **Múltiples Tablas Mentales:** Si la lógica requiere cruzar 8 fuentes separadas gigantes (Ventas, SAP, Operaciones, Cloud, Finanzas), puedes simplemente separar el cálculo de cada cosa en su CTE respectiva arriba, y el último `SELECT` queda como el anillo que invoca a todos.

```sql
WITH CTE_Ventas AS (...),
     CTE_Marketing AS (...),
     CTE_Logistica AS (...)

SELECT * 
FROM CTE_Ventas V
JOIN CTE_Marketing M ON V.id = M.id
JOIN CTE_Logistica L ON V.id = L.id;
```

Añade esto a tu arsenal y ya estás programando consultas estructurales serias de la Gran Liga Tecnológica.

¡Felicidades por completar este largo y maravilloso curso! Prepárate ahora para dominar [Análisis de Datos con BI](../analisis-de-datos). 🚀
