# Inteligencia de Tiempo (Time Intelligence)

¿Alguna vez te ha pedido tu gerente financiero ver: *"El margen de cierre de este Mes Comparativamente vs el Mismo exacto Mes pero del Año Anterior"*?

Hacer eso en SQL puro es horrible con `LEFT JOINs` locos entre fechas. En DAX, esto apenas toma dos renglones gracias a la familia mágica de funciones de **Time Intelligence**.

## El Requisito de Oro: Tu Dimensión Calendario
Las funciones de inteligencia de tiempo en Power BI fracasarán rotundamente si tus fechas están repartidas o escondidas en la enorme tabla de Hechos de Ventas. 

**Deberás siempre, SIEMPRE, tener una única Tabla DIMENSIÓN exclusiva que se llame `Calendario`**, que sea un catálogo ininterrumpido de todos los días de historia de tu empresa que vincule de ida y vuelta a todos tus Tableros en el Modelo de Estrella maestro nativo.

## Funciones Totales a la Fecha (YTD, QTD, MTD)

Calculan el acumulado sumando desde el día 1 del período hasta la fecha analizada de filtro vivo por los gerentes.

### Year-To-Date (Total Acumulado del Año Actual)
Suma desde el 1 de Enero hasta la barra actual de los gráficos filtrados interactivamente. Se reinicia solita el próximo 1 de Enero infinito.

```dax
Ventas_YTD = TOTALYTD([Tus_Ventas_Arrojadas_en_Medida_DAX], Calendario[Fecha])
```

## Comparaciones Históricas (Al Pasado)

### Mismo Periodo pero un Año Atrás (Same Period Last Year)

Calculadora histórica inmediata que busca retroceder "un salto en el calendario". 
Imagina que filtramos Marzo 2024. DAX agarra y automáticamente calcula todo ocultamente asumiendo que el universo es Marzo de 2023.

```dax
Ventas_Anio_Anterior = 
    CALCULATE(
        [Tus_Ventas_Arrojadas_en_Medida_DAX],
        SAMEPERIODLASTYEAR(Calendario[Fecha])
    )
```

## Crecimiento Porcentual (YoY - Year over Year Growth)

Ahora que tienes la Medida del año actual y la Medida del año pasado, puedes hacer el Santo Grial.
*(Por ser DAX mágico, si el cliente hace clic en un producto 'Pantalones', esta madre arrojará el YoY de sólo 'Pantalones' sin inmutarse de todo el cálculo).*

```dax
Crecimiento_Anual_% = 
    DIVIDE(
        [Ventas_YTD] - [Ventas_Anio_Anterior],
        [Ventas_Anio_Anterior],
        0
    )
```

¡Has aprendido cómo piensa la magia histórica gerencial financiera sin morir de sufrimiento de macro Excels!
