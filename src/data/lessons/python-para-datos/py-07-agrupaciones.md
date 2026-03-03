# Agrupaciones y Tablas Dinámicas en Código

En Excel usabas clics para arrastrar campos a las filas y sumar valores. En SQL usabas `GROUP BY`. En Pandas, el rey absoluto del Análisis Exploratorio de Datos (EDA) es el método `.groupby()`.

## 1. El Método `.groupby()`

Imagina que tienes miles de registros de ventas de 3 continentes distintos. Quieres saber: *"¿Cuál fue el total vendido por cada Continente?"*.

```python
import pandas as pd
df = pd.read_csv("ventas_mundiales.csv")

# 1. Agrupar por la columna "Continente".
# 2. Seleccionar la columna numérica a sumar "Monto".
# 3. Aplicar la función matemática agregada .sum()

ventas_por_continente = df.groupby("Continente")["Monto"].sum()

print(ventas_por_continente)
# Europa       450000
# America      380000
# Asia         720000
# Name: Monto, dtype: int64
```

¡Has condensado 1 millón de filas en un resumen estadístico maravilloso de 3 renglones en una milésima de segundo!

## 2. Agrupación Múltiple y Agagaciones Crueles (`.agg()`)

A veces un Jefe no pide solo la *Suma*. A veces dice: "Quiero la Suma del Monto de Ventas, pero quiero ver también el Promedio, y el Máximo que se ganó en un solo día, TODO ESTO por País y por Año."

```python
# Usamos el super método .agg() y pasamos una lista de funciones

mega_resumen = df.groupby(["Continente", "Anio"])["Monto"].agg(["sum", "mean", "max", "count"])

print(mega_resumen)
```

Esto imprime un cubo estadístico tridimensional de tus datos donde puedes diagnosticar instantáneamente qué año fue el mejor en cada lugar de la tierra.

## 3. Pivot Tables (`pd.pivot_table`)

Si extrañas el diseño en formato *Matriz* de Excel (donde arrastras algo a "Columnas" cruzando con "Filas"), Pandas también tiene su propia función hiper idéntica:

```python
# Crear una matriz donde:
#  - Eje Y = Continente
#  - Eje X = Año
#  - Cuadros Centrales = Sumatoria de las Ventas (Values)

matriz = pd.pivot_table(
    df, 
    values="Monto", 
    index="Continente", 
    columns="Anio", 
    aggfunc="sum",
    fill_value=0  # Si no existen ventas ese año, rellénalo con cero (0)
)
```

Cuando aprendas Pandas Pivot Tables, no querrás volver jamás a esperar los trabones visuales infinitos y las pantallas en blanco del programa Excel de escritorio. 
