# 🔮 Seaborn: Los Shaders 4K Automáticos

Si usaras *Matplotlib* puro para presentarle tu dashboard al dueño del club de Esports, se quedaría dormido viendo colores azules opacos por defecto al menos que pasaras 4 horas programando códigos HEX para embellecer los bordes.

**Seaborn** es una librería creada expresamente *encima* de Matplotlib. Es como descargar un "Shader Pack / ENB" ultra realista para tu juego. Trae integrado "El Buen Gusto Automático", temas Dark Mode Neon, degradados exquisitos y curvas estadísticas... todo activable con un simple soplido.

## 1. Hackeando la curva: Data Storytelling

Seaborn se comunica telepáticamente con *Pandas*. Ya no necesitas separar manualmente el Eje X del Y como cavernícola. Solo le arrojas por la cara todo el DataFrame completo, le dices cómo se llaman las columnas de tu Excel, y él crea la Obra de Arte solo.

```python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# 1. Leemos 1 millón de partidas Ranked
df = pd.read_csv("ranked_history_2026.csv")

# 2. Encendemos el Shader Nocturno Hermoso por Defecto (Dark UI)
sns.set_theme(style="darkgrid")

# 3. Pintar todo el archivo, con un 'Aura' de colores distintos para cada Rol del Jugador (hue)
sns.lineplot(
    data=df, 
    x="Mes", 
    y="WinRate", 
    hue="Main_Rol" # [Mago, Tanque, Soporte, Tirador]
)

# 4. Soltar la bomba a la pantalla
plt.show()
```

Esta mini-genialidad de código logrará instantáneamente:
- Separar cada "Rol del juego" en una línea de color distinta (Tanques en verde, Magos en morado).
- Crear un cuadrito bonito (Leyenda) arriba a la derecha.
- Crear sombras borrosas (intervalos de confianza estadísticos) alrededor de las líneas.
(Hacer esto en Matplotlib puro te obligaría a picar 60 líneas crudas de programación destructiva).

## 2. El Radar Térmico (Heatmap)

En E-sports y Data Science pura, usamos Correlaciones Diabólicas para descubrir qué "Stat" influye más en que un jugador gane la partida.

```python
# Cruzamos matemáticamente toda la tabla para buscar qué stats van de la mano
matriz_radar = df.corr()

# Trazamos un Mosaico de Temperatura con números (annot=True) y colores ardientes / fríos (cmap="coolwarm")
sns.heatmap(matriz_radar, annot=True, cmap="coolwarm")
plt.show()
```
El Radar Térmico te gritará visualmente si hay manchas en ROJO FUEGO. Por ejemplo: una mancha roja fuego brutal conectando cruzadamente los "Clicks por Segundo (APM)" con el "WinPercentage". Descubriendo el secreto de la victoria en 2 segundos visuales.

> 👑 **Consejo del Head Coach de Datos:** Usa Seaborn el 90% del tiempo. Tu trabajo volará mentes en las presentaciones al nivel *Cyberpunk*. Pero jamás olvides Matplotlib, pues Seaborn vive DENTRO de él, y si necesitas forzar alguna perilla técnica, Matplotlib siempre seguirá corriendo las tuercas reales por debajo del capó.
