# Tipos de JOINs (Uniendo Tablas)

A medida que tu base de datos crece, la información estará esparcida en docenas de tablas. Para armar un reporte o responder una pregunta, necesitarás "juntar" datos que están en tablas diferentes.

Para eso usamos la cláusula `JOIN`. Imagina un diagrama de Venn donde cada tabla es un círculo.

## La anatomía del JOIN
Para unir dos tablas necesitas tres ingredientes obligatorios:
1. La **Tabla A** (Izquierda).
2. La **Tabla B** (Derecha).
3. La **condición matemática (`ON`)** que dicta qué columna tienen en común (aquí es donde usas la Primary Key y Foreign Key que aprendimos).

---

## 1. INNER JOIN (La Intersección)
Es el más usado. Sólo devuelve las filas que **TIENEN PAREJA** o **COINCIDEN** en ambas tablas. (Es el cruce central de los círculos de Venn).

```sql
SELECT 
    V.VentaID, 
    C.Nombre, 
    V.Monto
FROM Ventas AS V
INNER JOIN Clientes AS C  
    ON V.ClienteID = C.ClienteID;
-- (Solo veremos las ventas que pertenezcan a un cliente que siga existiendo en el sistema).
```

## 2. LEFT JOIN (Respeta al de la izquierda)
Pide TODAS las filas de la Tabla Izquierda (la que pones primero en el código, en el `FROM`). Si encuentra que hay datos que coinciden en la Tabla Derecha, los muestra; si no coinciden, devuelve `NULL` para la tabla derecha.

Supongamos que queremos una lista de **TODOS** nuestros clientes y ver si tienen ventas.

```sql
SELECT 
    C.Nombre, 
    V.Monto
FROM Clientes AS C         -- (Tabla Izquierda: Trae a TODOS los clientes)
LEFT JOIN Ventas AS V      -- (Tabla Derecha)
    ON C.ClienteID = V.ClienteID;

-- Si Juan nunca compró nada, aparecerá "Juan" con monto NULL.
```

## 3. RIGHT JOIN (Respeta al de la derecha)
Es el espejo del `LEFT JOIN`. Trae todo lo de la Tabla Secundaria (Derecha), sin importar si cruzó o no con la Principal (Izquierda). 

Rara vez se utiliza en el día a día porque basta con invertir el orden mental de las tablas y usar siempre un `LEFT JOIN`.

```sql
-- Queremos sacar todas las ventas, incluso si borramos accidentalmente al cliente
SELECT 
    C.Nombre, 
    V.Monto
FROM Clientes AS C
RIGHT JOIN Ventas AS V     -- (Trae todas las VENTAS)
    ON C.ClienteID = V.ClienteID;
```

## 4. FULL OUTER JOIN
Retorna todas las filas de la tabla izquierda y todas las de la tabla derecha coincidan o no. Todo lo no cruzado, será devuelto matemáticamente como Null por defecto.
*(Atención: consume mucha memoria en bases gigantescas).*

```sql
SELECT 
    C.Nombre, 
    V.Monto
FROM Clientes AS C
FULL OUTER JOIN Ventas AS V 
    ON C.ClienteID = V.ClienteID;
```

¡Dominar estos 4 cruces te convierte teóricamente en un analista Junior inmediatamente! En la próxima lección veremos técnicas un poco más oscuras usando Subconsultas.
