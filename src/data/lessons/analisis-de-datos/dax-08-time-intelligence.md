# ⏳ Viajes en el Tiempo (Time Intelligence)

¿Alguna vez te han pedido algo rudo como: *"Muéstrame exactamente cuánto KDA tenía este equipo de Esports el año pasado comparado matemáticamente con este mismo mes del año actual"*?

Si quisieras hacer esto en bases de datos viejas o en programación cruda, sufrirías horas con cálculos horribles para retrasar días y cruzar variables. DAX te hace todo en **dos miserables líneas** usando sus funciones mágicas de **Time Intelligence**.

## ⏰ El Requisito de Oro: Tu Reloj del Servidor

Las funciones de viajes en el tiempo de Power BI fracasarán y causarán pantallas de error azules si intentas usarlas con las fechas tiradas en tu tabla de partidas.

Debes **SIEMPRE** crear una Dimensión exclusiva llamada `Calendario` (Date Table). Es un listado infinito e ininterrumpido (sin saltarse un solo día) desde que nació tu empresa hasta el futuro, y debe estar conectada como parte de tu genial Hub de Misiones (Esquema en Estrella). 

## 🔋 Buffs de Acumulación (YTD - Year-To-Date)

Los directivos no quieren ver el mes suelto, quieren ver los **Puntos Acumulados de la Temporada** (Desde el 1 de Enero hasta tu fecha actual).

```dax
-- Suma todas las kills arrastrando la bola de nieve desde enero hasta hoy
Kills_Acumuladas_YTD = TOTALYTD([Tus_Kills_De_La_Medida_DAX], Calendario[Fecha])
```
*(Esta fórmula súper inteligente sabe que al llegar cada 31 de diciembre a la medianoche, se debe resetear a Cero para la nueva Temporada).*

## ⏪ Viajes al Pasado (Same Period Last Year)

Es tu máquina del tiempo. Te permite clonar tus métricas actuales, pero forzándolas a mostrarte cuánto eran un "salto de calendario" entero atrás.
Si tu Dashboard está filtrando "Abril 2026", la fórmula ocultamente calculará todo con "Abril 2025".

```dax
-- Copia de tus datos del pasado para ponerlos al fin hoy en la misma gráfica
Ventas_Oro_Temporada_Pasada = 
    CALCULATE(
        [Tus_Ventas_De_Oro_Actuales],
        SAMEPERIODLASTYEAR(Calendario[Fecha])
    )
```

## 📈 Crecimiento (YoY - Year over Year Growth)

Ahora que lograste invocar al "Yo del Presente" y al "Yo del Pasado" en la base de datos... puedes crear el número que todo dueño (de empresa o de E-sports) quiere ver: ¿Cuánto porcentaje hemos mejorado (o empeorado)?

```dax
Crecimiento_Anual_% = 
    DIVIDE(
        [Ventas_YTD] - [Ventas_Oro_Temporada_Pasada],  -- Crecimiento Crudo
        [Ventas_Oro_Temporada_Pasada],                 -- Entre mi "Yo del Pasado"
        0
    )
```
Como Power BI funciona con medidas DAX, si en tu Dashboard tocas el rol de "Soportes", **toda esta maldita magia matemática** se actualizará al instante arrojando el Crecimiento Anual EXCLUSIVAMENTE de los roles de Soporte. 

¡Ahí radica el por qué las empresas pagan oro puro por un analista que domina DAX!
