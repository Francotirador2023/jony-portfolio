# Funciones de Transformación (Cadenas y Fechas)

Hasta ahora hemos extraído la información tal como está guardada. Pero como analista, gran parte de tu labor diaria será "Transformar y Limpiar" esa información a medida que la consultas. Las bases de datos tienen cientos de funciones para ello. Veremos las más vitales.

## 1. Manipulación de Cadenas de Texto (Strings)

### Reemplazo Parcial (`UPPER`, `LOWER`)
Forzar que el texto aparezca en Máyuscula o Minúscula. Útil en `WHERE` para evitar fallos si el usuario escribió mezclado "juAn".

```sql
SELECT UPPER(Nombre) AS Nombre_Mayuscula 
FROM Clientes;
```

### Unir columnas (`CONCAT`)
Juntar texto.

```sql
SELECT CONCAT(Nombre, ' ', Apellido) AS Nombre_Completo 
FROM Empleados;

-- Nota: En Postgres y SQL Server modernos suele preferirse el operador `||`
SELECT Nombre || ' ' || Apellido AS Completo FROM Empleados;
```

### Extraer partes de un texto (`SUBSTRING` o `LEFT`/`RIGHT`)
A veces el texto viene sucio (ej: Un código de producto `PRD-12345`). Y queremos extraer la segunda parte.

```sql
-- Queremos extraer los primeros 3 caracteres desde la izquierda
SELECT LEFT(Codigo_Producto, 3) AS Categoria 
FROM Inventario;

-- Con SUBSTRING le decimos: Inicia desde el caracter 3, y extrae los próximos 5.
SELECT SUBSTRING(Email, 3, 5) 
FROM Usuarios;
```

## 2. Manipulando la variable del Tiempo (Fechas)

El formato maestro de fecha en bases relacionales es siempre el universal: `YYYY-MM-DD` (Ej: 2026-06-15).

### Obtener la fecha de Hoy

Si quieres ver todo lo vendido en el día que ejecutaste la consulta:
```sql
SELECT * FROM Ventas 
WHERE Fecha = CURRENT_DATE; 
-- (Nota: Para MS SQL Server la función usaría GETDATE())
```

### Extracción de partes (`EXTRACT` o `DATEPART`)

Es tu mejor amigo para agrupar reportes "Mes a Mes" o "Año a Año".

```sql
-- Queremos agrupar todas las ventas de la empresa y saber cuánto ganamos cada Año fiscal.
SELECT 
    EXTRACT(YEAR FROM Fecha_Venta) AS Anio,
    SUM(Monto) AS Ingresos
FROM Ventas
GROUP BY EXTRACT(YEAR FROM Fecha_Venta);

-- Nota: En MS SQL Server el comando sería DATEPART(yyyy, Fecha_Venta) o la función especial YEAR()
```

Estas transformaciones aseguran que puedas obtener dashboards impresionantes sin requerir usar macros en Excel una vez descargas la data. En el siguiente gran módulo final, entraremos a las canchas grandes: ¡combinaremos tablas!
