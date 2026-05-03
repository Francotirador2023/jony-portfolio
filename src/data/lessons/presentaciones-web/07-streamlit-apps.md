# Web apps rápidas con Streamlit

Streamlit ha revolucionado la forma en que los Data Scientists comparten su trabajo. Permite convertir scripts de Python en aplicaciones web interactivas en minutos, sin necesidad de saber HTML o CSS.

## ¿Cómo funciona?
Escribes código Python puro y Streamlit lo renderiza en una interfaz web moderna.

```python
import streamlit as st
import pandas as pd

st.title('Mi Dashboard de Ventas')
df = pd.read_csv('ventas.csv')
st.line_chart(df)
```

## Ventajas para el Analista
- **Interactividad nativa:** Widgets como botones, sliders y selectores se añaden con una línea de código.
- **Hot Reload:** Los cambios en el código se ven instantáneamente en el navegador.
- **Despliegue fácil:** Con Streamlit Cloud, puedes publicar tu app gratis con un clic desde GitHub.

---

### Casos de uso ideales
- Prototipos rápidos de modelos de Machine Learning.
- Herramientas internas para equipos de negocio.
- Portafolios de datos personales.
