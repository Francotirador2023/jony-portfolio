# 🎲 Power BI: Hechos vs Dimensiones

Cuando abandonamos el "Excel Normal" (donde guardas todo amontonado en una hoja) y saltamos a **Power BI** para hacer Dashboards legendarios, descubrimos que tu PC puede colapsar si guardas la misma palabra 5 millones de veces.

Imagina guardar en *cada fila* el "Nombre Completo del Jugador, y de qué País es" por CADA bala que dispara en un Battle Royale. El peso del archivo sería monstruoso.

Para eso nació la regla de oro corporativa: **Dividir para Gobernar (Modelado Dimensional)**. Separamos la base de datos en dos grandes tipos de tablas.

## 🛡️ Las Dos Clases del Juego

Todo buen tablero de Power BI está formado por la unión de estas dos tablas:

### 1. Tablas de HECHOS (El Historial de Partidas)
Son los eventos puros. Lo que pasa rápido, sin parar y produce millones de filas de información (Ej: `Ventas`, `Kills`, `Daño`, `Logins`).
- **Aspecto Visual:** Son horribles de leer siendo humano. Tienen fechas puras, muchos números matemáticos y cientos de Códigos `ID` indescifrables. **Jamás** verás escrito "Juan" o "Pistola". Verás algo como `Jugador_ID = 455`, `Arma_ID = 12`.

### 2. Tablas de DIMENSIONES (La Wiki del Juego)
Son las tablas que dan **contexto textual**. Responden: *¿Quién?, ¿Cómo?, ¿Dónde?*. (Ej: `Tabla_Armas`, `Tabla_Jugadores`, `Calendario`).
- **Aspecto Visual:** Tienen poquitas filas pero mucha información por fila. Aquí SÍ está escrito "Pistola", su rareza, su color, y el daño base. Si el `Jugador 455` mató a un millón de bots, aparecerá 1 millón de veces en "Hechos", pero en la dimensión "Jugadores" solo existirá **una única vez** en toda la matriz.

## 🔗 La Magia de los Cables (Relaciones)

Cuando entras a la vista de Modelo en Power BI, ves cajas (Tablas). 
Si arrastras una línea invisible desde el `Jugador_ID` de *(La Dimensión Jugadores)* y lo unes al `Jugador_ID` de *(Hechos Partidas)*... acabas de iluminar la base de datos.

Le diste la habilidad a Power BI de **Cruzar Contexto**. Ahora puedes arrastrar a tu Dashboard la suma de "Kills" de una tabla, y separarla por "El País del Jugador" de la otra tabla, y los gráficos cobrarán vida solitos porque ahora ambas matrices hablan el mismo idioma.
