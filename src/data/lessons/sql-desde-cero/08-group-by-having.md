# Agrupación: `GROUP BY` y el filtro `HAVING`

En el capítulo anterior usamos funciones como `SUM()` para conocer el total global de la empresa. Pero, ¿qué pasa si el jefe te pide que le digas "Cuánto facturó CADA VENDEDOR"? Aquí es donde entra en juego la poderosa cláusula `GROUP BY`.

## El Poder de Empaquetar (`GROUP BY`)

`GROUP BY` crea "cajas" o "grupos" según la columna que le digas, y luego ejecuta las funciones matemáticas (`SUM`, `COUNT`, `AVG`) **dentro** de cada uno de esos grupos por separado.

### ¿Cuántos empleados hay en cada departamento?
```sql
SELECT 
    Departamento, 
    COUNT(*) AS Cantidad_Empleados 
FROM Empleados 
GROUP BY Departamento;
```
En esta consulta, primero SQL separa a todos los empleados de 'IT' en un grupo, a los de 'Ventas' en otro, y luego cuenta cada grupo de forma aislada.

> **Regla de Oro de SQL:** Toda columna en el `SELECT` que *NO* tenga una función matemática (como `Departamento`), DEBE formar parte obligatoria del `GROUP BY`.

## Filtrar los Grupos (`HAVING`)

Imagina que después de agrupar y contar, tu jefe sólo quiere ver los departamentos que tengan "al menos 5 empleados".

El error clásico es intentar usar el `WHERE`.
```sql
-- ERROR INTENCIONAL
SELECT Departamento, COUNT(*) AS Cantidad 
FROM Empleados 
WHERE Cantidad > 5    <-- El filtro WHERE ocurre ANTES de agrupar. No funciona.
GROUP BY Departamento;
```

Para filtrar funciones matemáticas, nació el **`HAVING`**. Este funciona exactamente igual que el `WHERE`, pero se usa exclusivamente sobre datos que ya han sido agrupados o resumidos por una función.

```sql
-- CORRECTO
SELECT Departamento, COUNT(*) AS Cantidad 
FROM Empleados 
GROUP BY Departamento
HAVING COUNT(*) > 5;
```

### Orden de Operaciones Mentales en SQL
Para que no te equivoques jamás diseñando una consulta avanzada, memoriza este orden lógico sobre cómo piensa la computadora:
1. `FROM` (Va a la tabla)
2. `WHERE` (Filtra la información en bruto)
3. `GROUP BY` (Separa en cajas lo que quedó)
4. `HAVING` (Filtra esas cajas)
5. `SELECT` (Selecciona y procesa lo que quieres ver)
6. `ORDER BY` (Te lo ordena al final, ej. de mayor a menor)
