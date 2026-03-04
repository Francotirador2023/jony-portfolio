CREATE TABLE Series (
    SerieID INT PRIMARY KEY,
    Titulo VARCHAR(100),
    Genero VARCHAR(50),
    AnioEstreno INT,
    Temporadas INT,
    RatingPuntuacion DECIMAL(3,1)
);

INSERT INTO Series (SerieID, Titulo, Genero, AnioEstreno, Temporadas, RatingPuntuacion) VALUES
(1, 'Stranger Things', 'Sci-Fi', 2016, 4, 8.7),
(2, 'The Witcher', 'Fantasy', 2019, 3, 8.0),
(3, 'Cyberpunk: Edgerunners', 'Anime', 2022, 1, 8.3),
(4, 'Arcane', 'Animation', 2021, 1, 9.0),
(5, 'Black Mirror', 'Sci-Fi', 2011, 6, 8.7),
(6, 'The Last of Us', 'Drama', 2023, 1, 8.8),
(7, 'Breaking Bad', 'Drama', 2008, 5, 9.5),
(8, 'Squid Game', 'Thriller', 2021, 1, 8.0),
(9, 'Castlevania', 'Animation', 2017, 4, 8.3),
(10, 'Peaky Blinders', 'Crime', 2013, 6, 8.8);

CREATE TABLE Usuarios (
    UsuarioID INT PRIMARY KEY,
    Username VARCHAR(50),
    PlanSuscripcion VARCHAR(20),
    FechaRegistro DATE
);

INSERT INTO Usuarios (UsuarioID, Username, PlanSuscripcion, FechaRegistro) VALUES
(101, 'JonyGamer99', 'Premium', '2023-01-15'),
(102, 'AnaProPlayer', 'Estandar', '2023-03-22'),
(103, 'NoobMaster69', 'Basico', '2023-05-10');

CREATE TABLE HistorialVisualizacion (
    HistorialID INT PRIMARY KEY,
    UsuarioID INT,
    SerieID INT,
    FechaVisto DATE,
    MinutosVistos INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID),
    FOREIGN KEY (SerieID) REFERENCES Series(SerieID)
);

INSERT INTO HistorialVisualizacion (HistorialID, UsuarioID, SerieID, FechaVisto, MinutosVistos) VALUES
(1001, 101, 4, '2023-10-01', 240),
(1002, 101, 3, '2023-10-05', 120),
(1003, 102, 1, '2023-11-12', 500),
(1004, 103, 2, '2023-11-20', 45);
