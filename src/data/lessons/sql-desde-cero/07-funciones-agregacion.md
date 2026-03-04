# 📊 Funciones de Agregación (Stats del Servidor)

Las funciones de agregación son como el "Resumen de Fin de Partida" de SQL. Toman una columna entera con millones de datos de los jugadores y la comprimen en un solo número global.

## 1. Contar Filas (`COUNT`) - El Censo

Es la habilidad más usada del juego. Responde preguntas como: "¿Cuántos usuarios se conectaron hoy?" o "¿Cuántos bots hemos baneado?".

```sql
-- Cuenta absolutamente todo lo que hay en la tabla Servidor_NA
SELECT COUNT(*) AS Jugadores_Totales 
FROM Servidor_NA;
```

> ⚠️ **Cuidado con los Nulos:** Si cuentas una columna específica (`COUNT(Skins_Legendarias)`), SQL ignorará a los jugadores que tengan un `NULL` en esa columna.

## 2. Sumar Valores (`SUM`) - El Botín Total

Simplemente suma los valores matemáticos de toda una columna. Ideal para la economía del juego.

```sql
-- ¿Cuánto oro en total han farmeado TODOS los jugadores esta temporada?
SELECT SUM(Oro_Firmeado) AS Economia_Global
FROM Banco_Del_Juego;
```

## 3. Promedios (`AVG`) - El Average

Saca la media estadística (average) de una columna.

```sql
-- ¿Cuál es el KDA (Kills) promedio general de toda la comunidad?
SELECT AVG(Kills) AS Promedio_Kills_Server 
FROM Estadisticas_Partida;
```

## 4. Máximos y Mínimos (`MAX`, `MIN`) - Los Récords Mundiales

Para buscar al Top 1 Global y al más noob, o el ítem más caro de la tienda. Funciona con números, fechas e incluso orden alfabético.

```sql
-- ¿Quién es el verdadero tryhard del juego? (Nivel más alto)
SELECT MAX(Nivel_Cuenta) AS Maximo_Nivel_Alcanzado
FROM Jugadores;

-- ¿Cuál fue el primer jugador en crear su cuenta en la beta?
SELECT MIN(Fecha_Creacion) AS Jugador_Mas_Viejo
FROM Jugadores;
```

### 🎮 Micro-Reto Rápido
Todas estas funciones nos están dando **un solo número** final para todo el servidor. Pero, ¿qué pasa si el CEO de Riot te dice: *"No quiero el promedio general. Quiero saber el Kills Promedio de **CADA RANGO** (Bronce, Plata, Oro...)"*? 
¡Piensa cómo "partirías" la tabla antes de ir al siguiente capítulo!
