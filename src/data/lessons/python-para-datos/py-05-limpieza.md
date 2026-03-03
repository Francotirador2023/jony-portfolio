# Técnicas de Limpieza y Valores Nulos (NaN)

Recordemos la maldición del analista de Power Query: **Entra basura, sale basura (GIGO).**

Cuando usas `pd.read_csv()` en base a un volcado de un sistema contable de 1995 donde los vendedores escribieron mal los nombres o dejaron casillas vacías. Al llegar a Python en tu hermoso DataFrame, no verás celdas "blancas", verás un espectro horrible llamado `NaN` (Not a Number).

## 1. Diagnosticando la Basura

Antes de intentar eliminar la basura, debemos contarlo.

```python
import pandas as pd
df = pd.read_csv("ventas_sucias.csv")

# ¿Cuántos valores NULOS hay por CADA columna?
print(df.isnull().sum())

# Salida de ejemplo:
# ID_Venta         0
# Cliente        145   <-- 145 Sin nombre
# Monto          20    <-- 20 No registraron el pago
# Fecha          0
```

¡Esos 20 montos sin registrar en `Monto` colapsarán cualquier función de SUMA o Promedio de estadística arrojando un error en toda tu página!

## 2. Técnica de Aniquilación (Drop)

Si de un millón de transacciones solo hay 5 defectuosas, la técnica comercial es arrancar de raíz toda esa fila defectuosa por el bien mayor.

```python
# Elimina y bota TODA la Fila si tan solo UNA de sus celdas es NaN
df_limpio = df.dropna()

# ¿Solo borrar si la columna importante Monto está Nula?
df_limpio = df.dropna(subset=['Monto'])
```

## 3. Técnica de Imputación (Fill)

A veces es inaudito tirar 5,000 registros a la basura por culpa de su columna secundaria Nula. Aquí entra la imputación: reemplazar el `NaN` por un valor predeterminado como Ceros estadísticos.

```python
# Rellenar con ceros (0)
df["Monto"] = df["Monto"].fillna(0)

# Rellenar con "Desconocido" en columnas de Texto
df["Cliente"] = df["Cliente"].fillna("Cliente Local")

# Rellenar con el Promedio General Matemático
promedio_real = df["Monto"].mean()
df["Monto"] = df["Monto"].fillna(promedio_real)
```

Con estas dos funciones maestras acabas de hacer que un algoritmo matemático reemplace el trabajo que le tomaría 4 días a un practicante humano de Excel abriendo filtros, escribiendo "cero" en las filas y arrastrando el ratón mil veces por la tabla.
