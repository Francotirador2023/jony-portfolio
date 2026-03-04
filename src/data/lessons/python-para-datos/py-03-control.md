# ⚙️ El Motor de Reglas (Control de Flujo)

Los programadores somos listos: no farmeamos el oro con las manos, creamos "Bots Legales" que farmean por nosotros. 
Para automatizar algo, necesitas enseñarle a Python a **Tomar Decisiones** (`if`) y a **Repetir Tareas Aburridas** (`for`).

## ⚖️ Condicionales: `if`, `elif`, `else` (El Juez)

Evalúan tu partida en tiempo real. Si la condición lógica se cumple (`True`), dispara un evento.

> 🛑 **El Pecado Mortal:** La "Sangría" (Indentación). 
> En otros lenguajes usas feas llaves `{}`. Python sabe qué líneas de código se ejecutan "dentro" del IF empujándolas **4 espacios hacia la derecha** presionando Tabulador. 

```python
oro = 12000
precio_espada_epica = 10000

if oro > precio_espada_epica:
    print("¡Tienes oro de sobra! Espada comprada.")      # Si es True, corre este bloque
    oro_restante = oro - precio_espada_epica
elif oro == precio_espada_epica:
    print("Comprada justito, te quedas pobre a 0.")      # 'else if' (Si falló lo de arriba, prueba esto)
else:
    print("Misión fallida, sigue farmeando noob.")       # La opción final de consuelo
```

## 🔄 El Bot de Farmeo: Ciclo `for`

Imagina que tienes una Lista con los puntos de 10,000 jugadores y a cada uno debes descontarle un 10% por inactividad. Hacerlo uno por uno destruye los dedos. 
El ciclo `for` recorrerá cada "caja" de tu lista, sacará el número, lo modificará y pasará al siguiente clon a una velocidad de **millones por segundo**.

```python
puntos_jugadores = [1000, 2500, 1500, 6000, 3000]
puntos_penalizados = [] # Mochila vacía lista para guardar los castigos

for pt_individual in puntos_jugadores:
    # Este bucle correrá 5 veces a velocidad luz
    castigo = pt_individual * 0.10
    total_final = pt_individual - castigo
    
    puntos_penalizados.append(total_final) # Lo guarda en la mochila vacía

print("Nuevos Puntos tras castigo:", puntos_penalizados) 
```

## ⚠️ Cuidado con la Maldición: Ciclo `while`
A diferencia del `for` que sabe inteligentemente que son 5 cajitas y debe detenerse... el `while` significa *"Mientas la condición siga pasando, repite"* infinitamente.
En Analítica rara vez se usa, ya que un mal cálculo genera un **Bucle Infinito** que hace explotar el CPU de tu computadora, obligándote a apagarla de un tirón.

Con esta lógica en tus dedos, estás preparado para instalar el arma más destructiva jamás creada para datos masivos: La librería **Pandas**.
