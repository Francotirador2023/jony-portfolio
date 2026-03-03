# Ciclos y Flujo de Control

En la programación no hacemos el trabajo duro; le decimos a la computadora que lo haga por nosotros de forma repetitiva y condicionada. Los pilares de la automatización son los condicionales (`if`) y los ciclos iterativos (`for`).

## Condicionales: `if`, `elif`, `else`

Similar a la función `SI()` de Excel, ejecutan ciertos bloques de código solo si una condición matemática o lógica resulta Verdadera (`True`).

> **Pecado mortal de Python:** La "Sangría" (Indentación). 
> A diferencia de SQL o JavaScript que usan llaves `{}`, Python sabe qué líneas de código pertenecen al "SI" empujándolas 4 espacios hacia la derecha.

```python
ventas = 12000
meta = 10000

if ventas > meta:
    print("¡Meta superada! Bono aprobado.")     # Esta línea corre, porque es Verdadero (12,000 > 10,000)
    bono_calculado = (ventas - meta) * 0.10
elif ventas == meta:
    print("Salvamos el mes justito.")           # 'else if' (si no se cumplió la primera, intenta esta)
else:
    print("Meta no alcanzada. Cero bono.")      # El comodín final si todas fallaron
```

## El Motor de la Computación: Ciclo `for`

Imagina que tienes una Lista de 10,000 precios y a cada uno debes aplicarle el IVA (Impuesto). Hacer 10,000 líneas a mano es locura. El ciclo `for` recorrerá cada elemento de tu "caja", lo sacará, le hará algo, lo devolverá y pasará automáticamente al siguiente en nanosegundos.

```python
lista_precios = [100, 250, 50, 600, 15]
precios_con_iva = [] # Creamos una lista vacía para ir guardando resultados

for precio_individual in lista_precios:
    # Este bloque correrá 5 veces (una por cada caja)
    impuesto = precio_individual * 0.16
    total = precio_individual + impuesto
    
    precios_con_iva.append(total)

print(precios_con_iva) 
# Imprime: [116.0, 290.0, 58.0, 696.0, 17.4]
```

## Ciclo `while` (Mientras que...)
A diferencia del `for` que sabe exactamente que tiene 5 cajas por revisar, el `while` corre infinitamente hasta que una condición se quiebre. En análisis de datos casi no se usan, ya que es fácil crear *"Bucles Infinitos"* accidentales que bloquean tu portátil y obligan a reiniciarla. 

Con estos tres fundamentos, ya tienes el cerebro de programación activado. En la próxima clase instalaremos el arma secreta de ciencia de datos: La poderosa librería **Pandas**.
