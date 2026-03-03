# Modelado: Hechos vs Dimensiones

Cuando brincamos del "Excel plano" (donde todo está en una sola sábana gorda inmensa de datos) hacia **Power BI** o el **Data Warehousing**, descubrimos la peor práctica: La redundancia masiva.

Imagina tener en cada fila el Nombre Completo y Edad del Cliente por cada paquete de chicle que compra. Tu computadora se congelará antes de llegar a los 10 millones de tickets.

Para eso nació el padre de todo análisis moderno corporativo: **La Inteligencia de Negocios (Business Intelligence)** estructurada mediante modelos de tablas separadas.

## Las Dos Chicas de la Fiesta

En cualquier empresa constructora de tableros, sus datos siempre caerán en una de estas dos categorías irremediablemente:

### 1. Tablas de HECHOS (Fact Tables)
Son los eventos del negocio. Lo que ocurre segundo a segundo, en enormes volúmenes. Todo lo medible y sumable.
- Ejemplos: `Ventas`, `Clicks_en_Web`, `Movimientos_Bancarios`, `Asistencias_RRHH`.
- **Anatomía:** Están repletas de números horribles, fechas, montos, cantidades, y cientos de `IDs` (Identity Keys). **Jamás** verás un nombre propio como "Juan Pérez" aquí. Verás `ClienteID = 14`.

### 2. Tablas de DIMENSIONES (Dimension Tables)
Dan el **contexto** histórico o textual a los Hechos. Responden ¿Quién, Cómo, Cuándo, Dónde?. Tienen mucha información descriptiva, pocos registros totales y son "bajitas pero gordas".
- Ejemplos: `Clientes`, `Productos`, `Tiendas`, `Calendario`.
- **Anatomía:** No tienen ventas ni números de transacciones. Está el Padrón. Tienen muchísimas columnas descriptivas por fila. Si el `ClienteID 14` aparece un millón de veces en Hechos (una por compra); en la tabla Cliente aparecerá **una sola vez**.

## La Magia Dimensional

Cuando creas una línea/hilo desde el `ClienteID` de la Dimensión `Clientes`, arrastrándola hasta engancharla con el `ClienteID` de la tabla de Hechos `Ventas` *(en tu panel de Relaciones de Power BI/Excel)*, acabas de lograr lo imposible.

Le diste luz y **contexto cruzado**. Ahora puedes crear una gráfica, y en el eje Y jalar `Suma_de_Pesos` de Hechos_Ventas, y para el nombre de las barras, jalar alegremente la columna `Nombre_Ciudad` de la Dimensión_Tienda, todo conectado a través de las llaves.
