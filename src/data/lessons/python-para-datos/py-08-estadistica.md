# Estadística Descriptiva Aplicada

Todo buen Analista de Datos "sabe mirar" los números. Pero el Exploratory Data Analysis (EDA) va más allá de solo filtrar. Se trata de entender matemáticamente cómo palpita el corazón de los datos.

## 1. El Ojo de Dios: `describe()`

La función `.describe()` es el botiquín de primeros auxilios de la ciencia de datos. Al aplicarla a un DataFrame, calcula al instante todos los indicadores de Estadística Descriptiva para CADA columna numérica del archivo.

```python
import pandas as pd
df = pd.read_csv("ingresos.csv")

# Dame el cuadro de control médico de mis dineros
print(df.describe())
```

**¿Qué rayos te escupirá la consola?**
- `count`: El conteo total (te dice subrepticiamente si hay Nulos (NaN) si es inferior al total esperado).
- `mean`: La amada Media Aritmética (Promedio).
- `std`: Desviación Estándar. (Si es muy alta, significa que tus ventas varían locamente de $5 a $1 millón, hay inestabilidad o clientes muy disparejos).
- `min` y `max`: Te dice de forma atroz los límites de tu negocio.
- `25%, 50%, 75%` (Cuartiles de Percentiles): El ansiado *Rango Intercuartílico*. El 50% es la "Mediana", el mejor detector de MENTIRAS.

## 2. Promedio MENTIROSO vs Mediana REAL

Un error súper Novato es confiarle toda la salud al `Promedio (.mean())`.
Imagina que Bill Gates entra a un bar con 9 personas pobres. Si alguien mide la Riqueza *Promedio* de la sala... todos parecerán Millonarios.

*"¡Qué barrio más próspero, ganan en Promedio $100 millones!"* - Diría el mal Analista.

La **Mediana (.median())**, ordena las 10 personas de menos dinero a más riqueza. Tomará al tipo del Medio de la Lista, y si el del medio gana $30 dólares... El analista Inteligente dirá: 

*"Bill Gates es un pico anómalo, en este Barrio SE GANA HORRIBLE, la Mediana es $30"*.

```python
# Sacar Mediana Rápida en una columna engañosa
print(df["Salarios_Mensuales"].median())
```

> **Consejo Senior Data Analyst:** Si tu Promedio (`mean`) es gigantescamente Diferente y Mayor a tu Mediana (`median`), tienes picos anómalos o multimillonarios ensuciando tu modelo, los famosísimos *"Outliers"*. 

En Machine Learning (que es tu posterior frontera), deberás matar los "Outliers" para que la Inteligencia Artificial aprenda el comportamiento del humano NORMAL y promedio, y no del Bill Gates fortuito de la esquina que compró 1 millón de pares de calcetines aleatoriamente en tu base.
