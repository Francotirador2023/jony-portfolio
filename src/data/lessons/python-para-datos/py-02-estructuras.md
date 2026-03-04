# 🎒 Tipos de Inventario (Estructuras Nativas)

Tener una variable guardando un solo dato (`daño = 50`) es útil para el nivel 1. Pero, ¿qué pasa si quieres guardar los daños de 1 millón de jugadores? 
Python te regala 3 tipos de "Contenedores" o expansiones de mochila.

## 1. Listas (Lists) `[]` - La Mochila Flexible

Las listas son secuencias **ordenadas y mutables**. Esto significa que puedes meter y sacar ítems, ordenarlos o borrarlos en medio de la partida.

```python
# Creando tu historial de Kills diarios
kills_semana = [15, 42, 30, 89, 10]

# Buscando ítems (¡Los programadores empezamos a contar desde el cero!)
print(kills_semana[0])    # Imprime: 15 (Tus kills del Lunes)
print(kills_semana[-1])   # Imprime: 10 (El último día de la semana)

# Editando un dato (hubo un re-calculo del servidor)
kills_semana[2] = 35

# Agregando una Kill extra al final del historial
kills_semana.append(25)
```

## 2. Tuplas (Tuples) `()` - Las Reglas del Servidor

Las Tuplas son las hermanas "congeladas" de las Listas. Son **ordenadas pero INMUTABLES**. Una vez que las creas, están bloqueadas de por vida. No entra nada y no sale nada.

*¿Por qué querrías algo bloqueado?* Porque consumen poquísima RAM y son perfectas para guardar cosas que nunca deberías alterar por error humano.

```python
mapas_competitivos = ("Dust2", "Mirage", "Inferno", "Nuke")

# mapas_competitivos[0] = "Aztec"  --> ❌ ERROR FATAL. ¡El sistema anti-cheat no te dejará!
```

## 3. Diccionarios (Dictionaries) `{}` - El Perfil del Jugador

El **Rey Supremo** de las estructuras para guardar datos de la vida real.
A diferencia de Listas y Tuplas que usan números índice (0, 1, 2) para encontrar tus cosas, los diccionarios usan **Llaves y Valores (Key-Value Key)**. Buscas por palabras exactas, exactamente como los guardados en la nube (JSON files).

```python
jugador_pro = {
    "gamer_tag": "Tenz",
    "equipo": "Sentinels",
    "winrate": 65.5,
    "main_agents": ["Jett", "Reyna", "Omen"]  # ¡Puedes meter una Lista DENTRO de un Diccionario!
}

# Consultar un dato específico
print(jugador_pro["equipo"])   # Imprime: Sentinels

# Agregar una nueva medalla al perfil
jugador_pro["campeonatos_mundiales"] = 2
```

Saber si tu monstruosa base de datos necesita una Lista Rápida o un Diccionario Preciso te separará de los noobs que crashean servidores por quedarse sin RAM.
