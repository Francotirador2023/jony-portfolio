# SVG vs Canvas: ¿Cuándo usar cada uno?

A la hora de dibujar gráficos en la web, tenemos dos tecnologías principales. Elegir la correcta dependerá de la complejidad y el rendimiento que necesites.

## SVG (Scalable Vector Graphics)
Es un formato basado en XML (como HTML). Cada elemento del gráfico es un nodo en el DOM.

- **Ventajas:**
    - Se puede estilizar con CSS.
    - Maneja eventos de mouse por elemento (clic en una barra específica).
    - No pierde calidad al escalar (es vectorial).
    - Accesible para lectores de pantalla.
- **Ideal para:** Gráficos con pocos elementos interactivos (menos de 1000), como gráficos de barras, líneas o mapas.

## Canvas (Mapas de bits)
Es un lienzo donde "pintamos" píxeles mediante JavaScript. El navegador no sabe qué hay dentro, solo ve píxeles.

- **Ventajas:**
    - Alto rendimiento para miles de elementos.
    - Ideal para animaciones complejas y juegos.
    - Menor consumo de memoria para gráficos masivos.
- **Ideal para:** Visualizaciones de redes densas, simulaciones de partículas o mapas de calor con millones de puntos.

---

### Tabla Comparativa

| Característica | SVG | Canvas |
| :--- | :--- | :--- |
| **Tecnología** | Vectorial (DOM) | Raster (Píxeles) |
| **Rendimiento** | Lento con muchos objetos | Rápido con muchos objetos |
| **Interactividad** | Fácil (Eventos DOM) | Difícil (Cálculo manual) |
| **Accesibilidad** | Alta | Baja |
