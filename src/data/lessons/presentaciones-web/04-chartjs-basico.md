# Gráficos rápidos con Chart.js

Chart.js es una de las librerías más populares para desarrolladores que necesitan gráficos atractivos y funcionales sin una curva de aprendizaje empinada. Utiliza el elemento `<canvas>` de HTML5 para renderizar.

## ¿Por qué elegir Chart.js?
- **Sencillez:** Configuración basada en objetos JSON fáciles de entender.
- **Out-of-the-box:** Animaciones, tooltips y leyendas vienen configurados por defecto.
- **Peso ligero:** Muy eficiente para dashboards estándar.

## Estructura básica de un gráfico
Para crear un gráfico, necesitamos un elemento `<canvas>` y un script que lo inicialice:

```html
<canvas id="miGrafico"></canvas>

<script>
  const ctx = document.getElementById('miGrafico').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo'],
      datasets: [{
        label: 'Ventas',
        data: [12, 19, 3]
      }]
    }
  });
</script>
```

![Ejemplo de Gráfico de Radar en Dashboards](/images/examples/electrocom_radar.png)

---

## Tipos de gráficos soportados
1. **Bar:** Barras verticales y horizontales.
2. **Line:** Gráficos de líneas con áreas sombreadas.
3. **Pie & Doughnut:** Gráficos circulares.
4. **Radar & Polar Area:** Para comparativas multidimensionales.
