# Series y DataFrames (Pandas)

Si Python es tu coche, **Pandas** es el motor V8 biturbo que le instalas debajo del capó. Es una **librería** (un bloque de código externo escrito por genios de los datos) que permite a Python leer, manipular y transformar gigabytes de información simulando la apariencia de Excel, pero 10,000 veces más rápido.

Para usarlo, siempre debes importarlo al inicio de tu libreta (Jupyter Notebook):

```python
import pandas as pd
```

Pandas tiene dos estructuras sagradas que debes grabarte en la mente.

## 1. La Serie (Series)

Imagina una Serie simplemente como **Una Columna**. O un array de 1 sola dimensión. Tiene datos y cada dato tiene un "Índice" (un número de orden a la izquierda).

```python
edades = pd.Series([25, 30, 45, 22])
print(edades)
# Imprime algo así:
# 0    25
# 1    30
# 2    45
# 3    22
# dtype: int64
```

## 2. El DataFrame

Aquí empieza la magia empresarial. El DataFrame es la evolución biológica natural: **Es un Excel de múltiples columnas y filas**. Técnicamente, es simplemente "muchas *Series* pegadas la una al lado de la otra compartiendo el mismo número de Índice (filas)".

**Creando un DataFrame Pequeño a Mano:**

```python
# Un diccionario de Python 
info_clientes = {
    "RUT": ["A1", "A2", "A3"],
    "Nombre": ["Ana", "Juan", "Pedro"],
    "Edad": [28, 45, 19],
    "Ciudad": ["Madrid", "Bogotá", "Lima"]
}

# Convertimos el diccionario en un DataFrame majestuoso
df = pd.DataFrame(info_clientes)

print(df)
```

## 3. Leyendo Archivos Reales (CSV / Excel)

A mano está bien para practicar, pero nosotros los analistas leemos bases nativas sacadas de SQL o de SAP. Pandas puede leer un archivo CSV de 500 MB en fracciones de segundo:

```python
df_ventas = pd.read_csv("BaseDatosVentas_2024.csv")

# Exploración rápida: Ver las primeras 5 filas (El equivalente al ojo visor de Excel)
print(df_ventas.head(5))

# Exploración rápida: ¿Cuántas filas y columnas tiene este monstruo?
print(df_ventas.shape)  # Ej: (1000000, 25)
```

¡Eso es! Ya tienes los datos en la memoria listos para torturarlos, someterlos o extraerles la rentabilidad secreta del negocio.
