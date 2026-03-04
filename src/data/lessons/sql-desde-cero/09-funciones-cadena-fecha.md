# ✂️ Limpieza de Datos (Cadenas y Fechas)

Sacar información pura está genial, pero como analista (o Moderador del Juego), muchas veces la data llega sucia o desordenada. Los usuarios escriben combinando MAYÚSCULAS con minúsculas y los servidores combinan regiones en formatos raros. 

SQL tiene "herramientas de limpieza" súper eficaces.

## 1. Manipulando Texto al Instante (Strings)

### Gritos y Silencios (`UPPER`, `LOWER`)
Para forzar que un texto se lea en mayúsculas (como si estuvieran gritando en el chat) o en minúsculas. Súper vital en el `WHERE` para que tu buscador no falle si el pro-player se escribe "fAkEr" o "Faker".

```sql
-- Pasamos todos los insultos reportados en el chat a minúscula para analizarlos mejor
SELECT LOWER(Log_Mensaje) AS Chat_Normalizado 
FROM Reportes_Chat;
```

### Fusión Tribal (`CONCAT`)
Cuando quieres unir dos columnas separadas en una sola para que se vea más pro en el dashboard.

```sql
-- Unir el tag del clan con el nickname: "[FaZe] Jony"
SELECT CONCAT('[', Clan_Tag, '] ', GamerTag) AS Nombre_Completo 
FROM Perfiles;

-- Nota: En muchos motores (como Postgres) es más rápido usar las barras `||`
SELECT '[' || Clan_Tag || '] ' || GamerTag AS Ingame_Name FROM Perfiles;
```

### El Bisturí (`SUBSTRING` o `LEFT`/`RIGHT`)
A veces no quieres todo el texto. Por ejemplo, los ID de tu servidor vienen como `EU-West01` o `NA-East99`, y tú solo quieres la región.

```sql
-- Extrae solo los primeros 2 caracteres desde la izquierda (EU, NA)
SELECT LEFT(Server_ID, 2) AS Region_Global 
FROM Match_History;

-- SUBSTRING es más top: "Inicia a cortar en la letra 4, y dame los próximos 4 caracteres"
SELECT SUBSTRING(Email_Recuperacion, 1, 5) 
FROM Cuentas_Hackeadas;
```

## 2. Los Viajes en el Tiempo (Fechas)

El formato universal de fechas que respetan todas las bases del mundo gaming es: `YYYY-MM-DD` (Ej: 2026-10-31).

### ¿Qué día es hoy en el server? (`CURRENT_DATE`)

Ideal para ver quién compró el pase de batalla "HOY".
```sql
SELECT GamerTag, Monto_Gastado 
FROM Tienda_Virtual 
WHERE Fecha_Compra = CURRENT_DATE; 
-- (Si usas Microsoft SQL Server, el hechizo es GETDATE())
```

### Extracción Quirúrgica del Tiempo (`EXTRACT`)

¿Quieres saber en qué mes hay más jugadores conectados históricamente? Sácale solo el "AÑO" o "MES" a una fecha completa.

```sql
-- Sacamos solo el AÑO de las compras y sumamos el dinero que ganamos agrupado por ese Año.
SELECT 
    EXTRACT(YEAR FROM Fecha_Registro) AS Anio_Beta,
    COUNT(*) AS Nuevos_Jugadores
FROM Usuarios
GROUP BY EXTRACT(YEAR FROM Fecha_Registro);
```

¡Dominar esto es la diferencia entre un analista junior y alguien que lidera los dashboards de Twitch o Netflix! En el siguiente módulo entraremos a las Ligas Mayores: Aprenderemos a fusionar tablas con los poderosos **JOINS**.
