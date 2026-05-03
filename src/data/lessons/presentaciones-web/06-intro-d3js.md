# Introducción a D3.js (Data-Driven Documents)

Si Chart.js es una "caja de herramientas" y Plotly es un "equipo profesional", D3.js es la "forja". No es una librería de gráficos, sino una librería para manipular documentos basados en datos.

## El concepto de "Data Binding"
La magia de D3 reside en unir datos a elementos del DOM. Si tienes 10 filas de datos, D3 puede crear 10 círculos automáticamente.

```javascript
d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
    .text(d => "I’m number " + d + "!");
```

![Ejemplo de Diagrama de Ishikawa Complejo](/images/examples/electrocom_ishikawa.png)

## Poder Total sobre el SVG
A diferencia de otras librerías, con D3 tú decides exactamente dónde va cada píxel, cada curva de Bézier y cada transición de color.

### ¿Por qué aprender D3?
1. **Flexibilidad infinita:** Puedes crear visualizaciones que no existen en ningún otro lugar.
2. **Animaciones fluidas:** Transiciones suaves cuando los datos cambian.
3. **Estándar de la industria:** Es la herramienta que usan medios como *The New York Times* para sus reportajes de datos.

---

> [!WARNING]
> D3 tiene una curva de aprendizaje alta. Requiere un buen dominio de JavaScript y SVG.
