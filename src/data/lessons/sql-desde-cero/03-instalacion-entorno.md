# Instalación de Entorno (Postgres)

Para poder escribir tus propias consultas SQL, necesitas un lugar donde ejecutarlas. Piensa en el motor de Base de Datos como el "Microsoft Word" donde escribirás tu documento.

Para este curso, trabajaremos con **PostgreSQL**. Es gratuito, de código abierto y extremadamente poderoso.

## Paso 1: Descargar el Servidor

Dirígete a la página oficial de [PostgreSQL Downloads](https://www.postgresql.org/download/) y descarga el instalador acorde a tu sistema operativo (Windows, macOS o Linux).

- Ejecuta el instalador.
- Deja los ajustes por defecto, pero **¡MUY IMPORTANTE!** cuando te pida crear una contraseña para el superusuario `postgres`, escribe una clave que nunca olvides (ej. `root` o `1234`).
- Al finalizar, el servidor PostgreSQL ya estará corriendo de fondo en el puerto 5432 de tu computadora.

## Paso 2: Descargar el Cliente Visual (DBeaver o pgAdmin)

PostgreSQL en sí mismo es oscuro y se maneja por consola de texto negro. Para hacerlo mucho más amigable, utilizaremos un entorno visual (IDE).

Recomendamos **DBeaver** Community Edition por ser ligero y soportar múltiples bases de datos.

1. Descarga [DBeaver Community](https://dbeaver.io/download/).
2. Instálalo.
3. Abre DBeaver, da clic en el icono del "conector" arriba a la izquierda.
4. Selecciona PostgreSQL.
5. Los campos predeterminados ya deberían ser localhost y el puerto 5432. Sólo ingresa tu contraseña que pusiste en el Paso 1 y dale a "Finish".

## Tu Primer Comando

Una vez dentro de DBeaver, abre un nuevo "Script SQL" e ingresa esto para asegurarnos que todo funciona:

```sql
SELECT version();
```
Presiona `Ctrl + Enter` (o cmd + enter en mac). Deberías ver la versión actual de tu PostgreSQL.

¡Listo! Tu entorno está 100% configurado para aprender SQL.
