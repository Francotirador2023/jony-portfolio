# Operadores Lógicos y Aritméticos

En la lección anterior vimos cómo filtrar datos básicos. Sin embargo, en la vida real tus preguntas serán algo como: *"Quiero ver a todos los clientes de México que hayan comprado más de 100 dólares o que sean usuarios Premium"*

## Operadores Lógicos Principales

### AND (Y)
La fila debe cumplir **todas** las condiciones impuestas.

```sql
SELECT Nombre, Puesto 
FROM Empleados 
WHERE Departamento = 'Ventas' AND Salario > 2000;
```

### OR (O)
La fila debe cumplir al menos **una** de las condiciones impuestas.

```sql
SELECT Nombre, Puesto 
FROM Empleados 
WHERE Departamento = 'Ventas' OR Departamento = 'Marketing';
```

### IN (Dentro de un grupo)
Cuando quieres filtrar por múltiples valores exactos, usar muchos `OR` se vuelve aburrido y largo. Para eso nació `IN`.

```sql
SELECT Nombre, Departamento 
FROM Empleados 
WHERE Departamento IN ('Ventas', 'Marketing', 'Finanzas');
```
*Es como decir: Dime si tu departamento está en esta lista.*

### BETWEEN (Entre dos valores)
Muy útil para rangos de fechas o salarios numéricos (es inclusivo, es decir, incluye a los límites mencionados).

```sql
SELECT Nombre, Salario 
FROM Empleados 
WHERE Salario BETWEEN 2000 AND 5000;
```

### LIKE (Búsqueda de Patrones | Sólo para Texto)
Ideal para cuando no sabes cómo se escribe una palabra exactamente pero sabes cómo empieza o qué contiene.

El comodín `%` (porcentaje) significa "cualquier cantidad de caracteres".

**Que el nombre comience con 'A':**
```sql
SELECT Nombre 
FROM Empleados 
WHERE Nombre LIKE 'A%';
```

**Que el correo contenga 'gmail.com':**
```sql
SELECT Correo 
FROM Clientes 
WHERE Correo LIKE '%gmail.com%';
```

**Opcional:** En PostgreSQL existe `ILIKE` que hace lo mismo pero ignora mayúsculas y minúsculas. Así 'Juan' y 'juan' son iguales para la búsqueda.
