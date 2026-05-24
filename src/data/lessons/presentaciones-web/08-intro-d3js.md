# Introducción a D3.js

Hasta ahora hemos aprendido a usar librerías como Chart.js y Plotly.js que nos entregan gráficos prefabricados (solo les pasamos datos y ellas se encargan de dibujar). Pero, ¿qué pasa si queremos inventar una visualización completamente nueva y única que no existe en ninguna librería?

Para tener **control total y absoluto** sobre cada píxel de la web, los profesionales utilizan **D3.js**.

---

## ¿Qué es D3.js?

**D3** significa *Data-Driven Documents* (Documentos Impulsados por Datos). D3 no tiene una función para hacer un "gráfico de barras" con un solo clic. En su lugar, D3 te da herramientas para:
1. **Conectar tus datos** (una lista de números) directamente a elementos de la página web (como rectángulos SVG, círculos, o textos).
2. **Manipular el DOM** a gran velocidad.
3. Crear transiciones y animaciones fluidas y dinámicas basados en cambios de datos.

---

## El Secreto de D3: Selecciones y Enlace de Datos

Para que entiendas la magia de D3 sin complicarte, veamos sus tres pasos fundamentales:

### 1. Seleccionar (`select` / `selectAll`)
D3 nos permite buscar elementos en nuestra página de forma muy parecida a como lo hace CSS.
```javascript
d3.select("body"); // Selecciona la página entera
d3.selectAll("rect"); // Selecciona todos los rectángulos SVG
```

### 2. Enlazar Datos (`data`)
Le entregamos una lista de números a D3 para que los asocie a los elementos seleccionados.
```javascript
const misNumeros = [10, 20, 30, 40];
d3.selectAll("p").data(misNumeros); // Vincula cada número a un párrafo
```

### 3. Crear lo que Falta (`enter` + `append`)
Si tenemos 4 números pero no hay párrafos en la página, D3 los crea automáticamente por nosotros:
```javascript
d3.select("body")
  .selectAll("p")
  .data(misNumeros)
  .enter()
  .append("p") // Crea un párrafo por cada número
  .text(d => "Mi valor de datos es: " + d); // Escribe el número dentro
```

---

## Conexión Real: El Diagrama de Ishikawa de ELECTROCOM

Debido a que D3.js te da control matemático sobre las líneas y figuras SVG, es la única librería capaz de construir diagramas altamente estructurados y personalizados.

Por ejemplo, en el sistema de **ELECTROCOM**, lo utilizamos para generar el **Diagrama de Ishikawa** (diagrama de causa-efecto o espina de pescado). Con D3 pudimos calcular las posiciones exactas de las "espinas" diagonales, los contenedores de texto y las líneas centrales basándonos en los datos de las causas operativas:

![Ejemplo de Diagrama de Ishikawa Complejo](/images/examples/electrocom_ishikawa.png)

---

## 🎯 Tu Reto Práctico

D3.js es un universo muy grande, pero puedes dar tus primeros pasos de forma sencilla:
1. Abre tu archivo `index.html`.
2. Añade el script CDN de D3 en tu `<head>`:
   ```html
   <script src="https://d3js.org/d3.v7.min.js"></script>
   ```
3. Crea un contenedor `div` vacío en tu `body`: `<div id="miListaD3"></div>`.
4. Escribe el siguiente código JavaScript:
   ```html
   <script>
       const datos = [100, 200, 300];
       d3.select("#miListaD3")
         .selectAll("p")
         .data(datos)
         .enter()
         .append("p")
         .text(d => "Párrafo D3 con valor: " + d)
         .style("color", "#10b981")
         .style("font-weight", "bold");
   </script>
   ```
5. Abre la página en tu navegador y verás cómo D3 ha creado y estilizado los párrafos dinámicamente. ¡Has dado tus primeros pasos con la herramienta de visualización más potente del mundo!
