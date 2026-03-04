# 🐍 Sintaxis Básica y Variables (Tu Primer Personaje)

¡Bienvenido al lenguaje más famoso, demandado y amigable del mundo! Python es como jugar en "Fácil". No necesitas poner puntos y comas raras al final de cada línea de código. 

## 📦 Tu Inventario Inicial: Las Variables

En programación, una **variable** es como un espacio vacío en tu "Mochila Mágica" donde guardas un ítem (un dato) para usarlo en la batalla final.

```python
# Así se escriben comentarios en el chat que el sistema ignora
nickname = "Faker"              # Texto (String o str)
nivel_cuenta = 500              # Número entero (Integer o int)
kda_promedio = 2.45             # Número con decimales (Float)
tiene_pase_batalla = True       # Verdadero o Falso (Booleano)
```

## 🗨️ Hablando en el Chat Global: `print()`

Para ver qué hay guardado adentro de tu mochila mágica, usamos el comando visual `print()`. Es la pantalla de texto del juego.

```python
print("¡El servidor está online!")
print("El jugador", nickname, "está en el nivel", nivel_cuenta)
```

> **Curiosidad:** A diferencia de SQL donde usas `SELECT` para escanear tablones gigantes de Excel, Python trabaja directamente sobre la Memoria RAM hiper-rápida de tu PC, y el `print()` es la consola de comandos donde ves los resultados al vuelo.

## 🧮 Operaciones Matemáticas (Stats Base)

Python es una calculadora súper armada por defecto. Perfecto para calcular la economía del juego:

```python
oro_inicial = 5000
oro_gastado_en_pociones = 2000

oro_restante = oro_inicial - oro_gastado_en_pociones
interes_bancario = (oro_restante / oro_inicial) * 100

print(f"Te quedan: ${oro_restante} monedas de oro")
print(f"Acabas de ganar un interés del {interes_bancario}%")
```

*(Nota la "f" antes de las comillas en el último print. Se llaman **f-strings** y son el arma más letal de Python para inyectar variables rápidamente dentro del texto usando llavecitas `{}`).* 

En la próxima clase veremos qué pasa cuando no quieres guardar una sola moneda, ¡sino 10,000 ítems al mismo tiempo en tu mochila!
