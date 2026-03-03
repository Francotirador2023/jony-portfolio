# Análisis de Series de Tiempo (Dates)

Python lee por defecto absolutamente toda fecha (`"2024-05-18"`, `"18/05/2024"`, `"June 1, 2012"`) como un vil texto. Y un vil texto estúpido de "string" literal, no puede ordenar si Mayo viene antes de Julio ni sacar qué día cayó si fue un martes laborable, es solo letras.

Bienvenidos al martillo de las Series de Tiempo de Pandas.

## 1. Convirtiendo a Tipo Fecha Verificable

Para obtener el ADN biológico del tiempo, debemos convertir la columna de chatarra Textual en el tipo dorado `datetime64`.

```python
import pandas as pd
df = pd.read_csv("facturas.csv")

# La magia: Convert_To_DateTime
df["Fecha_Real"] = pd.to_datetime(df["Fecha_Texto"])

# Verificar que dejamos de ser tipo `object` (String) a `datetime64`
print(df.dtypes)
```

## 2. El Atributo `.dt` (Data-Time Extractor)

Si algo es de tipo Fecha Divino, Pandas habilita un submódulo dentro de la columna llamado `.dt`. Este accesorio es como llevar y enchufar un Extractor atómico al dato tabular. 

A partir de 1 sola Columna con Fecha Real... extraes lo que te venga en gana mágicamente:

```python
df["Dia_Natural_Num"]   = df["Fecha_Real"].dt.day         # Da 14, 25, 31..
df["Mes_Num"]           = df["Fecha_Real"].dt.month       # 1 a 12
df["Año"]               = df["Fecha_Real"].dt.year        # 2024
df["Nombre_Dia_Ingles"] = df["Fecha_Real"].dt.day_name()  # 'Monday'
df["Fin_De_Semana_Si_o_No"] = df["Fecha_Real"].dt.dayofweek > 4   # Extrae TRUE o FALSE
```

¡Boom! Tenías una sola columna sucia, y ahora el modelo engordó y se transformó en tu Tablón super hiper Dimensional Calendario a velocidades absolutas.

## 3. Resample (Agrupación del Tiempo)

En la clase siete aprendimos `.groupby()` por País Continental. Pero para Datos de Tiempo, Pandas tiene *`.resample()`*. Imagina que tienes tickets de Ventas al milisegundo durante tres años ininterrumpidos y tu Director dice: *"Mándame las ventas Mensuales"*.

```python
# OJO: Se hace después de establecer la Fecha_Real como el ID Índice del DF

df = df.set_index("Fecha_Real")

# Súmame ('Sum') el Monto, haciendo cubos por MES ('M') o por Trimestre ('Q' - Quarter)
ventas_mensuales = df["Monto"].resample("M").sum()

print(ventas_mensuales)
```

¡Toda tu Data financiera ha sido purgada y alineada y agrupada automáticamente sin mover un dedo ni escribir funciones SQL complejas en milisegundosh! Estás listo para dibujar este eje de coordenadas Y/X y pintarlo al mundo.
