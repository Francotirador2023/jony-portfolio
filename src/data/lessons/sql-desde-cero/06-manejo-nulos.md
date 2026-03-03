# El Misterio del Dato Nulo (NULL)

En Bases de Datos, `NULL` no es equivalente a cero (`0`) y **tampoco equivale a un texto vacío (`''`)**.

> **NULL significa: Información Ausente / Desconocida.**

Por ejemplo, si Juan se registra en tu app y no pone su segundo nombre, ese campo queda en `NULL`. Simplemente la base de datos dice "no lo sabemos".

## El gran error de los principiantes

Supongamos que quieres ver a todos los empleados de contabilidad que no tienen cargado un número de teléfono.

**ERROR (No funciona):**
```sql
SELECT Nombre 
FROM Empleados 
WHERE Telefono = NULL;
```
Esto fallará. Es imposible comprobar si un valor es "igual" a lo desconocido.

**LA FORMA CORRECTA:**
Usamos operadores verbales: `IS NULL` o `IS NOT NULL`.

```sql
-- Queremos a los que NO tienen teléfono cargado
SELECT Nombre 
FROM Empleados 
WHERE Telefono IS NULL;

-- Queremos a los que SÍ tienen teléfono cargado
SELECT Nombre, Telefono 
FROM Empleados 
WHERE Telefono IS NOT NULL;
```

## Salvando reportes: COALESCE

Imagina que creas un reporte sumando los bonos de los empleados. Algunos traen NULL en la columna Bono porque su contrato no incluye ese beneficio. 

Sumar un número (`1000`) más un `NULL` matemático, ¡resulta en `NULL`!. Se rompe el reporte.

Para esto usamos la maravillosa función `COALESCE()`. Su trabajo es: "Devuélveme el primer valor, pero si ese valor es NULL, entonces devuélveme esta segunda opción que yo te dejo de repuesto".

```sql
-- Si el campo Bono está nulo, pondrá el número 0 en su lugar.
SELECT Nombre, Salario_Base + COALESCE(Bono, 0) AS Sueldo_Total 
FROM Pagos;
```

Es una herramienta imprescindible que todo Analista usa todos los días.
