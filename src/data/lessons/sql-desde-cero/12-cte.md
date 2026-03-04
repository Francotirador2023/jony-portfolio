# 🏗️ CTEs (Creando tu Loadout Inicial)

En la lección pasada vimos que anidar demasiadas Subconsultas puede transformar tu código en un enredo de espagueti imposible de leer (código *Spaghetti*, como le dicen los haters).

Para arreglar eso, la industria inventó las **Common Table Expressions (CTEs)**. Son la solución elegante y moderna.

Fueron creadas bajo esta genial idea: *"¿Por qué no le ponemos un nombre bonito a esa sub-consulta asquerosa, la guardamos temporalmente al inicio del archivo, y luego simplemente la cruzamos con un JOIN limpio al final?"*

## 🔮 Invocando la Palabra Sagrada: `WITH`

Las CTE siempre se declaran usando el comando `WITH` en la cima absoluta de tu código. Es como armar tu *Loadout* (clase, armas, pociones) en el lobby antes de que empiece la partida de Warzone.

> **Misión del Jefe:** Extraer a todos los jugadores, pero agregando una columna extra que diga "El WinRate Promedio de todo su Clan" para ver si el jugador está carreando a su clan o lo están carreando a él.

Hacer esto anidando es brutal para los ojos. Mira esta elegancia:

```sql
-- 🛠️ EL LOBBY: Creamos el CTE (La tabla temporal) con WITH
WITH CTE_PromedioClan AS (
    SELECT 
        Clan_ID, 
        AVG(WinRate) AS WinRate_Del_Clan
    FROM Jugadores
    GROUP BY Clan_ID
)
-- ⏱️ Fin del Lobby. Esta "tabla virtual" solo existirá en la nube por 1 segundo mientras corre el código.

-- 🎮 LA PARTIDA: Nuestro reporte final, totalmente limpio.
SELECT 
    J.GamerTag, 
    J.WinRate AS Su_WinRate_Personal,
    C.WinRate_Del_Clan,      -- ¡Invocamos la columna del lobby de arriba!
    (J.WinRate - C.WinRate_Del_Clan) AS Carreo_Puntos
FROM Jugadores AS J
LEFT JOIN CTE_PromedioClan AS C 
    ON J.Clan_ID = C.Clan_ID;
```

## ⭐ Los Buffs Secretos del `WITH`
1. **Legibilidad Extrema:** Se lee como un libro de arriba hacia abajo. Cero confusiones.
2. **Reutilización:** Una vez creas esa CTE en el Lobby, puedes hacerle `SELECT` o cruzarla mediante `JOIN` todas las veces que quieras más abajo.
3. **El Multiverso:** Si tu reporte financiero requiere datos de Ventas, de Logs del Server, y del Foro, puedes crear múltiples CTEs separadas con comas, y unirlas todas al final como si fueras Thanos recolectando gemas.

```sql
WITH CTE_Partidas_Ayer AS (...),
     CTE_Baneos_Hoy AS (...),
     CTE_Ventas_Skins AS (...)

-- El gran final:
SELECT * 
FROM CTE_Partidas_Ayer P
JOIN CTE_Baneos_Hoy B ON P.Server_ID = B.Server_ID
JOIN CTE_Ventas_Skins V ON P.Server_ID = V.Server_ID;
```

Si dominas el `WITH` y los `JOINS`, ya puedes poner *"Advanced SQL"* en tu currículum sin miedo al ban.

¡🎉 FELICIDADES POR LLEGAR HASTA AQUÍ y DERROTAR SQL! Prepárate para tu próximo gran desafío: [Análisis de Datos con Excel y PowerBI](../analisis-de-datos). 🚀
