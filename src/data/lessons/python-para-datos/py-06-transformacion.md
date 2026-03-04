# ⚔️ Filtros y Mutaciones (Buffs en AoE)

Ya expulsaste a los AFKs (NaNs) y tu DataFrame está pulcro y nivel max. Pero viene el Coach del Main Roster y te dice:
_"No me interesan los noobs. Sólo sácame la lista de jugadores que sean de Rango Radiante, que tengan más de 5,000 Horas de juego, y mételes un "Buff" multiplicando todo su Oro farmeado por 2."_

Esto en Excel te tomaría 10 clics y se colgaría. En Pandas, es un soplido.

## 1. El Matchmaking Avanzado (Filtros Booleanos)

A diferencia de SQL donde usas `WHERE`, en Pandas creamos "Condiciones" (Reglas del Matchmaking), y se las lanzamos directamente a la cara del DataFrame entre corchetes cuadrados `[]`.

```python
import pandas as pd
df = pd.read_csv("ranked_stats.csv")

# 1. Definimos las Reglas del Matchmaking
soy_radiante = (df["Rango"] == "Radiante")
muchas_horas = (df["Horas_Jugadas"] > 5000)

# 2. Las pasamos al filtro real. (Para decirle "Y / AND" usamos `&`)
# ¡Obligatorio poner paréntesis a cada regla!
df_los_dioses_del_juego = df[(soy_radiante) & (muchas_horas)]

# ¡Boom! La tabla nueva solo tiene a la Élite
print(df_los_dioses_del_juego.shape) 
```

## 2. Creando Nuevos Stats (Mutación Directa)

En Excel arrastras molestas fórmulas celda por celda hacia abajo. En Python/Pandas aplicamos ataques **AoE (Area of Effect)**. Computamos columnas enteras en masa (vectorización) en 1 milisegundo. Basta con inventarte un nombre de columna con el signo **igual `= `** y el motor atacará a toda la matriz junta.

```python
# Inventamos un "Daño Real" que sea el Daño inflado quitándole la Armadura Enemiga.
# Pandas mutará automáticamente las 5 millones de filas de un golpe.
df_los_dioses_del_juego["Daño_Real"] = df_los_dioses_del_juego["Daño"] - df_los_dioses_del_juego["Armadura_Enemiga"]

# Creando el "Oro con Buff del Evento x2"
df_los_dioses_del_juego["Oro_Total_Evento"] = df_los_dioses_del_juego["Oro_Farmeado"] * 2

# Imprimimos para ver nuestros nuevos Stats en acción
print(df_los_dioses_del_juego[["GamerTag", "Daño_Real", "Oro_Total_Evento"]].head(3))
```

¿Tiempo de Excel vs Pandas para mutar stats matemáticas pesadas? 
- **Excel:** Tu procesador empieza a sonar como un reactor nuclear sumando celditas.
- **Pandas bajo el motor C (NumPy base):** Nanosegundos. Todo viaja matemáticamente de forma matricial instantánea.
