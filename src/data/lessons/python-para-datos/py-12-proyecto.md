# Proyecto Final: De Python Vainilla a Presentador Mágico

¡Bienvenido al clímax de tu Ruta de Aprendizaje! Hasta ahora, has absorbido todo sobre Bases de Datos Relacionales (SQL), sobre Esquemas en Estrella Corporativos (Power BI / Excel DAX) y sobre Automatización Pura Lineal Vectorizada (Python y NumPy / Pandas).

¿Cuál es la prueba de fuego de la industria y la entrevista de Coder Data Analyst en empresas Big Tech modernas? **Poder ensamblar una historia**.

Este Proyecto Final evaluatorio probará de una pasada el recorrido íntegro:

## 1. El Desafío Financiero

Recibirás un archivo caótico llamado `Raw_Log_Transaccional_Banco_2024.csv` conteniendo 5.8 millones de lineas corruptas, Nulos, saltos de formato y basura general humana. Debes emular al Analista de Datos Senior asignado para el reporte anual del CEO.

Usarás tu flamante Jupyter Notebook y tu instinto Pandas para:
- Crear tu script vital `pd.read_csv()` importando los millones de registros.
- **Limpieza (ETL de Python):** Identificar la morralla estadística o los vacíos `NaN` e imputarlos con la poderosa Media matemática o `dropna()`.
- **Estructuración del EDA (Exploratory Data Analysis):** Crear Filtros vectorizados avanzados, mutar la sábana con campos de Descuento cruzados e Impuestos al Aire local (`df["columna_nueva"] = operacion`).
- **Resumen Magistral (`.groupby()`):** Lograr colapsar temporalmente y grupalmente las 5 Millones de líneas en un resumen limpio anual cruzado por Geografía Mundial usando la agrupación absoluta de Pandas.

## 2. Puesta en Escena Final

Una vez limpia y condensada la realidad del modelo, lo graficarás a través de la Librería majestuosa **Seaborn**:

Generarás tres lienzos visuales (`subplots`):
1. **La Tendencia (`Lineplot`):** Las ventas mensuales MTD e YTD.
2. **El Comparativo Discreto (`Barplot`):** Las barras aplastantes del Continente Europa VS Asia vs América (ordenadas con sort_values de mayor desempeño).
3. **El Correlacional (`Heatmap`):** El mosaico de temperatura que probará si existió una correlación inminente entre la Inversión en Marketing Mensual y su repunte final Comercial, arrojando el índice *r* de pearson visual en el bloque a la pantalla de la mesa circular del corporativo.

## 3. Despedida

Conquistar las librerías NumPy, Pandas, Matplotlib y Seaborn marcan oficialmente tu Ascensión y te declaran 100% competente como un **Analista de Datos Programador y Data Storytelling Mágico**.

La industria tecnológica te espera. Tus archivos `.ipynb` limpios y documentados serán el portafolio clave que aplastará en cualquier mesa de reclutamiento ante tus colegas estancados en el simple arrastrado de PowerPoints. 

Pero antes de irte... ¿Qué tal si pruebas tus habilidades **ahora mismo, directo en tu navegador**?
He cargado el archivo `Raw_Log_Transaccional_Banco_2024.csv` en la memoria del motor. Escribe tu código Pandas y presiona Play para limpiarlo:

```python
import pandas as pd

# Tu código aquí: Carga el banco, quita los Nulos e imprime los primeros 5 registros
df_banco = pd.read_csv('Raw_Log_Transaccional_Banco_2024.csv')

# Muestra el avance
print(df_banco.head())
```

**¡Adelante, Científico de los Datos del Futuro! ¡Mucho Éxito!**
