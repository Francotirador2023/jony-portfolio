# Interactividad Avanzada con Plotly.js

En la lección anterior vimos cómo crear hermosos gráficos animados usando Chart.js. Pero, ¿qué pasa si necesitas que el usuario interactúe profundamente con el gráfico? Por ejemplo, hacer zoom en una sección densa de puntos, filtrar categorías con un clic en la leyenda, o ver información extremadamente detallada al pasar el ratón.

Para gráficos científicos, de dispersión o financieros altamente interactivos, la herramienta ideal es **Plotly.js**.

---

## ¿Qué es Plotly.js?

**Plotly.js** es una librería construida sobre D3.js y WebGL. Es famosa porque, por defecto, incluye una **barra de herramientas interactiva** en cada gráfico que permite a los usuarios:
- Hacer zoom en rectángulos específicos de la pantalla.
- Desplazarse por el gráfico (pan).
- Descargar el gráfico como una imagen PNG con un solo clic.
- Comparar múltiples puntos de datos al mismo tiempo.

---

## Cargando Plotly.js en tu Página Web

Al igual que con Chart.js, cargaremos Plotly.js usando un script CDN de forma súper sencilla en nuestro `<head>`:

```html
<script src="https://cdn.plot.ly/plotly-2.24.1.min.js"></script>
```

---

## Creando tu Primer Gráfico en Plotly.js

En Plotly.js, la estructura para crear un gráfico se divide en tres conceptos sencillos:
1. **El Contenedor HTML:** Un simple `<div>` con un identificador único.
2. **Los Datos (`data`):** Una lista (array) que contiene los valores de X e Y, y define el estilo del gráfico (líneas, barras, puntos).
3. **El Diseño (`layout`):** Un objeto de configuración que define los títulos, colores de fondo y límites de los ejes.

Aquí tienes un ejemplo práctico para crear un gráfico de dispersión interactivo:

```html
<!-- Contenedor HTML -->
<div id="miGraficoPlotly" style="width: 100%; max-width: 600px; height: 400px;"></div>

<script>
    // 1. Definimos los datos del gráfico
    const trazo1 = {
        x: [1, 2, 3, 4, 5],
        y: [10, 15, 13, 17, 22],
        mode: 'markers', // 'markers' para puntos sueltos, 'lines' para líneas
        type: 'scatter',
        marker: { 
            size: 12, 
            color: '#4f46e5' // Puntos color índigo
        },
        name: 'Ventas Online'
    };

    const datos = [trazo1]; // Plotly requiere que los trazos estén en una lista

    // 2. Definimos el diseño del gráfico (opciones visuales)
    const diseno = {
        title: 'Tendencia de Ventas Semanales',
        font: { color: '#ffffff' }, // Texto blanco
        paper_bgcolor: '#1e1e2e',   /* Fondo de la tarjeta */
        plot_bgcolor: '#1e1e2e',    /* Fondo de la cuadrícula */
        xaxis: { gridcolor: '#313244' }, // Cuadrícula sutil
        yaxis: { gridcolor: '#313244' }
    };

    // 3. Dibujamos el gráfico en el contenedor 'miGraficoPlotly'
    Plotly.newPlot('miGraficoPlotly', datos, diseno);
</script>
```

---

## Conexión Real: El Mapa de Riesgos de ELECTROCOM

Plotly.js es perfecto para visualizaciones analíticas complejas. En el panel de control de **ELECTROCOM**, lo utilizamos para construir el **Mapa de Riesgo Operativo**. 

En este gráfico de dispersión, colocamos la "Probabilidad" en el eje X y el "Impacto" en el eje Y. Plotly permite a los usuarios hacer zoom en áreas críticas de alto riesgo para leer las etiquetas de las alertas de forma interactiva y descargar reportes al instante:

![Ejemplo de Mapa de Riesgos Interactivo](/images/examples/electrocom_riesgos.png)

---

## 🎯 Tu Reto Práctico

1. Abre tu archivo `index.html`.
2. Incluye el script de Plotly.js en el `<head>`.
3. Crea un `div` con `id="miGraficoPlotly"` en el `<body>` y agrega el bloque de código de JavaScript de ejemplo.
4. Experimenta agregando un segundo trazo (por ejemplo, `const trazo2 = { x: [1,2,3,4,5], y: [16,5,11,9,15], mode: 'lines+markers', name: 'Ventas Físicas' };`) y agrégalo a tu lista de datos: `const datos = [trazo1, trazo2];`. ¡Observa cómo Plotly maneja múltiples series y te permite filtrarlas haciendo clic en la leyenda!
