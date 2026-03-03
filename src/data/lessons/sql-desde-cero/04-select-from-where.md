# Consulta Básica: SELECT, FROM, WHERE

En SQL, DQL significa *Data Query Language* (Lenguaje de Consulta de Datos). Su objetivo es puramente extraer información sin modificarla. 

El comando absolutamente básico y del cual nacerán todas tus futuras carreras como Analista consta de tres palabras mágicas que siempre van en el mismo orden:

```sql
SELECT 
    -- 1. ¿Qué columnas quiero ver?
FROM 
    -- 2. ¿De qué tabla saco la información?
WHERE 
    -- 3. ¿Qué condición deben cumplir las filas?
```

![Vista previa de consultas SQL en un entorno profesional (IDE)](/courses-assets/demo-sql.png)

## 1. SELECT y FROM

Para traer **todas** las columnas de una tabla usamos el comodín estadístico `*` (asterisco).

```sql
SELECT * FROM Empleados;
```

Sin embargo, en entornos productivos esto es una mala práctica empresarial (ralentiza la red). Siempre debes nombrar exactamente las columnas que deseas:

```sql
SELECT Nombre, Puesto, Salario FROM Empleados;
```

### Alias (`AS`)
A veces los nombres originales de las columnas en la base de datos son feos (ej. `emp_nm`). Podemos usar un **Alias** para renombrarla visualmente en nuestro resultado:

```sql
SELECT emp_nm AS Nombre_Empleado, sal AS Salario FROM Empleados;
```

## 2. El poder del WHERE

El `WHERE` actúa como el filtro de un embudo. Solo deja pasar a las filas (registros) que cumplan una condición y hace que devuelvan `TRUE`.

**Listar empleados del departamento de IT:**
```sql
SELECT Nombre, Puesto 
FROM Empleados 
WHERE Departamento = 'IT';
```
*(Nota que el texto `IT` va entre comillas simples `''`. Los números no llevan comillas).*

**Sueldos mayores a 5000:**
```sql
SELECT Nombre, Salario 
FROM Empleados 
WHERE Salario > 5000;
```

¡Excelente! En la próxima lección veremos cómo encadenar múltiples condiciones en un mismo WHERE usando operadores lógicos.
