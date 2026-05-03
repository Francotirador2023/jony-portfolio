# Anatomía de una visualización web

Para crear visualizaciones impactantes en la web, debemos entender que el navegador no es solo un lienzo estático, sino un entorno dinámico compuesto por tres capas fundamentales:

### 1. La Estructura (HTML)
El HTML proporciona el contenedor para nuestros gráficos. Ya sea un elemento `<svg>`, un `<canvas>` o simplemente un `<div>` con estilos, aquí es donde vive la visualización.

![Ejemplo de Dashboard Web](/images/examples/electrocom_resumen.png)

### 2. El Estilo (CSS)
El CSS se encarga de la estética: colores, fuentes, bordes y, lo más importante, la disposición (layout). Con CSS podemos hacer que nuestros gráficos sean responsivos y se adapten a cualquier pantalla.

### 3. La Lógica (JavaScript)
JS es el motor que da vida a los datos. Se encarga de:
- Cargar los datos (JSON, CSV, APIs).
- Escalar los valores a píxeles.
- Manejar la interactividad (hovers, clics, filtros).

---

## El ciclo de vida de un gráfico web
1. **Recolección:** Obtener datos de fuentes externas.
2. **Transformación:** Limpiar y formatear los datos para el navegador.
3. **Mapeo:** Traducir valores numéricos a propiedades visuales (altura, color, radio).
4. **Renderizado:** Dibujar los elementos en el DOM o en el Canvas.
