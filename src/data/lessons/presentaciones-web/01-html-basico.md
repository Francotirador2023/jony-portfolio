# Mi primera página web (HTML5)

¡Bienvenido al mundo del desarrollo web! Si nunca has escrito una sola línea de código, no te preocupes. Estás en el lugar correcto. Para crear visualizaciones y dashboards interactivos increíbles, primero debemos entender cómo se construyen las páginas que los contienen.

El navegador web es un intérprete que lee tres tecnologías principales: **HTML** (la estructura), **CSS** (el diseño) y **JavaScript** (el movimiento y los datos). En esta lección, dominaremos la primera: **HTML**.

---

## ¿Qué es HTML?

**HTML** significa *HyperText Markup Language* (Lenguaje de Marcado de Hipertexto). No es un lenguaje de programación con lógica compleja, sino un **lenguaje de marcado** que usamos para definir la **estructura** y el **contenido** de nuestra página (como si fuera el esqueleto de un edificio).

HTML funciona a través de **etiquetas** (tags). Una etiqueta es una palabra clave rodeada por paréntesis angulares: `<` y `>`.

Casi todas las etiquetas vienen en parejas: una de **apertura** y otra de **cierre** (que lleva una barra inclinada `/`):

```html
<h1>Este es un título principal</h1>
```

---

## Anatomía de un Documento HTML

Toda página web sigue una estructura o "plantilla" estándar que le dice al navegador cómo interpretarla. Aquí tienes el esqueleto básico:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Primer Dashboard</title>
</head>
<body>
    <h1>¡Hola Mundo de los Datos!</h1>
    <p>Esta es mi primera página web estructurada desde cero.</p>
</body>
</html>
```

### ¿Qué significa cada parte?
- `<!DOCTYPE html>`: Le dice al navegador que estamos usando la versión más moderna de la web (HTML5).
- `<html>`: Es la "caja madre" que contiene toda la página web.
- `<head>`: Contiene información "invisible" pero vital, como el título de la pestaña del navegador (`<title>`) y configuraciones de idioma (`<meta charset="UTF-8">`).
- `<body>`: Aquí va todo lo que el usuario puede ver en la pantalla (textos, imágenes, gráficos, botones).

---

## Las Etiquetas que Más Usaremos en Datos

Para diseñar reportes y dashboards, utilizaremos principalmente estas etiquetas esenciales:

### 1. Encabezados (`<h1>` a `<h6>`)
Sirven para estructurar la jerarquía de los títulos de tu reporte. `<h1>` es el título principal y `<h6>` el subtítulo más pequeño.

```html
<h1>Dashboard Ejecutivo ELECTROCOM</h1>
<h2>Resumen Mensual de Ventas</h2>
```

### 2. Párrafos (`<p>`)
Se usan para escribir bloques de texto explicativos o conclusiones del análisis de datos.

```html
<p>El rendimiento del mes de mayo muestra un incremento del 15% en las ventas de retail.</p>
```

### 3. Divisiones o Contenedores (`<div>`)
Es la etiqueta más importante para crear layouts. Un `<div>` no hace nada visualmente por sí solo, es un "contenedor genérico" o una "caja vacía" que agrupamos para aplicarles estilos o colocar gráficos dentro.

```html
<div class="tarjeta-kpi">
    <h3>Ingresos Totales</h3>
    <p>$154,230 USD</p>
</div>
```

---

## Conexión Real: El Esqueleto de un Dashboard

Cuando ves un dashboard interactivo avanzado como el de **ELECTROCOM**, debes saber que detrás de la escena todo se reduce a cajas de HTML organizadas estratégicamente.

Por ejemplo, la estructura de la cabecera y el resumen ejecutivo se ve así en código puro:

```html
<div id="dashboard">
    <!-- Encabezado -->
    <header>
        <h1>ELECTROCOM - Gestión Operativa</h1>
        <p>Actualizado: Hace 5 minutos</p>
    </header>

    <!-- Sección de KPIs (Tarjetas de métricas) -->
    <section class="kpi-container">
        <div class="kpi-card">Ventas: $54K</div>
        <div class="kpi-card">Eficiencia: 94%</div>
        <div class="kpi-card">Alertas: 2 Activas</div>
    </section>
</div>
```

![Ejemplo de Dashboard Web estructurado](/images/examples/electrocom_resumen.png)

---

## 🎯 Tu Reto Práctico

1. Si tienes un editor de texto (como VS Code o el Bloc de Notas), crea un archivo llamado `index.html`.
2. Copia la estructura básica del documento HTML explicada arriba.
3. Dentro del `<body>`, crea una estructura para un mini-reporte de ventas que contenga:
   - Un título principal (`<h1>`) para tu empresa.
   - Un subtítulo (`<h2>`) que diga "Métricas Clave".
   - Un contenedor (`<div>`) que simule una tarjeta con una métrica numérica de tu elección.
4. Guarda el archivo y haz doble clic sobre él para abrirlo en tu navegador. ¡Felicidades, has creado tu primera página web!
