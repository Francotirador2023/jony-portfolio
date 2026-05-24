# Interactividad con JavaScript y el DOM

Ya sabemos cómo construir una página estructurada (HTML) y cómo darle un diseño hermoso y profesional (CSS). Pero hasta ahora, nuestro dashboard es estático: no reacciona a los clics del usuario, ni procesa datos, ni cambia de forma dinámica.

Para darle **vida** e **interactividad** a nuestra web, necesitamos usar el motor y cerebro del navegador: **JavaScript (JS)**.

---

## ¿Qué es JavaScript?

**JavaScript** es un lenguaje de programación real. A diferencia de HTML y CSS, con JavaScript podemos escribir lógica: tomar decisiones, realizar cálculos matemáticos, recordar información (datos) y reaccionar a lo que hace el usuario en la pantalla.

No te asustes por la palabra "programación". Veremos las bases más sencillas y potentes que necesitas para trabajar con gráficos.

### 1. Guardar Datos: Variables
Una variable es como una "caja etiquetada" donde guardamos información para usarla más tarde.

```javascript
let ventasHoy = 1500;
const nombreEmpresa = "ELECTROCOM";
```
- `let`: Se usa para datos que pueden cambiar (las ventas pueden subir).
- `const`: Se usa para datos constantes que no cambian (el nombre de la empresa).

### 2. Automatizar Tareas: Funciones
Una función es un bloque de código empaquetado que realiza una tarea específica cuando lo llamamos.

```javascript
function calcularPorcentaje(ventas, meta) {
    let porcentaje = (ventas / meta) * 100;
    return porcentaje;
}

// Usamos la función:
let resultado = calcularPorcentaje(1500, 2000); // Devuelve 75
```

---

## El DOM: El Puente Entre tu HTML y JavaScript

¿Cómo interactúa nuestro código JavaScript con los elementos visuales que dibujamos en HTML? A través de algo llamado **DOM** (*Document Object Model*).

Cuando el navegador carga tu código HTML, crea un mapa interno del documento. JavaScript puede acceder a ese mapa para "leer" o "modificar" lo que hay en la página en tiempo real.

### Seleccionar un Elemento en HTML
Para que JavaScript pueda cambiar algo, primero debe encontrarlo. La forma más fácil es usando su identificador único (`id`):

```html
<h1 id="titulo-principal">Ventas de Mayo</h1>
```

En JavaScript, lo seleccionamos así:
```javascript
let miTitulo = document.getElementById("titulo-principal");
```

### Cambiar el Contenido en Caliente
Una vez seleccionado, podemos modificar su texto inmediatamente usando `.innerText`:

```javascript
miTitulo.innerText = "¡Ventas Superadas!";
```

---

## Ejemplo Completo: Un Botón Interactivo de Dashboard

Vamos a simular un botón de filtro que, al hacerle clic, actualiza una métrica en nuestro dashboard.

### El HTML:
```html
<div class="tarjeta-kpi">
    <h3>Ingresos Operativos</h3>
    <p id="kpi-ingresos">$54,230</p>
    <button id="btn-actualizar">Cargar Datos de Junio</button>
</div>
```

### El JavaScript:
```javascript
// 1. Seleccionamos el número de ingresos y el botón
let kpi = document.getElementById("kpi-ingresos");
let boton = document.getElementById("btn-actualizar");

// 2. Escuchamos cuando el usuario hace clic en el botón (Evento)
boton.addEventListener("click", function() {
    // 3. Modificamos el valor del KPI y su estilo
    kpi.innerText = "$72,890";
    kpi.style.color = "#34d399"; // Cambia el texto a verde esmeralda
});
```

¡Eso es todo! Acabas de escribir código que reacciona a las acciones del usuario, que es exactamente la base de cómo funcionan los filtros de categorías y rangos de fechas en cualquier dashboard interactivo moderno.

---

## 🎯 Tu Reto Práctico

1. Abre tu archivo `index.html` en tu editor.
2. Agrega el código HTML del botón interactivo dentro del `<body>`.
3. Al final de tu archivo HTML, justo antes de cerrar `</body>`, agrega una etiqueta `<script>` (aquí es donde vive el código JavaScript en HTML):
   ```html
       <script>
           // Pega el código JavaScript de arriba aquí
       </script>
   </body>
   ```
4. Guarda el archivo, ábrelo en el navegador y haz clic en el botón. Verás cómo cambia el número de ingresos de forma instantánea. ¡Ya eres programador web interactivo!
