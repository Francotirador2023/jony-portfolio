# 🗑️ Limpieza de Datos (AFKs y Bugs)

Recuerda la Regla de Oro del Gaming Competitivo: **Entra basura, sale basura (GIGO)**.

Si descargas el historial de partidas, habrá jugadores que se desconectaron, trolls que se pusieron nombres vacíos, o bugs del servidor. Al cargar eso en tu bello DataFrame de Pandas, no verás espacios "blancos". Verás la marca maldita: `NaN` (Not a Number). Literalmente el fantasma de los datos.

## 1. Escaneando el Servidor por AFKs

Antes de banear o limpiar, hay que pasar el escáner para ver qué tan infectada está la partida.

```python
import pandas as pd
df = pd.read_csv("historial_partidas_sucio.csv")

# ¿Cuántos AFKs (Nulls) hay en cada columna?
print(df.isnull().sum())

# Salida del radar:
# Match_ID         0
# GamerTag       145   <-- 145 Jugadores anónimos invisibles
# Daño_Hecho      20   <-- 20 crashearon y el servidor no registró su daño
# Fecha            0
```

¡Esos 20 `NaN` en la columna de Daño romperán cualquier matemática! Si le pides a Pandas que sume el daño, entrará en pánico.

## 2. El Kick Definitivo (`dropna`)

Si de 1 millón de partidas solo 5 están bugeadas, la técnica más rápida es **kickear de la sala** (eliminar la fila completa) por el bien del servidor.

```python
# Expulsa TODA la Fila si el jugador tiene aunque sea UN solo `NaN`
df_limpio = df.dropna()

# ¿Solo queremos kickear a los que tienen la columna VITAL 'Daño_Hecho' como NaN?
df_limpio = df.dropna(subset=['Daño_Hecho'])
```

## 3. Rellenar con Bots (`fillna`)

A veces es injusto borrar historiales increíbles solo porque olvidaron poner de qué "País" eran. Aquí entra la Imputación: rellenar el hueco de ese jugador caído de la red con un Bot o un valor por defecto.

```python
# Rellenar a los caídos con 0 daño base
df["Daño_Hecho"] = df["Daño_Hecho"].fillna(0)

# Rellenar a los Trolls con un tag estándar
df["GamerTag"] = df["GamerTag"].fillna("Jugador Desconocido")

# Magia Negra: Rellenar la vida que les faltaba con la "Vida Promedio" del servidor
promedio_servidor = df["Daño_Hecho"].mean()
df["Daño_Hecho"] = df["Daño_Hecho"].fillna(promedio_servidor)
```

¡Dominar el arte del `fillna` te salva de destruir bases de datos invaluables de tu empresa!
