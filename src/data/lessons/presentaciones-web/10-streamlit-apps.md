# Web Apps Rápidas con Streamlit

Hasta ahora, hemos construido gráficos usando tecnologías web tradicionales como HTML, CSS y JavaScript. Esto te da control absoluto sobre el diseño, pero requiere que escribas y entiendas varios lenguajes a la vez.

¿Qué pasa si eres un analista de datos que trabaja principalmente con **Python** y necesitas crear una aplicación web interactiva para tu cliente en cuestión de minutos, sin tiempo para escribir código HTML o JS complejo? 

La respuesta revolucionaria del mundo de los datos es **Streamlit**.

---

## ¿Qué es Streamlit?

**Streamlit** es una librería de Python de código abierto que permite convertir scripts de análisis de datos en **aplicaciones web interactivas y hermosas** de forma ultra rápida. 

### Sus Superpoderes:
1. **Solo necesitas Python:** No requiere conocimientos de HTML, CSS o JavaScript para obtener una interfaz web moderna y responsiva por defecto.
2. **Widgets con una línea de código:** Añadir deslizadores (sliders), botones de filtro, cajas de selección o carga de archivos es extremadamente fácil.
3. **Carga y renderizado inteligente:** Cada vez que el usuario interactúa con la página (mueve un slider o hace clic), Streamlit vuelve a ejecutar el script de Python de arriba a abajo para actualizar los gráficos instantáneamente.

---

## Instalación y Primer Script

Para usar Streamlit, debes tener Python instalado en tu computadora. Puedes instalar la librería ejecutando esta línea en tu terminal:

```bash
pip install streamlit
```

Una vez instalada, crea un archivo de Python llamado `app.py` y escribe el siguiente código simple:

```python
import streamlit as st
import pandas as pd
import numpy as np

# 1. Título principal de la aplicación
st.title('📊 Dashboard Operativo en Minutos')

# 2. Texto explicativo
st.write('Bienvenido a tu primer panel web interactivo creado completamente con Python.')

# 3. Creamos algunos datos ficticios
datos = pd.DataFrame(
    np.random.randn(20, 3),
    columns=['Ventas Retail', 'Ventas Online', 'Mayoristas']
)

# 4. Dibujamos un gráfico de líneas interactivo
st.subheader('Tendencia de Ventas Semanales')
st.line_chart(datos)
```

### ¿Cómo correr tu aplicación?
Abre tu terminal, navega a la carpeta donde guardaste tu archivo y ejecuta:

```bash
streamlit run app.py
```

Streamlit abrirá automáticamente una pestaña en tu navegador web mostrando tu dashboard interactivo animado y listo para usar.

---

## Añadiendo Interactividad con una Sola Línea

Streamlit hace que añadir filtros interactivos sea ridículamente sencillo. Si quieres que el usuario filtre los datos usando un menú desplegable (select box), solo debes hacer esto:

```python
# Menú desplegable interactivo
opcion = st.selectbox(
    '¿Qué métrica deseas analizar?',
    ('Ventas Retail', 'Ventas Online', 'Mayoristas')
)

st.write('Has seleccionado analizar:', opcion)
```

Streamlit se encarga de dibujar el menú desplegable en la web, capturar la selección del usuario y entregársela a tu código Python para que filtres tus dataframes al instante.

---

## 🎯 Tu Reto Práctico

Si ya dominas Python básico y tienes instalado el entorno:
1. Instala Streamlit ejecutando `pip install streamlit`.
2. Crea el archivo `app.py` con el código de ejemplo de arriba.
3. Corre la aplicación con `streamlit run app.py`.
4. Añade un slider interactivo usando `st.slider('Selecciona un rango', 0, 100, 50)` y observa cómo el valor seleccionado se actualiza dinámicamente en tu pantalla web. ¡Acabas de crear una aplicación web funcional de datos con solo unas pocas líneas de Python!
