# Integración con Power BI Embedded

Si ya trabajas en el mundo del análisis de datos, es muy probable que hayas creado reportes e informes interactivos espectaculares en **Power BI**. Reconstruir todos esos gráficos y el modelado de datos en código HTML y JavaScript desde cero sería una pérdida enorme de tiempo y esfuerzo.

Una de las habilidades más valoradas en las empresas es saber integrar informes existentes de Power BI **directamente en portales web propios** de forma integrada y fluida. 

---

## ¿Por qué Integrar Power BI en tu Web?

1. **No reinventas la rueda:** Aprovechas el modelado de datos, las medidas DAX y las visualizaciones que ya diseñaste en Power BI Desktop.
2. **Identidad de Marca:** En lugar de enviar a tus clientes a la web oficial de Microsoft, los mantienes en la plataforma o sitio web de tu propia empresa, ofreciendo una experiencia premium y personalizada.
3. **Control total:** Puedes construir menús de navegación, cabeceras, pie de páginas y textos explicativos alrededor del reporte usando HTML y CSS.

---

## La Ventana Mágica: El iFrame de HTML

La forma en que el navegador web incrusta una página externa (como tu reporte de Power BI) dentro de tu propia página web es a través de una etiqueta especial llamada **`<iframe>`** (abreviatura de *Inline Frame*).

Un `iframe` es, literalmente, **una ventana que muestra otra página web dentro de la tuya**.

### ¿Cómo obtener el código en Power BI Service?
1. Sube tu reporte a tu espacio de trabajo en **Power BI Service (la nube)**.
2. Ve al menú superior: **Archivo > Insertar informe**.
3. Selecciona **Sitio web o portal** (para integración segura) o **Publicar en la web** (público, ideal para portafolios personales sin datos confidenciales).
4. Copia el bloque de código HTML que te proporciona Microsoft. Se verá similar a esto:

```html
<iframe 
    title="Reporte de Ventas" 
    width="800" 
    height="600" 
    src="https://app.powerbi.com/view?r=xxxxxx..." 
    frameborder="0" 
    allowFullScreen="true">
</iframe>
```

---

## Estilizando tu iFrame con CSS Premium

Por defecto, los iframes se ven rígidos y con bordes antiguos que no encajan en un diseño moderno. En este curso queremos lograr diseños profesionales, por lo que aplicaremos **CSS avanzado** para estilizar el contenedor de nuestro informe:

```html
<!-- HTML: El Reporte envuelto en una caja contenedora -->
<div class="contenedor-reporte-bi">
    <iframe 
        title="ELECTROCOM Operativo" 
        src="https://app.powerbi.com/view?r=xxxxxx..." 
        allowFullScreen="true">
    </iframe>
</div>
```

```css
/* CSS: Creando un contenedor interactivo y responsivo */
.contenedor-reporte-bi {
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;             /* Centrar el reporte en la pantalla */
    padding-bottom: 56.25%;     /* Truco de oro: Mantiene una proporción de pantalla 16:9 */
    height: 0;
    overflow: hidden;
    border-radius: 16px;        /* Bordes redondeados elegantes */
    border: 1px solid #313244;  /* Borde oscuro sutil */
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.7); /* Sombra 3D premium */
}

.contenedor-reporte-bi iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;               /* Quitamos el borde por defecto del iframe */
}
```

**¿Por qué este diseño es de nivel profesional?** Gracias al truco del `padding-bottom: 56.25%`, el informe escalará de forma proporcional y automática si el usuario lo ve desde una tableta o un monitor gigante, ¡sin deformar los gráficos ni agregar molestas barras de scroll interno!

---

## 🎯 Tu Reto Práctico

1. Si tienes un reporte propio en tu Power BI Service, ve a **Archivo > Insertar informe > Publicar en la web** y copia el enlace `src` de tu iframe.
2. Abre tu archivo `index.html`.
3. Crea un bloque contenedor en tu HTML con la clase `contenedor-reporte-bi` y coloca el `iframe` dentro.
4. Agrega las reglas de estilo CSS anteriores a tu sección `<style>`.
5. Guarda y refresca tu navegador. Verás tu reporte corporativo cobrando vida dentro de una interfaz web sofisticada y adaptable.
