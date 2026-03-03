# Gráficos Base con Matplotlib

El análisis numérico en consolas de texto plano de Python no impresiona a los inversionistas. Para "Vender" tus asombrosos cálculos de Pandas `Dataframes` y Series, necesitamos convertir los números matriciales en visuales hermosos de alto peso atómico.

La Fundación absoluta y "Abuelo" de todos los gráficos en Python se llama **Matplotlib**.

## 1. El Objeto Figura (El Lienzo Blanco)

`Matplotlib` fue diseñado hace décadas emulando los lenguajes de programación de los aviones espaciales y científicos de Matlab. Es muy "Bajo Nivel", es decir: Tienes que decirle a la computadora desde qué tamaño es la ventana, en qué pulgada pintarás y qué color exacto hexadecimal tendrá cada milímetro. A cambio, ganas control divino 100% sobre el Universo Visual.

```python
import pandas as pd
import matplotlib.pyplot as plt   # Se importa siempre con el pseudónimo "plt"

# 1. Crear Venta ficticia (Dos pequeñas Series)
meses = ["Ene", "Feb", "Mar", "Abr"]
ventas = [1500, 2400, 1800, 3200]

# 2. Inicializar la "Figura" de 10x5 Pulgadas
plt.figure(figsize=(10, 5))

# 3. Lanzar la Tinta (Plot) al eje X y eje Y
plt.plot(meses, ventas)

# 4. (Opcional) Decoraciones de la Sala de Estar
plt.title("Evolución de Ingresos Netos Q1")
plt.xlabel("Línea Temporal")
plt.ylabel("USD ($)")

# 5. La orden de Disparo a la Pantalla del usuario
plt.show()  
```

Al lanzar `.show()` , Python levanta el proceso, pinta el Lienzo y te revienta una hermosura matemática gráfica de curvas precisas ante tus ojos pasmados.

## 2. Tipos de Gráficas Más Comunes en Matplotlib

Si en el código anterior cambiábamos la línea `.plot()` (que es por defecto de Línea continua interactiva temporal), podíamos sacar otro tipo de historias numéricas.

- **`plt.bar(x, y)`:** Pinta Barras verticales masizas (Bar Chart). Ideales para contrastar "México vs España vs Colombia" en un mismo mes.
- **`plt.scatter(x, y)`:** Pinta Puntos aislados locos (Gráfico de Dispersión / Scatter Plot). Utilizados masivamente para las correlaciones cruzadas en Machine Learning (Sueldo contra el Gasto, Altura contra el Peso corporal y descubrir los puntos que salen del marco).
- **`plt.hist(datos, bins=10)`:** La Campana de Gauss Estadistica (Histograma). Fundamental. Distribuye y dibuja cómo se agrupan tus filas (Normal, Asimétrica, o totalmente desquiciada paramétricamente).

Matplotlib es poderoso por su control atómico. Pero escribir 20 líneas de código y decoración manual por una miserable gráfica... Cansa.
Ahí es donde nuestra próxima gema entra al rescate: El Señor Oscuro, **Seaborn**.
