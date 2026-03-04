# 🎨 Matplotlib: Tu Motor Gráfico Base

El código numérico corriendo en la consola negra parece Matrix y es súper pro, pero a los dueños de los equipos o Sponsors (CEO) no les importa. Ellos quieren ver DIBUJOS, gráficas espectaculares que resuman tu Data.

El "Abuelo" y creador oficial de todos los gráficos del mundo Python se llama **Matplotlib**.

## 1. El Objeto Figura (El Lienzo Blanco)

`Matplotlib` es "Programación de Bajo Nivel". Es como programar tú mismo el Motor Gráfico de un juego desde cero: tienes que decirle a la PC el tamaño de la ventana en píxeles, de qué color pintar la raya, y en qué pulgada soltar la pintura. Ganas **control divino y milimétrico** sobre el dibujo.

```python
import pandas as pd
import matplotlib.pyplot as plt   # Siempre se invoca como "plt"

# 1. Dos estadísticas básicas
meses = ["Season 1", "Season 2", "Season 3", "Season 4"]
kda_promedio = [1.2, 1.8, 1.5, 2.8]

# 2. Inicializar la "Ventana del Juego" (Resolución 10x5 Pulgadas)
plt.figure(figsize=(10, 5))

# 3. Lanzar la Tinta (Plot) al eje horizontal y vertical
plt.plot(meses, kda_promedio)

# 4. Decorar tu Pantalla de Carga
plt.title("Evolución de KDA del Roster Principal")
plt.xlabel("Líneas Temporales")
plt.ylabel("KDA Rating")

# 5. ¡Ejecutar! (La orden de lanzar a la pantalla del usuario)
plt.show()  
```

Al teclear `.show()`, Python arranca la tarjeta gráfica y te explota en la cara un HUD de curvas matemáticas hermosas trazando la historia de tu equipo.

## 2. El Arsenal (Tipos de Gráficas de Matplotlib)

Si cambias el comando básico `.plot()` podemos usar otras armas visuales:

- **`plt.bar(x, y)`:** Pinta Barras sólidas como edificios ("Bar Chart"). Ideal para el enfrentamiento: Daño de *Faker vs TenZ vs S1mple*.
- **`plt.scatter(x, y)`:** Dispara una escopeta de perdigones creando la nube del Gráfico de Dispersión. Se usa en Análisis Avanzado para descubrir el Meta Oculto: Pones *"Ping del Jugador"* vs *"WinRate"* para comprobar visualmente que la gente con lag pierde más.
- **`plt.hist(datos, bins=10)`:** El Histograma. Te dice cómo se distribuye todo el servidor. (La Campana de Gauss que te muestra el porcentaje exacto de Hierros, Oros y Diamantes).

Matplotlib es genial, pero escribir 15 líneas de código para configurar píxeles de colores da mucha flojera.
Por eso, en la próxima lección descargaremos un "Lanzamiento de Shaders/Texturas 4K Automático" llamado **Seaborn**.
