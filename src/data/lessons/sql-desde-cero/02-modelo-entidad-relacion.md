# Modelo Entidad-Relación (ER)

El Modelo Entidad-Relación es la arquitectura y el diagrama sobre el cual construyes tu base de datos. Imagina que es el plano que usaría un arquitecto antes de poner el primer ladrillo de un edificio.

## Entidades y Atributos

- **Entidad:** Cualquier objeto (concreto o abstracto) que existe y se distingue de otro. Por ejemplo: `Alumno`, `Curso`, `Materia`.
- **Atributo:** Las propiedades que describen a la entidad. Por ejemplo, la entidad `Alumno` tiene los atributos `DNI`, `Nombre`, `Fecha de Nacimiento`.

## Tipos de Relaciones

Las entidades muy rara vez existen solas. Están conectadas por **relaciones**. 

### 1. Relación Uno a Uno (1:1)
Ocurre cuando una fila (registro) de la Tabla A se relaciona exclusivamente con una fila de la Tabla B.
*Ejemplo:* Un `Usuario` tiene un solo `Perfil`.

### 2. Relación Uno a Muchos (1:N)
Es la más común en bases de datos. Una fila de la Tabla A puede estar conectada a varias filas de la Tabla B, pero cada fila de la Tabla B está conectada a **una sola** fila de la Tabla A.
*Ejemplo:* Un `Cliente` puede hacer muchas `Compras`, pero una `Compra` pertenece solo a ese `Cliente`.

### 3. Relación Muchos a Muchos (N:M)
Varias filas de la Tabla A están conectadas a varias filas de la Tabla B. En bases relacionales, este modelo se resuelve creando una **tercera tabla** intermedia.
*Ejemplo:* Un `Estudiante` en la universidad cursa múltiples `Materias`, y una `Materia` tiene múltiples `Estudiantes`.

## Claves o Llaves (Keys)
Para que estas relaciones funcionen sin mezclar los datos, usamos "Llaves".
- **Primary Key (PK):** Es un identificador único para cada registro en una tabla (como tu número de DNI).
- **Foreign Key (FK):** Es un campo en una tabla que se conecta (enlaza) con la Primary Key de otra tabla.

```sql
-- Ejemplo visual de creación de tablas relacionadas
CREATE TABLE Clientes (
    ClienteID INT PRIMARY KEY,
    Nombre VARCHAR(100)
);

CREATE TABLE Ventas (
    VentaID INT PRIMARY KEY,
    ClienteID INT,
    Monto DECIMAL(10,2),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);
```

¡Excelente trabajo entendiendo esto conceptualmente! Pasa a la próxima lección donde instalaremos las herramientas en nuestra PC.
