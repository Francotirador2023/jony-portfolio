# Diseño Adaptable (Flexbox y Grid)

Ahora que sabemos cómo crear y estilizar una sola tarjeta de KPI, surge una pregunta clave: ¿cómo organizamos múltiples tarjetas y gráficos en la pantalla? Y más importante aún, ¿cómo hacemos para que se organicen bien en una computadora de escritorio y también se acomoden automáticamente en la pantalla vertical de un teléfono celular?

Para lograr esto de forma moderna y sencilla, CSS nos ofrece dos herramientas extremadamente potentes: **Flexbox** y **CSS Grid**.

---

## ¿Qué es el Diseño Responsivo?

El **diseño responsivo** (o adaptable) es la práctica de diseñar páginas web que respondan y se adapten automáticamente al tamaño de la pantalla del usuario. 

En pantallas de computadoras grandes, queremos colocar las tarjetas de KPI una al lado de la otra en columnas. Pero en un smartphone, la pantalla es angosta, por lo que queremos que esas mismas tarjetas se "apilen" de manera vertical para que se sigan leyendo perfectamente sin obligar al usuario a hacer zoom.

---

## 1. Flexbox: Distribución en una Sola Dirección

**Flexbox** es ideal para organizar un grupo de elementos en una sola dirección (ya sea en fila horizontal o en columna vertical). Es perfecto para barras de navegación, botones o para alinear el contenido dentro de una tarjeta.

Para usar Flexbox, simplemente le decimos a una caja contenedora que su comportamiento sea de tipo `flex`:

```css
.contenedor-kpis {
    display: flex;             /* Activamos Flexbox */
    flex-direction: row;       /* Elementos uno al lado del otro (en fila) */
    justify-content: space-between; /* Distribuye el espacio libre entre los elementos */
    align-items: center;       /* Centra verticalmente los elementos */
    flex-wrap: wrap;           /* ¡Mágico! Si no caben en la pantalla, bajan al siguiente renglón */
    gap: 20px;                 /* Espacio de separación constante entre las cajas */
}
```

---

## 2. CSS Grid: El Diseñador de Rejillas (Dos Dimensiones)

Mientras que Flexbox se enfoca en una dirección, **CSS Grid** nos permite diseñar rejillas completas de filas y columnas simultáneamente. Es la herramienta por excelencia para estructurar el diseño principal de un dashboard completo.

Imagina que queremos un layout con un menú lateral y un área principal para nuestros gráficos:

```css
.dashboard-layout {
    display: grid;
    grid-template-columns: 250px 1fr; /* Columna de menú fija de 250px, y el resto (1fr) para los datos */
    gap: 24px;
}
```

*(Nota: `1fr` significa "una fracción del espacio restante", es una medida flexible maravillosa en CSS).*

### Creando una Rejilla de Reportes Automática
Podemos crear una cuadrícula para nuestras tarjetas de KPI que se adapte sola sin escribir código complejo:

```css
.rejilla-tarjetas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
}
```
**¿Qué hace esta regla mágica?** Le dice al navegador: *"Llena todo el espacio disponible con tantas columnas de tarjetas como quepan. Cada tarjeta debe medir como mínimo 240 píxeles. Si el espacio se reduce (por ejemplo, en un móvil), apila las tarjetas de forma vertical automática"*.

---

## Conexión Real: El Layout Adaptable de ELECTROCOM

Los dashboards profesionales dividen la pantalla en rejillas. Si observas nuestro panel ejecutivo, notarás que en pantallas grandes los gráficos (el gráfico de radar, el mapa de riesgos y los KPI) se distribuyen de forma organizada en cuadrículas limpias.

Cuando abres esa misma página en un celular, las cajas reaccionan gracias a las **Media Queries** (instrucciones CSS que se aplican solo a ciertos tamaños de pantalla):

```css
/* Solo se aplica si la pantalla mide 768 píxeles o menos (pantallas móviles) */
@media (max-width: 768px) {
    .dashboard-layout {
        grid-template-columns: 1fr; /* El menú lateral y el contenido principal se apilan en 1 sola columna */
    }
}
```

---

## 🎯 Tu Reto Práctico

1. Abre tu archivo `index.html` de las lecciones anteriores.
2. Agrega tres tarjetas de KPI de HTML dentro de un contenedor:
   ```html
   <div class="contenedor-kpis">
       <div class="tarjeta-kpi">
           <h3>Ventas Totales</h3>
           <p class="valor">$54,230</p>
       </div>
       <div class="tarjeta-kpi">
           <h3>Eficiencia</h3>
           <p class="valor">94.8%</p>
       </div>
       <div class="tarjeta-kpi">
           <h3>Alertas</h3>
           <p class="valor" style="color: #ef4444;">2 Activas</p>
       </div>
   </div>
   ```
3. En la sección `<style>`, agrega las reglas de Flexbox para el contenedor:
   ```css
   .contenedor-kpis {
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       gap: 20px;
       justify-content: flex-start;
   }
   ```
4. Abre la página en tu navegador, y cambia el tamaño de la ventana (hazla más angosta). ¡Observa cómo las tarjetas bajan ordenadamente una debajo de otra cuando ya no tienen espacio horizontal! Has creado tu primer diseño adaptable.
