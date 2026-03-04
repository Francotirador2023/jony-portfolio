# 💻 Instalación de Entorno (Postgres)

Para poder escribir tus propias consultas SQL, necesitas un programa donde ejecutarlas. Piensa en esto como instalar un "Launcher" (como Steam o Epic Games) y descargar el "Motor del Juego".

Para este curso, usaremos **PostgreSQL**. Es de código abierto, 100% gratis y aguanta millones de datos sin sudar.

## ⚙️ Paso 1: Instalar el "Motor" (El Servidor)

Dirígete a la página oficial de [PostgreSQL Downloads](https://www.postgresql.org/download/) y descarga el instalador para tu sistema operativo (Windows, macOS o Linux).

- Ejecuta el instalador mágico.
- Deja todo en "Siguiente", pero **¡CUIDADO AQUÍ!** 🛑 
- Cuando te pida crear una contraseña para el superusuario `postgres`, escribe algo corto que jamás olvides (como `root`, `admin` o `1234`). Será tu contraseña maestra.
- Al terminar, el servidor de base de datos ya estará corriendo en el fondo de tu PC de forma invisible (en el puerto 5432).

## 🖥️ Paso 2: Descargar el "Launcher" visual (DBeaver)

PostgreSQL solo es una pantalla negra de consola. Para no volvernos locos y ver todo bonito (con colores y tablas gráficas), usaremos una interfaz gráfica o IDE.

Recomendamos **DBeaver** Community Edition (es ligero y súper potente).

1. Descarga [DBeaver Community](https://dbeaver.io/download/).
2. Instálalo como cualquier otro programa.
3. Ábrelo y dale clic al icono del "Enchufito" (Conexión) arriba a la izquierda.
4. Selecciona el elefante de PostgreSQL.
5. Los campos predeterminados ya deberían ser `localhost` y `5432`. Solo escribe tu contraseña maestra del Paso 1 y dale a **Finalizar** (Finish).

## 🚀 Tu Primer Comando (El 'Hola Mundo' de SQL)

Una vez dentro de DBeaver, abre un nuevo "Script SQL" e ingresa esto para comprobar que no explotó tu PC:

```sql
SELECT version();
```
Presiona `Ctrl + Enter` (o cmd + enter en mac) para ejecutar (*es como darle al botón de disparar*). En la parte inferior de tu pantalla deberías ver la versión instalada de PostgreSQL.

> 💡 **Tip:** Si salió verde y te muestra una tabla de un solo recuadro con texto... ¡Felicidades! Acabas de hacer tu primera consulta a una base de datos real.

¡Tu entorno está 100% "Ready" para que empieces la verdadera aventura SQL!
