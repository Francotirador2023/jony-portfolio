# 📊 Descubriendo el Matchmaking Oculto (Estadística EDA)

Cualquier niño con teclado puede filtrar tablas. Pero el verdadero Data Scientist va más allá: entiende el ELO oculto (MMR), sabe cazar "Smurfs" matemáticamente y entiende de verdad la salud del Servidor. 
A esto se le llama **Análisis Exploratorio de Datos (EDA)**.

## 1. El Escáner de Poder: `describe()`

La función `.describe()` es el Visor de Poder de Dragon Ball. Se lo apuntas a tu DataFrame y en 1 milisegundo examina CADA columna numérica del archivo escupiendo su radiografía interna.

```python
import pandas as pd
df = pd.read_csv("puntos_liga_clasificatoria.csv")

# Sácame los Rayos X de nuestro nivel actual:
print(df.describe())
```

**¿Qué significan los números que te bota el radar?**
- `count`: El conteo total de jugadores (Si esperabas 100 y dice 95... hay 5 AFKs infiltrados sin datos).
- `mean`: El viejo y engañoso Promedio.
- `std` (Desviación Estándar): ¿Qué tan caótico es el server? Si es altísima, significa que en la misma partida tienes Noobs de Plata 1 mezclados con Diamantes Tryhard. Zero balance de Matchmaking.
- `min` y `max`: Te chivatea quién hizo récord mudial o quién es el peor jugador histórico.
- `25%, 50%, 75%` (El Rango Intercuartílico): Si miras el 50% (La **Mediana**), sabrás la Verdad Absoluta, libre de Smurfs.

## 2. Promedio MENTIROSO vs Mediana REAL

Un error clásico de *"Hierro 4 en Análisis"* es confiar ciegamente en el Promedio (`mean`).

**Imagina esto:** Faker (Radiant / Pro-Player) entra de casualidad a una sala con 9 jugadores de Hierro Nivel 1.
Si alguien mide el MMR *Promedio* de la sala... los números se inflarán salvajemente y todos los Hierro parecerán de liga Plata y Oro gracias al arrastre estadístico de Faker.

*"¡Qué sala tan desafiante, el rango Promedio es Oro!"* - Diría el mal Analista engañado.

**La Mediana (`.median()`)**, no suma nada. Literalmente ordena a los 10 jugadores parados en fila india de peor a mejor, y le "toma el pulso" al SUJETO DEL MEDIO. Y si el tipo del medio es un Hierro... el analista Inteligente dirá: 

*"Faker es un pico anómalo solitario (Smurf), en esta sala apestan, la verdadera Mediana es Hierro Nivel 1."*.

```python
# Cazar la Verdad sin dejarte engañar por los Smurfs
print(df["Daño_Partida"].median())
```

> 👑 **Consejo de Coach Senior:** Si tu Promedio (`mean`) es brutalmente enorme comparado con tu Mediana (`median`), tienes cuentas Smurfs o "Outliers" distorsionando y ensuciando tus estadísticas.

En Machine Learning (que es tu próximo gran salto profesional), tu deber será erradicar a esos Outliers locos para que la Inteligencia Artificial Aprenda cómo juega el Humano NORMAL, y no estudie al 0.01% de los dioses millonarios casuales de tus bases de datos.
