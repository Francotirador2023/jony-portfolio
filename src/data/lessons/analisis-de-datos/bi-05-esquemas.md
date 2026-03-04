# 🌟 Esquemas: Estrella vs Copo de Nieve

Hablamos antes de que Power BI necesita separar todo en Hechos (Historial de Partidas) y Dimensiones (Wiki del Juego). Pero... ¿cómo conectamos todo eso para que el motor del juego rinda a 144 FPS y no nos dé Lag?

Existen 2 "Metas" universales para armar este rompecabezas.

## 👑 El Meta Actual: El Esquema en Estrella (Star Schema)

Es la forma perfecta y más optimizada. Su nombre viene de su figura.
Imagina un **Hub Principal** en un RPG (como el Castillo Central o la plaza de la ciudad). Ese centro gigante es tu **Tabla de HECHOS**.
Rodeando a ese Hub, apuntando hacia él en forma de estrella, tienes a los mercaderes y NPCs: son tus **Tablas de DIMENSIONES** (Armas, Jugadores, Mapas).

**Reglas vitales de la Estrella:**
- La Dimensión "Armas" conecta directo al Hecho "Partidas". La Dimensión "Mapas" conecta directo al Hecho "Partidas".
- **Nadie se conecta entre sí.** La Armería no manda una flecha hacia los Mapas.
- Todo filtra directamente al Hub Central en 1 solo paso. Cero Lag.
- No importa que se repitan palabras en las Dimensiones. Lo que nos importa es la velocidad extrema al crear Tableros.

![Diseño de Esquema en Estrella en Power BI Model View](/images/courses/bi-model%20view-ejemplo.png)

> 💡 **Tip Pro:** Microsoft Power BI está programado mágicamente para devorar Esquemas en Estrella a la velocidad de la luz. **SIEMPRE JUEGA CON ESTE META**.

## ❄️ El Hermano Molesto: Esquema Copo de Nieve (Snowflake)

Imagina tu Estrella perfecta, pero te das cuenta de que la Dimensión **Armas** tiene columnas para "Categoría", que tiene columnas para "País del Fabricante". Y decides: *"Oh, voy a separar la Categoría en una tabla aparte... y esa en otra"*.

Ahora, Partidas conecta a Armas. Armas conecta a Categorías. Categorías conecta a Países. Has creado Misiones Secundarias encadenadas infinitas. Esto parece un copito de nieve ramificándose.

**El Problema (Crasheos y Lag):**
- Cuando tu Jefe (o Equipo de E-sports) quiera filtrar todas las partidas que se jugaron con Armas de "Rusia", el motor de Power BI tendrá que arrastrar ese filtro cruzando 3 tablas intermedias haciendo cálculos absurdos antes de poder llegar a la meta. 
- Te ganarás el odio de tus colegas analistas porque el Dashboard tardará 10 segundos en cargar cada vez que hagan un clic.

Quédate con la simpleza de la Estrella (Star Schema) y dominarás el juego de los datos sin sufrir colapsos.
