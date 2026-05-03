# Introducción a Power BI Embedded

Si ya tienes un reporte increíble en Power BI, no siempre es necesario recrearlo en código. Power BI Embedded te permite insertar tus reportes existentes directamente en una página web propia.

## ¿Por qué embeder?
1. **Seguridad:** Controlas quién ve los datos mediante tu propia aplicación.
2. **Experiencia de marca:** El usuario no siente que ha salido de tu portal.
3. **Consistencia:** Mantienes la lógica de DAX y el modelado que ya hiciste.

## Métodos de inserción
- **Publicar en la web (Público):** Genera un iFrame que cualquiera puede ver. No apto para datos sensibles.
- **Power BI Embedded (Azure):** Requiere configuración de API y Service Principals. Es la opción profesional para aplicaciones empresariales.

---

## El SDK de JavaScript
Power BI ofrece una librería de JS para que tu página web pueda "hablar" con el reporte:
- Cambiar filtros desde un botón de la web.
- Capturar clics en gráficos del reporte para activar acciones en la web.
- Navegar entre páginas del reporte programáticamente.
