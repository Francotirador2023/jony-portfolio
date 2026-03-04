# 🏆 Agrupaciones y Leaderboards (`groupby`)

En los juegos de Ligas (como LoL o Valorant) tienes millones de registros sueltos. Pero al final de la temporada, la gente no quiere ver el registro individual suelto, quieren ver... **El Ránking Final por Clanes o por Servidor.**

En Pandas, el hechizo supremo para crear Leaderboards se llama `.groupby()`.

## 1. Agrupando el Servidor (`groupby`)

Imagina la tabla gorda con el historial de Kills globales. Quieres saber: *"¿Cuál fue el Daño Total infligido por cada Servidor (NA, EU, LATAM)?"*.

```python
import pandas as pd
df = pd.read_csv("historial_daño.csv")

# 1. Agrupar a la gente en cuartos separados por "Servidor".
# 2. Elegir qué columna nos importa "Daño_Total".
# 3. Aplicar el Hechizo de Sumatoria .sum()

daño_por_servidor = df.groupby("Servidor")["Daño_Total"].sum()

print(daño_por_servidor)
# Servidor_NA          45000000
# Servidor_LATAM       38000000
# Servidor_EU          72000000
# Name: Daño_Total, dtype: int64
```

¡Acabas de condensar 50 millones de balas disparadas en un simple top mundial de 3 reglones de poder!

## 2. El Panel Completo de Estadísticas (`.agg()`)

A veces el dueño del team E-sports no solo quiere el Daño Total. Te pide: *"Tráeme la Suma del Daño, el Promedio General, y enséñame quién sacó las Máximas Kills en un solo día, TODO ESTO separado por Región y por Año"*.

Para ese mega-combo usamos el poderoso `.agg()` (Aggregate).

```python
# Pasamos una Lista de comandos mágicos que queremos calcular simultáneamente

stats_completas = df.groupby(["Servidor", "Anio_Ranked"])["Daño_Total"].agg(["sum", "mean", "max", "count"])

print(stats_completas)
```

Esto imprime un Cubo Multidimensional que te revela en 2 segundos qué región estaba de tryhard y quién tiene el récord de matar más gente.

## 3. Pivot Tables (`pd.pivot_table`)

Si extrañas el diseño de Tabla Dinámica de Excel (Cajas y Matriz cruzada de Filas vs Columnas), Pandas también tiene su propia arena de batalla cruzada:

```python
# Crear una matriz cruzada visual como pantalla final de resumen:
#  - Eje Y = Servidor
#  - Eje X = Año de la Temporada
#  - Centro = Suma total del Daño
#  - fill_value = Si no existían en esa Temp, pon un cero (0) de vida.

pantalla_resumen = pd.pivot_table(
    df, 
    values="Daño_Total", 
    index="Servidor", 
    columns="Anio_Ranked", 
    aggfunc="sum",
    fill_value=0  
)
```

Dominar `.groupby()` y las Matrices es el paso definitivo para graduarte de Data Analyst y dejar atrás las tablas pesadas que cuelgan Windows.
