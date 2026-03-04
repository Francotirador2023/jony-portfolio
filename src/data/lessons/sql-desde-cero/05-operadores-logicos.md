# 🧠 Operadores Lógicos (Combos de Filtros)

En la lección pasada vimos cómo usar el portero `WHERE` para poner una sola regla. Pero, ¿qué pasa si estás explorando Twitch y dices: *"Quiero ver streamers que jueguen Valorant **Y** que tengan más de 5000 viewers, **O** quiero que simplemente sean de México"*? 

Ahí es donde entran los combos: **Los Operadores Lógicos**.

## ⚔️ Los 5 Operadores Principales

### 1. AND (La condición Y)
La fila debe cumplir **TODAS** las reglas. Es muy estricto.

```sql
-- Dúos tryhard: Rango Diamante Y un Winrate altísimo
SELECT GamerTag, Rango 
FROM Jugadores 
WHERE Rango = 'Diamante' AND WinRate_Porcentaje > 65;
```

### 2. OR (La condición O)
Más relajado. La fila entra si cumple **al menos una** de las reglas.

```sql
-- Jugadores que sean Main Jett o Main Reyna (instalockers)
SELECT GamerTag, Agente_Favorito 
FROM Jugadores 
WHERE Agente_Favorito = 'Jett' OR Agente_Favorito = 'Reyna';
```

### 3. IN (Dentro del grupo VIP)
Cuando tienes muchos `OR` repetidos, el código se ve feo y largo. `IN` nos permite crear una "lista negra" o "lista blanca" al instante.

```sql
-- "Dime si tu rango está dentro de estos tres"
SELECT GamerTag, Rango 
FROM Jugadores 
WHERE Rango IN ('Bronce', 'Plata', 'Oro');
```

### 4. BETWEEN (Entre una cosa y otra)
Ideal para crear rangos, como por ejemplo: fechas, precios en una tienda de e-sports o estadísticas de daño (es *inclusivo*, incluye los topes).

```sql
-- Jugadores con nivel de cuenta entre 50 y 100
SELECT GamerTag, Nivel_Cuenta 
FROM Jugadores 
WHERE Nivel_Cuenta BETWEEN 50 AND 100;
```

### 5. LIKE (Búsqueda de Patrones | Sólo texto)
El buscador de detectives 🕵️‍♂️. Úsalo cuando no sabes cómo se escribe una palabra exacta, pero sabes que debe *contener* ciertas letras.

El comodín `%` significa "no me importa qué haya aquí, puede haber ningún o mil caracteres".

**"Encuentra Nicknames que empiecen con 'TTV' (Streamers de Twitch):"**
```sql
SELECT GamerTag 
FROM Jugadores 
WHERE GamerTag LIKE 'TTV%';
```

**"Encuentra correos que terminen en '.edu' (Cuentas de Universidad):"**
```sql
SELECT Correo_Gamer 
FROM Cuentas 
WHERE Correo_Gamer LIKE '%.edu';
```

> 💡 **Tip Pro:** Las bases de datos suelen ser sensibles a mayúsculas (Case Sensitive). En PostgreSQL, si usas `ILIKE` en lugar de `LIKE`, buscará la palabra sin importar si está escrita como TTV, ttv, Ttv. ¡Súper útil!

---
### 🎮 Micro-Reto Rápido
¿Qué sucede si le dices a SQL esto: `WHERE Nivel > 100 AND Nivel < 50`? ¿Qué crees que devolverá la base de datos? ¿Un error, todos los jugadores, o la tabla vacía? 
*(Spoiler: Piensa si es lógicamente posible hacer ambas cosas a la vez).*
