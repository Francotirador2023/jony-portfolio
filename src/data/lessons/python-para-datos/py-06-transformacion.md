# Filtros y Transformaciones Avanzadas (Muting)

Ya tienes un DataFrame reluciente, pulido, sin una sola fila basura. Todo es número y texto de alta calidad corporativa. Y entonces llega tu jefe y dice:
_"No me interesa globalmente. Sólo quiero ver las ventas que hayan sucedido en Europa y que encima hayan sido compras mayores a $5,000 dólares, y además créame sobre eso una nueva columna con el 20% de descuento restado."_

Bienvenido al filtro en Python (`WHERE` en SQL, `Filtros Avanzados` en Excel).

## 1. Filtros Condicionales (Mascarillas Booleanas)

A diferencia de SQL, en Pandas aplicamos los filtros creando una condición, y pasándole esa condición directamente entre los corchetes cuadráticos del nombre de nuestro DataFrame.

```python
import pandas as pd
df = pd.read_csv("ventas.csv")

# 1. Creamos la condición (Esto nos da puras verdades o falsos internamente)
condicion_europa = (df["Continente"] == "Europa")
condicion_dinero = (df["Venta"] > 5000)

# 2. Las pasamos al filtro (Para MÚLTIPLES usar un ampersand `&` que significa Y / AND)
# Usen paréntesis en cada condición al unir!
df_europa_elite = df[(condicion_europa) & (condicion_dinero)]

# ¡Boom! El nuevo df ahora solo posee lo que el jefe pidió
print(df_europa_elite.shape) 
```

## 2. Creando Columnas al Aire (Mutación)

Nuestro SQL sabe crear alias al vuelo. Nuestro Excel crea una columna y una fórmula que se auto-arrastra. En Pandas logras crear y computar matemáticas por Vector (en lotes de un millón de veces a la vez) con un inofensivo signo de **igual `= `**.

```python
# Si llamas a una columna nueva entre comillas e igualas a otra... se crea automágica y rellena hasta la fila 1 millón repitiendo el cálculo nativo de CPU C.

df_europa_elite["Monto_Descuento_Maledicto_Jefe"] = df_europa_elite["Venta"] * 0.20

# Crear la Venta Final Neta
df_europa_elite["Venta_Final_Neta"] = df_europa_elite["Venta"] - df_europa_elite["Monto_Descuento_Maledicto_Jefe"]

# Ver que todo salió perfecto
print(df_europa_elite[["Venta", "Venta_Final_Neta"]].head(3))
```

¿Tiempo de Excel vs Pandas para mutar filas matemáticas? 
- **Excel:** Trabado y pasmado con la ruidosa CPU calculando celdas encadenadas en la fórmula `Venta_F4 * 0.2 - N9`. 
- **Pandas Dataframe con NumPy Base:** Nanosegundos indetectables. Todo viaja matemáticamente de forma matricial (vectorizada por procesador).
