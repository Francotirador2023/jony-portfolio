CREATE TABLE Jugadores (
    JugadorID INT PRIMARY KEY,
    RiotID VARCHAR(50) UNIQUE NOT NULL,
    Rango VARCHAR(20),
    Nivel INT,
    FechaCreacion DATE
);

INSERT INTO Jugadores (JugadorID, RiotID, Rango, Nivel, FechaCreacion) VALUES
(1, 'Faker#SKT', 'Challenger', 500, '2015-01-10'),
(2, 'TenZ#SEN', 'Radiant', 350, '2020-05-15'),
(3, 'S1mple#NAVI', 'Global Elite', 600, '2014-03-22'),
(4, 'Jony#LAS', 'Plata', 45, '2023-08-01');

CREATE TABLE Partidas (
    PartidaID INT PRIMARY KEY,
    ModoJuego VARCHAR(20),
    Mapa VARCHAR(30),
    DuracionMinutos INT,
    FechaPartida DATETIME
);

INSERT INTO Partidas (PartidaID, ModoJuego, Mapa, DuracionMinutos, FechaPartida) VALUES
(101, 'Ranked', 'Ascent', 40, '2023-12-01 15:30:00'),
(102, 'Unrated', 'Bind', 35, '2023-12-01 18:00:00'),
(103, 'Aram', 'Abismo', 20, '2023-12-02 20:15:00');

CREATE TABLE Resultados (
    ResultadoID INT PRIMARY KEY,
    JugadorID INT,
    PartidaID INT,
    Kills INT,
    Deaths INT,
    Assists INT,
    AgenteO_Campeon VARCHAR(30),
    Victoria BIT,
    FOREIGN KEY (JugadorID) REFERENCES Jugadores(JugadorID),
    FOREIGN KEY (PartidaID) REFERENCES Partidas(PartidaID)
);

INSERT INTO Resultados (ResultadoID, JugadorID, PartidaID, Kills, Deaths, Assists, AgenteO_Campeon, Victoria) VALUES
(10001, 2, 101, 35, 12, 5, 'Jett', 1),
(10002, 4, 101, 5, 20, 2, 'Sage', 0),
(10003, 1, 103, 22, 5, 15, 'Zed', 1);
