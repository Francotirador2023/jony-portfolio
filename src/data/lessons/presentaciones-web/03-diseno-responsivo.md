# Diseño responsivo para gráficos

Un dashboard que se ve bien en una pantalla de 27 pulgadas puede ser ilegible en un smartphone. El diseño responsivo para datos no es solo encoger el gráfico, sino adaptar la información.

## Estrategias de adaptabilidad

### 1. ViewBox y Aspect Ratio
En SVG, utilizamos el atributo `viewBox` para que el gráfico escale proporcionalmente al contenedor sin perder las coordenadas internas.

### 2. Reducción de Detalle
En pantallas pequeñas (Mobile), menos es más:
- Ocultar etiquetas de ejes innecesarias.
- Simplificar leyendas.
- Mostrar solo los puntos de datos clave.

### 3. Cambio de Orientación
Un gráfico de barras horizontal suele leerse mejor en móvil que uno vertical, ya que permite hacer scroll infinito hacia abajo.

---

## Media Queries en Gráficos
Podemos usar CSS o JavaScript para detectar el tamaño de la ventana y re-renderizar el gráfico con diferentes configuraciones:

```javascript
window.addEventListener('resize', () => {
  const width = document.getElementById('chart').clientWidth;
  updateChart(width);
});
```
