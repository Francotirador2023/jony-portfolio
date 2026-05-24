# Estilo y Diseño Visual (CSS)

En la lección anterior aprendimos a crear el esqueleto de nuestra página web usando HTML. Pero seamos sinceros: una página web de HTML puro se ve bastante antigua y aburrida. 

Para transformar ese esqueleto básico en una interfaz moderna, colorida y pulida (al nivel de un dashboard premium de nivel empresarial), necesitamos usar **CSS**.

---

## ¿Qué es CSS?

**CSS** significa *Cascading Style Sheets* (Hojas de Estilo en Cascada). Es el lenguaje que usamos para definir el **aspecto visual** de nuestra página web. Con CSS controlamos:
- Los colores de fondo y texto.
- Los tipos de letra (fuentes), tamaños y alineaciones.
- Los espacios entre elementos (márgenes y rellenos).
- Los bordes, sombras y esquinas redondeadas.
- La distribución en pantalla (el diseño o layout).

---

## Anatomía de una Regla CSS

Para aplicar estilos, le escribimos instrucciones al navegador indicando qué elemento queremos modificar (el **selector**) y qué cambios queremos hacerle (las **declaraciones**).

```css
h1 {
    color: #4f46e5;
    font-size: 32px;
    text-align: center;
}
```

### ¿Cómo funciona?
- **Selector (`h1`):** Le dice al navegador "busca todos los títulos `<h1>` de la página".
- **Propiedad (`color`):** Lo que queremos cambiar (en este caso, el color del texto).
- **Valor (`#4f46e5`):** El nuevo estado (un color azul-índigo en formato hexadecimal).
- Cada declaración termina con un punto y coma `;` y todas las declaraciones se encierran entre llaves `{}`.

---

## El Modelo de Caja (Box Model)

Este es el concepto más importante de CSS. Para el navegador, **cada elemento HTML es una caja rectangular**. El Modelo de Caja define cómo se calcula el espacio de esas cajas:

1. **Content (Contenido):** El texto, imagen o gráfico en sí.
2. **Padding (Relleno):** El espacio libre *dentro* de la caja, entre el contenido y el borde.
3. **Border (Borde):** La línea divisoria que rodea al elemento.
4. **Margin (Margen):** El espacio libre *fuera* de la caja, que la separa de otras cajas vecinas.

```
+-----------------------------------+
|             Margin                |
|   +---------------------------+   |
|   |         Border            |   |
|   |   +-------------------+   |   |
|   |   |     Padding       |   |   |
|   |   |   +-----------+   |   |   |
|   |   |   | Contenido |   |   |   |
|   |   |   +-----------+   |   |   |
|   |   +-------------------+   |   |
|   +---------------------------+   |
+-----------------------------------+
```

---

## Diseñando una Tarjeta de KPI Profesional

Vamos a crear estilos para una tarjeta de KPI de nuestro panel de control. Imagina que en HTML escribiste esto:

```html
<div class="tarjeta-kpi">
    <h3>Ventas Totales</h3>
    <p class="valor">$54,230</p>
</div>
```

En tu archivo CSS, puedes transformarla completamente con estas reglas:

```css
.tarjeta-kpi {
    background-color: #1e1e2e; /* Fondo oscuro elegante */
    color: #ffffff;            /* Texto blanco */
    padding: 20px;             /* Espacio interior cómodo */
    border-radius: 12px;       /* Esquinas redondeadas modernas */
    border: 1px solid #313244; /* Borde sutil */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5); /* Sombra elegante */
    width: 250px;              /* Ancho fijo de la tarjeta */
}

.tarjeta-kpi h3 {
    color: #a6adc8;            /* Gris claro para el título */
    font-size: 14px;
    margin-bottom: 8px;        /* Espacio debajo del título */
    text-transform: uppercase; /* Convertir a mayúsculas */
}

.tarjeta-kpi .valor {
    color: #10b981;            /* Verde esmeralda para el número */
    font-size: 28px;
    font-weight: bold;         /* Texto en negrita */
    margin: 0;                 /* Quitar márgenes por defecto */
}
```

¡Con unas pocas líneas de CSS, hemos creado una interfaz premium y moderna!

---

## 🎯 Tu Reto Práctico

1. Abre tu archivo `index.html` de la lección anterior.
2. Agrega una sección `<style>` dentro de tu `<head>` de la siguiente manera:
   ```html
   <head>
       <meta charset="UTF-8">
       <title>Mi Primer Dashboard</title>
       <style>
           /* Tus estilos CSS van aquí */
           body {
               background-color: #0f0f16;
               font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
               color: white;
               padding: 40px;
           }
       </style>
   </head>
   ```
3. Copia las reglas de la `.tarjeta-kpi` que vimos arriba e insértalas dentro de la sección `<style>`.
4. Asegúrate de que el contenedor de tu HTML tenga la clase correspondiente: `<div class="tarjeta-kpi">`.
5. Guarda el archivo y refresca tu navegador. Verás cómo pasa de ser texto simple en blanco y negro a una tarjeta de dashboard moderna y profesional.
