# 🧙‍♂️ Filtros y el Modo Dios en DAX: `CALCULATE()`

Llegamos al jefe final. El concepto que separa a los Noobs de los Desarrolladores Senior en Power BI: *"El Contexto de Evaluación"*. ¿De qué trata esta brujería?

Imagina un Dashboard de *Valorant*. Tienes una barra gigante que muestra que se han hecho 1 Millón de Kills con tu arma favorita (Vandal).
De pronto, en el menú (Slicer), el Dueño del Equipo hace clic en el filtro `[x] Jugador: TenZ`. Inmediatamente la gráfica baja y dice "5,000 Kills".

Esa magia se llama **Contexto de Filtro.** *(Filter Context).*

Son TODAS Las fuerzas invisibles que empujan tu gráfica para reducir la enorme base de datos y mostrar **sólamente** el pedacito que el usuario seleccionó en ese microsegundo.

## ⚡ El Modo Dios: La Función `CALCULATE()`

Pero, ¿qué pasa si el Coach de tu equipo te pide: *"Quiero que al lado del KDA de TenZ, SIEMPRE me muestres las Kills Totales Máximas del Récord Mundial, para que él vea que aún le falta mucho"*?

Si usas una fórmula normal, cuando cliques a "TenZ", Power BI la filtrará y romperá. Tienes que **IGNORAR los botones de filtro**. Activar el Modo Dios.

**`CALCULATE()` al rescate**
Es el único hechizo de todo DAX diseñado con permisos de "Super Administrador" para inyectar, romper o bloquear los filtros de tu pantalla.

### Rompiendo la Matrix (Ignorando Filtros con `ALL`)

Si metemos `ALL()` dentro de nuestro `CALCULATE`, le diremos a DAX: *"Destruye temporalmente cualquier filtro que el usuario haya tocado sobre los Jugadores"*.

```dax
Kills_Globales_Inmunes_A_Filtros =
    CALCULATE(
        [Kills_Totales_Normales],
        ALL(Jugadores[GamerTag]) -- El Escudo Protector
    )
```

Si le das clic a "TenZ" en tu menú de la pantalla, tu tarjeta de *Kills Inmunes* se reirá en voz bajita y se saltará las reglas, arrojando orgullosamente el billón de muertes de todo el servidor global, mientras que el resto de tu pantalla sí se filtra obedientemente para TenZ.

¡Felicidades, acabas de hackear Power BI a tu favor! Con este poder, puedes programar comparaciones increíbles en tus dashboards.
