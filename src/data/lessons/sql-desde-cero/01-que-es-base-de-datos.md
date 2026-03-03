# ¿Qué es una base de datos?

Bienvenidos al primer módulo del curso **SQL: De Cero a Profesional**. En este capítulo sentaremos las bases matemáticas y estructurales de todo lo que haremos a continuación.

## La anatomía de la información

Una **base de datos** es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso. En este curso nos enfocaremos en las **bases de datos relacionales**.

> Las bases de datos relacionales organizan los datos en tablas (filas y columnas) que están vinculadas o "relacionadas" entre sí basándose en datos comunes.

### Conceptos Clave
- **Tablas:** Representan entidades del mundo real (ej. `Clientes`, `Ventas`).
- **Registros (Filas):** Una fila es un ingreso único de datos en la tabla (ej. Juan Perez de Lima).
- **Campos (Columnas):** Un atributo de la entidad (ej. `Nombre`, `Edad`, `Ciudad`).

## ¿Qué es SQL?
SQL (Structured Query Language) es el lenguaje estándar utilizado para comunicarnos con estas bases de datos relacionales. No es un lenguaje de programación para crear páginas web o juegos, ¡es exclusivo para hacer preguntas a los datos!

```sql
-- Este es un ejemplo de consulta (o pregunta) en SQL:
SELECT Nombre, Correo 
FROM Clientes 
WHERE Ciudad = 'Lima';
```

Al lanzar esta orden al motor de base de datos, este nos devolverá una lista filtrada exactamente con lo que pedimos.

### Tareas de este capítulo
1. Asegúrate de entender la diferencia entre un archivo de Excel y un gestor de bases de datos.
2. Continúa con la siguiente lección para aprender cómo planear la estructura en papel antes de ir a tu computadora.
