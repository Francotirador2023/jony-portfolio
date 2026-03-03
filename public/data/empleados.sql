-- Seed script for SQL course
CREATE TABLE Empleados (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Nombre TEXT NOT NULL,
    Puesto TEXT NOT NULL,
    Departamento TEXT NOT NULL,
    Salario REAL NOT NULL,
    Fecha_Contratacion DATE
);

INSERT INTO Empleados (Nombre, Puesto, Departamento, Salario, Fecha_Contratacion) VALUES
('Ana Smith', 'Analista de Datos', 'IT', 4500.00, '2023-01-15'),
('Juan Perez', 'Desarrollador Backend', 'IT', 5200.00, '2022-05-20'),
('Maria Garcia', 'Gerente de Marketing', 'Marketing', 6000.00, '2021-11-10'),
('Carlos Rodriguez', 'Especialista SEO', 'Marketing', 3800.00, '2023-08-01'),
('Luisa Martinez', 'Ejecutiva de Ventas', 'Ventas', 4200.00, '2022-02-14'),
('Roberto Gomez', 'Director Financiero', 'Finanzas', 8500.00, '2020-09-01'),
('Carmen Diaz', 'Contadora Senior', 'Finanzas', 5500.00, '2021-03-22'),
('Laura Ruiz', 'Soporte Técnico', 'IT', 3200.00, '2024-01-05');

CREATE TABLE Tiendas (
    ID_Tienda INTEGER PRIMARY KEY,
    Nombre TEXT,
    Ciudad TEXT
);

INSERT INTO Tiendas (ID_Tienda, Nombre, Ciudad) VALUES
(1, 'Sucursal Norte', 'Madrid'),
(2, 'Sucursal Centro', 'Bogotá'),
(3, 'Sucursal Sur', 'Lima');
