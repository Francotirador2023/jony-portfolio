# 🗺️ Modelo Entidad-Relación (ER)

El Modelo Entidad-Relación es como el "árbol de habilidades" o el diagrama sobre el cual construyes tu base de datos. Imagina que es el plano que usarían los desarrolladores de Riot Games o Epic Games antes de programar un nuevo juego.

![Visualización de Tablas en el Explorador de Servidores](/images/courses/sql-creacion%20tablas-ejemplo.png)

## 👾 Entidades y Atributos

- **Entidad:** Cualquier objeto o concepto principal que existe en tu mundo. Por ejemplo: `Jugador`, `Arma`, `Partida`.
- **Atributo:** Las estadísticas o características de esa entidad. Por ejemplo, la entidad `Arma` tiene los atributos `Nombre_Arma`, `Daño`, `Cadencia`.

## 🤝 Tipos de Relaciones

Las entidades casi nunca están solas en un juego. ¡Interactúan entre sí! Y ahí nacen las **relaciones**. 

### 1. Relación Uno a Uno (1:1)
Ocurre cuando una fila (registro) de la Tabla A se relaciona *exclusivamente* con una fila de la Tabla B.
*Ejemplo:* Un `Jugador` tiene vinculada *una sola* `Cuenta_Riot`, y esa cuenta pertenece a un solo jugador.

### 2. Relación Uno a Muchos (1:N)
Es la más común en el mundo real (y virtual). Una fila de la Tabla A se conecta a varias filas de la Tabla B, pero cada fila de B es exclusiva de A.
*Ejemplo:* Un `Jugador` puede tener muchas `Skins` en su inventario, pero cada `Skin` (una vez comprada) le pertenece solo a ese `Jugador`.

### 3. Relación Muchos a Muchos (N:M)
Varias filas de la Tabla A conectadas a varias de la Tabla B. En bases relacionales, el motor no sabe cómo manejar tanto caos, así que se crea una **tabla intermedia**.
*Ejemplo:* Un `Jugador` juega múltiples `Partidas_Ranked`, y una `Partida_Ranked` tiene múltiples `Jugadores`. (La tabla intermedia sería `Historial_Matchmaking`).

## 🗝️ Claves (Keys): El ID de todo

Para que las bases de datos no confundan a "Faker" con otro jugador que se puso el mismo nombre, usamos las *Llaves*.

- **Primary Key (PK):** Es el identificador **único** e irrepetible de un registro (como tu Riot ID o tu Tag de Discord con números).
- **Foreign Key (FK):** Es un campo que usamos para "invocar" o enlazar los datos de otra tabla. Es la PK de *otra* tabla, visitando nuestra tabla actual.

```sql
-- 🛠️ Ejemplo visual creando las tablas de un inventario
CREATE TABLE Jugadores (
    Riot_ID INT PRIMARY KEY,
    GamerTag VARCHAR(100)
);

CREATE TABLE Inventario_Armas (
    Arma_ID INT PRIMARY KEY,
    Riot_ID INT,             -- Aquí viene el dueño a reclamar su arma
    Nombre_Arma VARCHAR(50),
    FOREIGN KEY (Riot_ID) REFERENCES Jugadores(Riot_ID)
);
```

> 💡 **Tip Pro:** Antes de escribir una sola línea de código, los expertos dibujan en papel cómo se relacionarán las tablas usando cajas y flechas. ¡Es el meta actual!

### 🎮 Micro-Reto Rápido
Piensa en Spotify. Si tenemos una tabla `Artistas` y otra tabla `Canciones`... ¿qué tipo de relación crees que hay entre ellas? ¿1:1, 1:N o N:M? *¡Piénsalo antes de pasar al Set-Up de tu entorno!*
