# Funciones de Agregación

Las funciones de agregación son herramientas matemáticas en SQL que toman una columna entera de datos (múltiples filas) y la comprimen para devolver un único valor de resumen. Son el equivalente en bases de datos a las fórmulas que utilizarías en el final de una columna de Excel.

## 1. Contar Filas (`COUNT`)

`COUNT` es, con diferencia, la función más utilizada. Nos permite responder preguntas como: "¿Cuántos clientes tenemos?" o "¿Cuántos pedidos se hicieron ayer?".

```sql
-- Cuenta el número total de filas en la tabla Clientes.
SELECT COUNT(*) AS Total_Clientes 
FROM Clientes;
```

**Importante:** Si cuentas una columna específica (`COUNT(Salario)`), SQL ignorará las filas donde el salario sea `NULL`.

## 2. Sumar Valores (`SUM`)

Simplemente suma los valores numéricos de una columna.

```sql
-- ¿Cuánto hemos facturado en total histórico?
SELECT SUM(Monto) AS Total_Ventas
FROM Ventas;
```

*(Recuerda la lección de nulos: la suma de toda una columna será nula si no controlas los registros en blanco o al menos evitas sumar toda la tabla ciegamente).*

## 3. Promedios (`AVG`)

Calcula la media aritmética (average) de una columna.

```sql
-- ¿Cuál es el sueldo promedio que pagamos en la empresa?
SELECT AVG(Salario) AS Sueldo_Promedio 
FROM Empleados;
```

## 4. Máximos y Mínimos (`MAX`, `MIN`)

Encuentran el valor más alto y más bajo de una columna. No solo funcionan con números, ¡sino también con fechas y textos!

```sql
-- ¿Cuál es el producto más caro de nuestra tienda?
SELECT MAX(Precio) AS Producto_Mas_Caro
FROM Productos;

-- ¿Cuál es nuestro empleado más antiguo?
SELECT MIN(Fecha_Contratacion) AS Empleado_Antiguo
FROM Empleados;
```

Estas funciones son esenciales. Sin embargo, ejecutándolas solas como hicimos aquí, siempre nos darán el resultado global (el total de *toda* la empresa). Para separar estos resultados por áreas (por país, departamento, etc.), necesitaremos aprender a "Agrupar", lo cual veremos en el próximo capítulo.
