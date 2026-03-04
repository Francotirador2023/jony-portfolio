# 🔗 Tipos de JOINs (El Crossover Definitivo)

A medida que tu base de datos crece (como un RPG de 100 horas), la información estará separada en docenas de tablas. Para armar un reporte o "Build", necesitarás juntar ítems que están en cofres distintos.

Para eso usamos el hechizo `JOIN`. Imagina un Diagrama de Venn (esos dos círculos que se cruzan).

## 🛠️ La receta del JOIN
Para fusionar dos tablas necesitas tres ingredientes:
1. La **Tabla A** (Tu tabla principal, la de la izquierda).
2. La **Tabla B** (La tabla invitada, la de la derecha).
3. La **Condición (`ON`)** que dicta qué llave tienen en común (Aquí entran a brillar las Primary y Foreign Keys de las que hablamos antes).

---

## 1. ⚔️ INNER JOIN (El Matchmaking Perfecto)
Es el más usado en la industria. Sólo devuelve las filas que **TIENEN PAREJA** o coinciden en **AMBAS** tablas (el centro exacto del Diagrama de Venn).

```sql
SELECT 
    J.GamerTag, 
    P.Nombre_Partida, 
    P.Kills
FROM Jugadores AS J
INNER JOIN Partidas_Jugadas AS P  
    ON J.Riot_ID = P.Riot_ID;
-- (Solo veremos a los jugadores que SÍ jugaron al menos una partida. Los inactivos son ignorados por completo).
```

![Ejecutando Inner Join en SQL Server (Riot Games)](/images/courses/sql-%20join-%20ejemplo.png)

## 2. 🛡️ LEFT JOIN (Respeta a los Tuyos)
Pide **TODAS** las filas de la Tabla Izquierda (la que invocas primero en el `FROM`). Si encuentra que hay datos que hacen match en la Derecha, los muestra. Si un jugador de la izquierda NO tiene match en la derecha, no lo borra... simplemente muestra sus datos de la derecha como `NULL`.

Supongamos que quieres una lista de **TODOS** los miembros de tu Clan, y ver si han donado oro esta semana.

```sql
SELECT 
    C.Nickname, 
    D.Oro_Donado
FROM Clan_Miembros AS C         -- (Tabla Izquierda: Trae a TODOS los del Clan)
LEFT JOIN Donaciones_Semana AS D -- (Tabla Derecha)
    ON C.Miembro_ID = D.Miembro_ID;

-- Si tu amigo "Faker" no donó nada, aparecerá "Faker" pero con Oro_Donado en NULL (¡es hora de kickearlo del clan!).
```

## 3. 🏹 RIGHT JOIN (El Modo Inverso)
Es el espejo exacto del `LEFT JOIN`. Trae todo lo de la Tabla Derecha, sin importar si cruzó o no con la Principal. 

Súper Pro Tip: *Casi nadie* lo usa en la vida real. Los verdaderos devs simplemente invierten el orden de las tablas en su código y siguen usando `LEFT JOIN` para mantener la lectura de arriba hacia abajo.

## 4. 🌍 FULL OUTER JOIN (El Caos Multiversal)
Retorna **todas** las filas de la tabla izquierda y **todas** las de la tabla derecha, coincidan o no. Todo lo que no haga match se llenará de `NULL`s por todas partes.
*(Atención: Usar esto en bases de datos masivas te puede consumir toda la RAM del servidor y lagear el juego entero).*

```sql
SELECT 
    C.Nickname, 
    D.Oro_Donado
FROM Clan_Miembros AS C
FULL OUTER JOIN Donaciones_Semana AS D 
    ON C.Miembro_ID = D.Miembro_ID;
```

¡Dominar estos 4 combos de fusión te convierte matemáticamente en un analista Junior! En la próxima lección veremos técnicas avanzadas: ¡Misiones secundarias dentro de tu misión principal (Subconsultas)!
