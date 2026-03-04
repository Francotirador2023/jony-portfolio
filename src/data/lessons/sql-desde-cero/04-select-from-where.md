# 🔍 La Trinidad de SQL: SELECT, FROM, WHERE

Llegó la hora de la verdad. En SQL, hacer consultas para extraer datos se llama DQL (*Data Query Language*). Su objetivo es puramente **leer e investigar** sin romper ni modificar nada.

El combo básico que usarás el 90% de tu vida profesional consta de tres palabras mágicas que **siempre** van en este orden (como elegir tu clase, armadura y buff antes del boss):

```sql
SELECT 
    -- 1. ¿Qué columnas (datos) quiero ver?
FROM 
    -- 2. ¿De qué tabla (inventario) saco la info?
WHERE 
    -- 3. ¿Qué condición o filtro deben pasar para que los muestre?
```

## 1. 👁️ SELECT y FROM

Imagina que estás viendo la Pokedex o una lista gigante de personajes de anime. Si quieres ver **todo** de todos, usamos el comodín `*` (asterisco).

```sql
-- Tráeme TODO sobre la tabla Personajes
SELECT * FROM Personajes_Anime;
```

![Ejecución de SELECT FROM en SQL](/images/courses/sql-select%20from-ejemplo.png)

> 🛑 **ALERTA ROJA:** Usar `*` en un servidor real de empresa con millones de datos puede trabar el sistema y hacer que tus compañeros te odien. Es una mala práctica.

Siempre debes nombrar **exactamente** lo que necesitas. Es más rápido y profesional:

```sql
SELECT Nombre, Universo, Poder_Ki FROM Personajes_Anime;
```

### 🎭 Usando Alias (`AS`)
A veces los programadores le ponen nombres raros a las columnas (ej. `usr_pow_lvl`). Puedes usar un **Alias** para "disfrazar" el nombre solo de manera visual para que sea más legible:

```sql
SELECT nomb AS Personaje, usr_pow_lvl AS Nivel_De_Poder FROM Personajes_Anime;
```

## 2. 🛡️ El poder absoluto del WHERE

El `WHERE` actúa como un portero de discoteca VIP o un filtro de matchmaking. Solo deja pasar a las filas que cumplen la condición.

**"Muestra personajes que sean solo de Dragon Ball:"**
```sql
SELECT Nombre, Nivel_De_Poder 
FROM Personajes_Anime 
WHERE Universo = 'Dragon Ball';
```
*(Nota: El texto exacto siempre va entre comillas simples `''`. ¡Los números van libres!)*

**"Muestra personajes con un poder mayor a 9000:"**
```sql
SELECT Nombre, Nivel_De_Poder
FROM Personajes_Anime 
WHERE Nivel_De_Poder > 9000;
```

---

### 🎮 Micro-Reto Rápido
Tienes la tabla `Stats_Jugadores` con las columnas `GamerTag`, `Rango` y `Kills`. 
Escribe mentalmente la consulta SQL (SELECT, FROM, WHERE) para encontrar a los jugadores que tengan su `Rango` exactamente como 'Radiante'.
*¡Arma tu query antes de ir a ver los operadores lógicos!*
