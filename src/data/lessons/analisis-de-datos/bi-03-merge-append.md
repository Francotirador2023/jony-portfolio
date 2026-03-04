# Unir (Merge) y Anexar (Append): El Jefe Final

Cuando juegas en escuadrón, necesitas unir las habilidades de un Tanque con el daño del Tirador para ganar la partida. 
En el mundo real del análisis, casi NUNCA tendrás toda tu información en un solo archivo de Excel o CSV mágico. Tendrás la lista de ventas en uno y el directorio de clientes secretamente guardado por el área de marketing en otro.

Para esto existe **Unir (Merge)** y **Anexar (Append)** en el Power Query. Ambos resuelven la pesadilla de hacer miles de `=BUSCARV()` lagueados en Excel.

## 1. El famoso Join: Merge (Unir Consultas)

**¿Qué hace?** Pega nuevas COLUMNAS de otra tabla basándose en una "llave principal" en común (como una ID, un código de jugador o RiotID). Es literalmente igual a un `JOIN` en SQL.

### El Caso: LOL Esports
Imagínate que al sistema insertaste dos tablas en Power Query:
*   **Tabla A (Partidas):** Tiene quién ganó el "Worlds 2023", las kills y fechas, pero solo menciona el nombre del equipo (`T1`, `GEN.G`). No tienes idea de qué continente es cada equipo.
*   **Tabla B (Directorio):** Es una tablita aburrida con el `Nombre` del Equipo (`T1`) y el `Continente` (`Asia/Corea`).

**Misión:** Traer el `Continente` a la tabla principal.

1.  Abre Power Query (Click en *Transformar Datos*). Selecciona tu tabla primaria (Partidas).
2.  En la cinta Inicio, ve a **Combinar Consultas (Merge Queries)** > **Combinar Consultas**.
3.  Aparece un cuadro que parece el Matchmaking del juego:
    *   Arriba, tu tabla principal (Partidas). Haz clic en la columna pilar: `Equipo`.
    *   Abajo, del menú desplegable, selecciona tu Tabla B (Directorio). Haz clic en la misma columna pilar: `Nombre`.
    *   Asegúrate de que el Join Kind sea **Left Outer** (Externa Izquierda - trae todo lo del primero, y sólo lo que coincida del segundo).
4.  Le das OK. Se añadirá una columna que dice "Table". Presiona el boton de "Extender" 🔀 en el encabezado y ¡voalá! Ahora tienes el País al lado de las Kills.

![Ejemplo de Merge en Power Query](/images/courses/bi-combinar%20consultas-ejemplo.png)

---

## 2. El Apila-bloques: Append (Anexar Consultas)

**¿Qué hace?** Une una tabla DEBAJO de la otra. Sirve para acumular los datos mensuales en una tabla gigante con los mismos nombres de columna.

### El Caso: Seasons

Imagina que recibes las Partidas Ranked de `Season_13.csv` y al mes siguiente te llega `Season_14.csv`. Si tienen exactamente las mismas columnas (Kills, Deaths, Rango):

1.  Ve a **Anexar Consultas (Append Queries)** > **Anexar como nueva Consulta**.
2.  Power Query apilará las 1000 filas de la Season 13 encima de las 1000 de la Season 14 para que puedas analizarlas juntas sin problemas.

![Botones de Merge y Append](/images/courses/bi-anexar%20append-ejemplo.png)

> [!CAUTION]
> Si los nombres de las columnas no son IGNUALMENTE escritos (ej. `Victoria` vs `Victorias` con 's'), el Append creará columnas vacías para todo. Power Query respeta las mayúsculas como si fueran contraseñas, ¡cuidado!

Si sobreviviste a Marge y Append... ¡Estás listísimo para salir del Power Query e iniciar con DAX y gráficas en la próxima Fase del curso!
