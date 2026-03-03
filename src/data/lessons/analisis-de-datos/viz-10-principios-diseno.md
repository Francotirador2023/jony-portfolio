# Principios de Diseño de Dashboards

El Modelado de DAX invisible en las sombras es para el equipo Técnico, pero... al Director Financiero y al CEO de tu Empresa, no les importa en absoluto el código DAX. Ellos solo interactúan y aprueban tu trabajo viendo **El Canvas (Lienzo) de Visualización**. 

Si un modelo es glorioso matemáticamente, pero tu Dashboard parece una caja de Legos desordenada, te llamarán Incompetente. 

## 1. La Carga Cognitiva

Las mentes humanas no están capacitadas orgánicamente para procesar una matriz de números crudos. En 3 segundos, tu cerebro decide si una página es sofocante o amigable.

### Espacio Blanco (White Space / Respiro)
No llenes cada milímetro libre de la pantalla con filtros o indicadores. Deja que los rectángulos respiren. Pon bordes limpios y fondos tenues o sutiles. Evita colores neón horribles (rojo fuerte, amarillo sol). Usa paletas estandarizadas de corporación. 

## 2. La Regla de Arquitectura de Lectura (El Patrón "Z")

En la cultura occidental leemos de Izquierda a Derecha, y de Arriba a Abajo. Forma un trazo en "Z".

- **Superior Izquierdo:** Aquí aterriza el globo ocular humano por instinto en la fracción cero. DEBE ESTAR tu **KPI General Más Critico Absoluto**. (Ej: Ganancias Totales Brutas, Unidades Vendidas).
- **Barra Superior Horizontal:** Fila de resúmenes numéricos grandes en "Tarjetas" (Cards) sin gráficas. (Ganancias, Margen YoY, Promedio por Cliente).
- **Centro Abajo Gran Espacio:** Tu gráfico estelar que demanda atención (Un gráfico de barras o de líneas largo y suave, mostrando tendencias temporales vitales).
- **Franja Derecha / Inferior Esquina:** Tablas detalladas aburridas, o gráficas de apoyo menores.

## 3. Minimización Tinta-Dato (Data-Ink Ratio)

Por favor, como tu primer favor hacia tu Jefe: **Quita siempre el eje Y lleno de "Zeros" de los gráficos de Barras.** 

Si una barra llega a "15,000" euros y dice "$15K" adentro de la barra, ¡Elimina inmediatamente todos los rayones del panel gris detrás y no satures inútilmente mostrando los números repetidos en el borde izquierdo de la gráfica!

Entre más blanco quede el fondo de tu gráfico... Más impacto tendrá visualmente la Barra de Tinta de tu dato arrojado. ¡Diseña para impresionar directores ejecutivos y ser contratado de inmediato!
