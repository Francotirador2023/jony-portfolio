# 📅 Líneas Temporales (Manejo de Fechas)

Si descargas el historial de logins del servidor de Riot o Epic Games, las fechas (`"2026-05-18"`, `"18/05/2026"`) vienen en formato **Texto**. Para Python, un texto solo son letras muertas. No puede saber si Mayo viene antes de Julio, ni saber si era domingo y el servidor colapsó por exceso de jugadores.

Bienvenidos al martillo temporal de Pandas.

## 1. Activando el Reloj del Servidor

Para usar la magia cronológica, debes forzar ese texto feo convirtiéndolo en su tipo de dato oficial para viajes en el tiempo: `datetime64`.

```python
import pandas as pd
df = pd.read_csv("logs_de_conexion.csv")

# La varita mágica: pd.to_datetime()
df["Fecha_Real"] = pd.to_datetime(df["Fecha_Texto"])

# Revisando el Inventario (Tipos de Dato) para ver que pasamos de String a DateTime
print(df.dtypes)
```

## 2. El Extractor Cuántico: `.dt`

Si una columna ya es un Reloj Oficial, Pandas le otorga el superpoder `.dt` (Datetime). Es como un accesorio para extraer la pieza exacta de tiempo que te sirva para el reporte.

```python
df["Dia_Num"]           = df["Fecha_Real"].dt.day         # Retorna 14, 25, 31..
df["Mes_Num"]           = df["Fecha_Real"].dt.month       # Retorna 1 a 12
df["Año_Season"]        = df["Fecha_Real"].dt.year        # Retorna el Año de la Season
df["Nombre_Dia"]        = df["Fecha_Real"].dt.day_name()  # 'Monday'
df["Es_FinDeSemana"]    = df["Fecha_Real"].dt.dayofweek > 4   # Retorna TRUE o FALSE
```

¡Boom! De una sola columna toda encriptada, extrajiste un calendario táctico completo para ver si la gente juega más los Sábados o los Miércoles.

## 3. Comprimiendo el Tiempo (`resample`)

En las lecciones de Agrupación aprendiste `.groupby()`. Pero para el Tiempo, Pandas tiene su propio y brutal agrupador: *`.resample()`*. 

Imagina que tienes el historial de tiros a la cabeza de todo el año (milisegundo a milisegundo) y tu Coach te dice: *"Solo muéstrame las Kills agrupadas por Mes para ver mi progreso"*.

```python
# OBLIGATORIO: Se hace después de establecer la "Fecha_Real" como tu ID Principal (Índice)
df = df.set_index("Fecha_Real")

# Pídele que Sume ('sum') las Kills, empaquetándolas por MES ('M') o por Trimestre ('Q')
kills_temporada = df["Kills"].resample("M").sum()

print(kills_temporada)
```

¡Toda la línea temporal ha sido purgada, comprimida y alineada automáticamente! Estás listo para dibujar un Eje de Coordenadas X/Y y graficar este progreso ante los ojos del mundo usando Matplotlib.
