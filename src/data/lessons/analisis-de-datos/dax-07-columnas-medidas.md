# 🪄 DAX: Columnas vs Medidas (Stats vs Buffs)

DAX (Data Analysis Expressions) es el lenguaje donde sucede toda la magia de Power BI. Su gran engaño es que no usa "celditas (A4, B7)" como el Excel tradicional, sino que ataca a las columnas enteras invocándolas por su nombre.

El error de novato (Noob Trap) número 1 en Power BI es no saber cuándo usar una **Columna Calculada** y cuándo usar una **Medida (Measure)**.

## 1. Columnas Calculadas (Tus Stats Base Pasivos)

Una Columna Calculada inyecta literalmente una nueva columna física en la memoria de tu base de datos fila por fila. Se calcula inmediatamente cuando prendes o recargas el juego, consumiendo disco duro para quedar grabada para siempre.

**Cuándo debes usarla:**
Solamente cuando vas a usar ese nuevo título para crear un **Filtro (Slicer) o las categorías de un gráfico** (como el Eje X).
*(Ej: Calcular si el país del jugador se considera "LATAM", "NA", o "EU" para poner 3 botones interactivos de filtrado en pantalla).*

**Ejemplo de DAX Columna:**
```dax
Margen de Daño Base = 
    Partidas[Daño_Causado] - Partidas[Daño_Recibido]
```
*(Power BI anota este resultado "estático" dentro del disco duro jugador por jugador de la lista).*

## 2. Las Medidas / Measures (Buffs Calculados al Vuelo)

Aquí está el poder verdadero e infinito de DAX. ¡Las **Medidas** no existen físicamente! No pesan ni un solo Gigabyte en el disco de tu PC.

![Creando una Medida en DAX](/courses-assets/pbi_dax_measure.png)

Son fórmulas como "Hechizos Latentes" que solo cobran vida, se disparan y calculan cuando arrojas esa medida dentro de un pequeño recuadro o gráfico en la pantalla. Y lo mejor: reaccionan instintivamente a todos los filtros que el usuario esté tocando.

**Cuándo debes usarlas:**
¡Para **TODO EL CÁLCULO NUMÉRICO SUMABLE!** (Winrates, Promedio de Kills, Sumatorias gigantes, Porcentajes). 

**Ejemplo de DAX Medida (Measure):**
```dax
-- Sumamos agresivamente en el aire:
WinRate_Global_% = 
    DIVIDE(
        SUM(Matchmaking[Partidas_Ganadas]),
        SUM(Matchmaking[Partidas_Totales]), 
        0 -- Este 0 al final evita errores críticos de división por cero "Anti-Crasheos"
    )
```
Si el dueño de un equipo de Esports usa tus botones para filtrar "Solo ver Torneos del 2026 en Brasil", esta medida `WinRate_Global_%` agarrará solo esa info y la dividirá **A LA VELOCIDAD DE LA LUZ** para mostrar el resultado en la cara del cliente.

### 🏆 La Regla de Oro Competitiva
- Si es para un Botón de Filtrar, el Eje X o ponerle Texto/Nombre a algo -> **USA UNA COLUMNA FISICA**.
- Si es para hacer Matemáticas brutales que la gente sumará y cambiará con filtros (Oro, Kills, Porcentajes) -> **¡CREA UNA MEDIDA EN DAX!**
