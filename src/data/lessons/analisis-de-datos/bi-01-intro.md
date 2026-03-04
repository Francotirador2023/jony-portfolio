# Power BI Desktop: Interfaz y Carga de Datos

Bienvenido al "motor gráfico" del análisis empresarial moderno: **Power BI Desktop**.
Si alguna vez jugaste un juego como *Cyberpunk 2077* o *GTA V* y miraste el mini-mapa o el HUD para ver tu vida, balas y misiones: **eso es un Dashboard.** Power BI es la herramienta que te permite construir esos "HUDs" pero para negocios reales.

En esta primera misión, vamos a familiarizarnos con la interfaz (el menú principal de tu juego) y vamos a cargar nuestro primer archivo de guardado (dataset).

## 1. Conociendo el Lobby (La Interfaz)

Cuando abres Power BI Desktop por primera vez, verás una pantalla blanca que puede parecer intimidante, pero tiene 3 vistas principales a la izquierda (como si fueran las pestañas de tu perfil de jugador):

1. **📊 Vista de Informe (Report View):** Es tu "Lienzo en blanco". Aquí dibujas los gráficos, métricas y el Dashboard final. (Lo usaremos al final del curso).
2. **🗂️ Vista de Datos (Data View):** Es como ver el código Matrix. Aquí ves las tablas crudas de información, filas y columnas al puro estilo Excel.
3. **🕸️ Vista de Modelo (Model View):** Tu árbol de habilidades. Aquí conectas diferentes tablas entre sí creando "Relaciones".

![Power BI Interfaz](/images/courses/bi-lobby-ejemplo.png)

---

## 2. Invocando tu Primer Archivo (Get Data)

Para analizar datos, primero necesitamos... bueno, ¡datos!
Vamos a cargar la **Pokédex Nacional** (el archivo `analisis-01-pokedex.csv` que descargaste antes).

1. En la pestaña Inicio (Home) arriba a la izquierda, hay un botón gigante dorado (metafóricamente) que dice **Obtener datos (Get Data)**.
2. Al darle clic, verás que Power BI se puede conectar a casi cualquier cosa: Bases de datos SQL, Excel, Páginas Web, hasta servidores de AWS.
3. Para nuestra misión, selecciona **Texto/CSV** y busca tu archivo `analisis-01-pokedex.csv`.

![Botón Obtener Datos](/images/courses/bi-obtener%20datos-ejemplo.png)

---

## 3. Cargar vs Transformar

Cuando selecciones el archivo, Power BI te mostrará una vista previa de la ventana de los Pokémon atrapados. Aquí tienes **dos caminos**:

* **Botón Cargar (Load):** Si los datos están limpios y perfectos (casi nunca pasa en la vida real), esto carga los datos directo al lienzo.
* **Botón Transformar Datos (Transform Data):** ¡Esta es la opción PRO! Abre una dimensión alterna llamada **Power Query**, donde podemos limpiar la basura, quitar errores y pulir nuestros datos antes de cargarlos.

![Ventana de Previsualización](/images/courses/bi-cargar%20vs%20transformar-ejemplo.png)

> [!TIP]
> **Regla de Oro del Analista:** En el 99% de los casos profesionales, SIEMPRE presionarás "Transformar Datos" primero. Es mejor limpiar el cuarto antes de meter los muebles nuevos.

Haz clic en **Transformar Datos** para abrir Power Query. ¡Nos vemos en la siguiente lección para empezar a limpiar esta base de datos!
