# Sintaxis Básica y Variables

¡Bienvenido al lenguaje más versátil, demandado y amigable del mundo! Python es como escribir en inglés simple. No necesitas poner punto y coma al final de cada línea, ni declarar el "tipo" de cada variable.

## Tu Primer Código: Variables

En programación, una **variable** es como una caja donde guardamos un dato para usarlo después. En Excel, guardarías el dato en la celda `A1`. En Python, le pones un nombre.

```python
# Así se escriben comentarios que Python ignora
nombre = "Jony"                 # Texto (String o str)
edad = 28                       # Número entero (Integer o int)
salario = 3500.50               # Número decimal (Float)
es_analista = True              # Booleano (True o False)
```

## Imprimir en Pantalla: `print()`

Para ver qué hay dentro de tus cajas (variables) o mostrar un mensaje, usamos la función `print()`.

```python
print("¡Hola mundo de los datos!")
print("Mi nombre es", nombre, "y tengo", edad, "años.")
```

> **Curiosidad Analítica:** A diferencia de SQL donde necesitas hacer `SELECT` para ver algo, Python trabaja en la memoria de tu computadora en tiempo real (RAM), y `print()` es la ventana para asomarte a ver cómo van tus cálculos.

## Operaciones Matemáticas Básicas

Python es una calculadora súper poderosa por defecto:

```python
ingresos = 5000
gastos = 2000

beneficio = ingresos - gastos
margen = (beneficio / ingresos) * 100

print(f"El beneficio neto es: ${beneficio}")
print(f"El margen de ganancia es: {margen}%")
```

*(Nota la "f" antes de las comillas en el último print. Se llaman **f-strings** y son la mejor forma de mezclar texto con variables dentro de las llaves `{}`).* 

En la próxima clase veremos qué pasa cuando no quieres guardar un solo número, sino cien mil precios al mismo tiempo.
