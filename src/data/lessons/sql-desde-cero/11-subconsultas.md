# 🪆 Subconsultas (Sub-Misiones en SQL)

Una "Subconsulta" (Subquery) es simplemente un `SELECT` metido adentro de otro `SELECT` principal. Es como hacer una Misión Secundaria para conseguir la llave que necesitas para entrar al Boss Final. 

O como la película Inception: *"Un código dentro de otro código"*.

Las usamos cuando no sabemos un valor exacto y necesitamos que SQL lo calcule rápido en segundo plano antes de hacer el filtro real.

## 🗡️ Subconsulta Escalar (De 1 solo número)

Devuelve un único valor. Se usa junto a los operadores normales como `=`, `<`, `>`.

> *"Tráeme el nombre del jugador que tenga EXACTAMENTE el mismo Nivel que el mejor jugador del Servidor"*

Si intentas filtrar poniendo un `MAX()` directo en el `WHERE`, SQL te sacará tarjeta roja.

**Solución correcta (Inception):**
```sql
SELECT GamerTag, Rango, Nivel 
FROM Jugadores 
WHERE Nivel = (
    -- ⬇️ Misión Secundaria (Se ejecuta primero, sin que nadie la vea):
    SELECT MAX(Nivel) 
    FROM Jugadores
);
```
El motor correrá primero el código pequeño de abajo (ej: "Ah, el nivel máximo es 100"), y luego correrá la misión principal diciendo: *"Tráeme a todos los jugadores donde el Nivel sea igual a 100"*.

## 🎒 Subconsultas de Lista con `IN`

A veces tu submisión no trae un solo número, sino el inventario entero de IDs. Si vas a recibir una lista entera, **NUNCA** uses `=` (igual). Debes usar `IN`.

> *"Tráeme el historial de chat de los jugadores que pertenecen al Clan TOP 1 (Los tryhards)"*

```sql
SELECT Log_Mensaje, Hora_Envio 
FROM Reportes_Chat 
WHERE Riot_ID IN (
    -- ⬇️ Esta submisión lista los IDs de 50 jugadores al mismo tiempo
    SELECT Riot_ID 
    FROM Miembros_Clan 
    WHERE Nombre_Clan = 'Los Invencibles'
);
```

### ⚔️ JOINs vs. Subqueries (El Meta Actual)
Mucha de la lógica que haces con Subconsultas `IN` se puede hacer usando un `INNER JOIN`. ¿Cuál debes pickear?
- **Los JOINs suelen ser mucho más rápidos:** Los motores de Netflix o Riot Games están masivamente optimizados para cruzarlos a la velocidad de la luz.
- **Las Subconsultas son más fáciles de leer:** Cuando el código requiere cruzar 15 tablas distintas, un JOIN gigante es ilegible. Una subconsulta es clara como el agua.

Si te topas con códigos gigantes e ilegibles, tranquilo. La próxima lección sobre CTEs (*Common Table Expressions*) es el "truco" que las empresas Big Tech usan para mantener el código limpio.
