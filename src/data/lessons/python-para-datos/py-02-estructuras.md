# Estructuras de Datos Nativas

Tener una variable guardando un solo dato (`precio = 50`) es útil, pero en Análisis de Datos manejamos millones. Python tiene "contenedores" nativos para almacenar grupos de datos. Las tres más importantes son las Listas, las Tuplas y los Diccionarios.

## 1. Listas (Lists) `[]`

Las listas son secuencias **ordenadas y mutables** (puedes cambiarles el contenido después de crearlas). Te permiten agrupar elementos que lógicamente van juntos, como una columna de Excel.

```python
# Creando una lista de ventas en dólares
ventas_semana = [150, 420.5, 300, 890, 100]

# Accediendo a elementos (¡En Python se empieza a contar desde el cero!)
print(ventas_semana[0])    # Imprime: 150 (El primer elemento)
print(ventas_semana[-1])   # Imprime: 100 (El último elemento, contando de atrás para adelante)

# Modificando un dato (Oops, me equivoqué en el miércoles)
ventas_semana[2] = 350

# Agregando un nuevo dato al final de la lista
ventas_semana.append(250)
```

## 2. Tuplas (Tuples) `()`

Las tuplas son las hermanas "congeladas" de las Listas. Son **ordenadas pero INMUTABLES**. Una vez que se crean, no se pueden modificar, borrar ni agregar.

*¿Por qué querrías algo que no se edita?* Porque son más rápidas de procesar en la CPU para el ordenador y son perfectas para guardar catálogos fijos (ej. Meses del año, Coordenadas GPS).

```python
dias_laborables = ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes")

# dias_laborables[0] = "Sunday" --> Esto lanzaría un error rojo (TypeError). ¡Están protegidas!
```

## 3. Diccionarios (Dictionaries) `{}`

El Rey Midas de las estructuras lógicas. A diferencia de Listas y Tuplas que usan números índice (0, 1, 2) para encontrar cosas, los diccionarios usan **llaves y valores (Key-Value pairs)**, exactamente igual que un objeto JSON que verás en bases de datos NoSQL modernas.

```python
empleado = {
    "nombre": "Ana Smith",
    "departamento": "Finanzas",
    "sueldo": 4500,
    "habilidades": ["Excel", "SQL", "Tableau"]  # ¡Una lista dentro de un diccionario!
}

# Consultar el diccionario
print(empleado["departamento"])   # Imprime: Finanzas

# Agregar nueva llave
empleado["bono"] = 500
```

Dominar cuándo usar una lista gigante vs un diccionario rápido separa a los analistas que colapsan sus ordenadores de los que no.
