# 📦 Agrupación: `GROUP BY` y el filtro `HAVING`

En la lección de Stats del Servidor vimos cómo sacar el Oro Total de todo el juego usando `SUM()`. Pero si tu jefe de diseño te dice: *"Dime cuánto oro ha farmeado **CADA CLASE** de personaje (Magos, Tanques, Asesinos)"*, la función `SUM()` sola no basta. 

Ahí es donde invocamos a la bestia: `GROUP BY`.

## 🗃️ El Poder de Separar en Cajas (`GROUP BY`)

`GROUP BY` crea "grupos" o "salas" dependiendo de la columna que le indiques, y luego ejecuta las funciones matemáticas (`SUM`, `COUNT`) **DENTRO** de cada sala por separado.

### Ejemplo: ¿Cuántos jugadores hay en cada rango competitivo?
```sql
SELECT 
    Rango_Actual, 
    COUNT(*) AS Numero_De_Jugadores 
FROM Matchmaking 
GROUP BY Rango_Actual;
```
En esta consulta, SQL primero separa a todos los de 'Bronce' en un grupo, a los 'Radiante' en otro, y luego los cuenta uno por uno.

> 🏆 **Regla de Oro Intocable:** Cualquier columna en tu `SELECT` que *NO* sea una función matemática (como `Rango_Actual`), **TÍENE QUE ESTAR OBLIGATORIAMENTE** en tu `GROUP BY`. Si no lo haces, SQL entrará en pánico y dará error.

## 🛑 Filtrar a los ganadores (`HAVING`)

Imagina que después de agrupar los rangos, solo quieres imprimir en pantalla las Ligas que tengan "Top de 500 jugadores o más". 

Los novatos intentan hacer esto con el `WHERE`, pero el `WHERE` trabaja **antes** de que comience a agrupar.

```sql
-- ❌ ERROR FATAL (Intento Novato)
SELECT Rango_Actual, COUNT(*) AS Jugadores 
FROM Matchmaking 
WHERE Jugadores > 500    <-- ¡SQL todavía no ha contado nada aquí!
GROUP BY Rango_Actual;
```

Para filtrar funciones matemáticas, usamos **`HAVING`**. Trabaja exactamente como un WHERE, pero exclusivamente para los resultados de las cajas que ya fueron agrupadas.

```sql
-- ✅ COMO UN PRO (Correcto)
SELECT Rango_Actual, COUNT(*) AS Cantidad 
FROM Matchmaking 
GROUP BY Rango_Actual
HAVING COUNT(*) > 500;
```

### 🧠 El Orden Mental (Cómo piensa SQL)
Para que nunca te pierdas armando una consulta nivel Dios, memoriza el orden en que el servidor procesa tu código:
1. `FROM` (Elijo la tabla o inventario)
2. `WHERE` (Filtro la info en bruto. Ej: Excluir a los baneados)
3. `GROUP BY` (Hago grupitos por Clase o Rango)
4. `HAVING` (Filtro a los grupos que no cumplan mis reglas post-matemáticas)
5. `SELECT` (Decido qué columnas imprimir en tu monitor)
6. `ORDER BY` (Lo ordeno, ej: De más kills a menos kills)
