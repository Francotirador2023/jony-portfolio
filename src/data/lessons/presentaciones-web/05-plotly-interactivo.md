# Interactividad avanzada con Plotly.js

Plotly.js es el hermano mayor de Chart.js cuando hablamos de visualización científica y financiera. Es la misma librería que se usa en Python (`plotly.express`), pero ejecutándose nativamente en el navegador.

## Características clave
- **Herramientas de Zoom:** Permite seleccionar áreas del gráfico para profundizar en los datos.
- **Gráficos 3D:** Soporta superficies, líneas y puntos en tres dimensiones.
- **Exportación:** Incluye un botón para descargar el gráfico como imagen (PNG/SVG) directamente.

## Ejemplo de uso
Plotly utiliza una sintaxis declarativa. Solo necesitas un `div` contenedor:

```javascript
const data = [{
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers',
  type: 'scatter'
}];

Plotly.newPlot('miDiv', data);
```

![Ejemplo de Mapa de Riesgos Interactivo](/images/examples/electrocom_riesgos.png)

---

## ¿Cuándo usar Plotly?
- Cuando necesitas que el usuario explore los datos (hacer zoom, filtrar series haciendo clic en la leyenda).
- Para gráficos estadísticos complejos como diagramas de caja (boxplots) o violín.
- Si ya usas Plotly en Python, la transición a la web será casi inmediata.
