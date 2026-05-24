# Dibujando en la Web: SVG y Canvas

Para representar datos visualmente (por ejemplo, convertir un número de ventas en la altura de una barra o en la posición de un punto en un mapa), el navegador necesita una forma de dibujar figuras geométricas. 

En la web, tenemos dos tecnologías nativas para dibujar: **SVG** (vectorial) y **Canvas** (mapas de bits). ¡Entenderlas te abrirá las puertas a la creación de cualquier gráfico imaginable!

---

## 1. SVG: Dibujar Usando Etiquetas HTML

**SVG** significa *Scalable Vector Graphics* (Gráficos Vectoriales Redimensionables). Lo maravilloso de SVG es que **se escribe directamente con etiquetas HTML**. Cada barra, círculo o línea que dibujamos se convierte en una etiqueta que podemos controlar con CSS o JavaScript.

Al ser vectorial, los gráficos SVG se ven perfectamente nítidos en cualquier pantalla, sin importar cuánto zoom les hagas.

### Etiquetas Comunes de Dibujo SVG
Todo dibujo SVG se encierra en una etiqueta `<svg>` que define el tamaño del lienzo:

```html
<svg width="400" height="200" style="background-color: #111;">
    <!-- Línea de base (Eje X) -->
    <line x1="20" y1="180" x2="380" y2="180" stroke="white" stroke-width="2" />
    
    <!-- Un Círculo (punto de datos) -->
    <!-- cx/cy son el centro, r es el radio -->
    <circle cx="200" cy="100" r="15" fill="#4f46e5" />
    
    <!-- Un Rectángulo (barra de datos) -->
    <!-- x/y es la esquina superior izquierda, width/height son las dimensiones -->
    <rect x="80" y="50" width="40" height="130" fill="#10b981" rx="5" />
    <rect x="280" y="80" width="40" height="100" fill="#3b82f6" rx="5" />
    
    <!-- Texto descriptivo -->
    <text x="80" y="195" fill="white" font-size="12">Producto A</text>
    <text x="280" y="195" fill="white" font-size="12">Producto B</text>
</svg>
```

¡Si copias este código y lo pegas en tu archivo HTML, el navegador dibujará automáticamente un gráfico de barras simple con un punto flotante! Acabas de crear un gráfico desde cero usando solo código estructural.

---

## 2. Canvas: Un Lienzo en Blanco para JavaScript

A diferencia de SVG, **Canvas** es una sola etiqueta HTML vacía (`<canvas>`). El HTML solo define las dimensiones de la caja, y todo el dibujo se realiza de forma obligatoria mediante **JavaScript**.

El navegador ve el Canvas como una cuadrícula de píxeles (un mapa de bits). No hay elementos individuales a los que hacerles clic; solo pintamos píxeles a gran velocidad.

### Dibujando en Canvas con JS:
```html
<canvas id="miLienzo" width="300" height="150"></canvas>

<script>
    let lienzo = document.getElementById("miLienzo");
    let ctx = lienzo.getContext("2d"); // El pincel en 2 dimensiones
    
    // Pintamos un rectángulo azul
    ctx.fillStyle = "#3b82f6";
    ctx.fillRect(50, 20, 100, 80); // x, y, ancho, alto
</script>
```

---

## ¿Cuál Debo Usar para mis Gráficos?

Elegir entre SVG y Canvas dependerá del tipo de visualización que quieras construir:

| Característica | SVG (Vectorial) | Canvas (Píxeles) |
| :--- | :--- | :--- |
| **Cómo se escribe** | Etiquetas HTML directas | Código JavaScript |
| **Estilos** | Muy fácil (se puede usar CSS) | Solo mediante código JS |
| **Interactividad** | Fácil (puedes hacer clic en una barra individual) | Difícil (debes calcular la posición del clic manualmente) |
| **Rendimiento** | Lento si hay miles de elementos en pantalla | Extremadamente rápido con miles de elementos |
| **Casos de uso** | Gráficos de barras, líneas simples, mapas interactivos. | Simulaciones complejas, mapas de calor masivos. |

---

## 🎯 Tu Reto Práctico

1. Abre tu archivo `index.html`.
2. Dentro de tu `<body>`, copia y pega el código del ejemplo SVG (el contenedor `<svg width="400" ...>` con la línea, el círculo y los rectángulos).
3. Guarda el archivo y ábrelo en el navegador. ¡Modifica los valores de `height` y `y` de los rectángulos para ver cómo cambian las alturas de tus barras!
