# Gráficos Rápidos con Chart.js

Dibujar figuras geométricas manualmente con SVG o Canvas es divertido para entender las bases, pero en el mundo real, para crear dashboards profesionales rápidamente, no reinventamos la rueda. Utilizamos **librerías de visualización**.

La librería más amigable, popular y fácil de aprender para principiantes es **Chart.js**. Permite crear gráficos responsivos, animados y con excelente diseño visual con muy pocas líneas de código.

---

## ¿Cómo Añadir Chart.js a tu Web? (El método CDN)

Para empezar, no necesitas instalar nada complejo en tu computadora. Podemos cargar Chart.js directamente desde internet usando una red de distribución de contenido (**CDN**) agregando una simple etiqueta `<script>` en tu HTML:

```html
<!-- Agrega esto dentro del <head> de tu HTML -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

---

## Estructura para Crear tu Primer Gráfico

Para usar Chart.js, necesitamos:
1. Una etiqueta `<canvas>` en HTML que servirá de contenedor físico para el gráfico.
2. Un bloque de JavaScript para definir los datos (labels y valores) y el tipo de gráfico.

Aquí tienes el código completo para crear un gráfico de barras interactivo:

```html
<div style="width: 400px; height: 300px; background-color: #1e1e2e; padding: 20px; border-radius: 12px;">
    <canvas id="miGrafico"></canvas>
</div>

<script>
    // 1. Seleccionamos el lienzo
    const ctx = document.getElementById('miGrafico').getContext('2d');
    
    // 2. Inicializamos Chart.js
    const miGrafico = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: 'bar', 'line', 'pie', 'radar', etc.
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'], // Etiquetas del Eje X
            datasets: [{
                label: 'Ventas ($)',
                data: [1200, 1900, 3000, 5000, 4200], // Valores numéricos
                backgroundColor: '#10b981', // Color de las barras (Verde)
                borderColor: '#059669',
                borderWidth: 1,
                borderRadius: 5 // Barras con esquinas redondeadas elegantes
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true // Empieza el eje Y en 0
                }
            }
        }
    });
</script>
```

¡Si lo pruebas en tu navegador, verás que Chart.js dibuja automáticamente las barras, los ejes, añade animaciones de carga fluidas y muestra ventanas de información flotante (tooltips) al pasar el cursor por encima!

---

## Conexión Real: El Gráfico de Radar de ELECTROCOM

Chart.js soporta una gran cantidad de gráficos avanzados. Por ejemplo, en el dashboard operativo de **ELECTROCOM**, utilizamos un **Gráfico de Radar** (Radar Chart) para evaluar la eficiencia en diferentes áreas operativas (Logística, Calidad, Atención, etc.).

Al configurar el tipo de gráfico como `type: 'radar'`, Chart.js dibuja una elegante "red" poligonal que permite comparar múltiples variables a la vez de forma ultra visual:

![Ejemplo de Gráfico de Radar en Dashboards](/images/examples/electrocom_radar.png)

---

## 🎯 Tu Reto Práctico

1. Abre tu archivo `index.html`.
2. En la sección del `<head>`, asegúrate de incluir el script CDN de Chart.js.
3. Copia el HTML y JavaScript de ejemplo para crear el gráfico de barras dentro de tu `<body>`.
4. Intenta cambiar la propiedad `type: 'bar'` por `type: 'line'` para transformarlo instantáneamente en un gráfico de líneas, o por `type: 'pie'` para un gráfico de pastel. ¡Observa lo fácil que es cambiar de visualización con una sola palabra!
