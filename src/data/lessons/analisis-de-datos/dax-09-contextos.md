# Filtros y el Mítico Contexto de Evaluación `CALCULATE()`

Llegamos al concepto que separa a los simples aficionados de los Másteres Arquitectos en Power BI. 
*"El Contexto de Evaluación"*. ¿A qué nos referimos?

Cuando tu gerente ve el Reporte de Ganancias, y en el lienzo principal donde se agrupan docenas de barras con montos por Producto hay un gran Segmentador/Buscador (Slicer) llamado "País", el momento en el que él tilda "[x] España", la barra que decía $1 Millón de `Pantalones` muta mágica y repentinamente diciendo $50,000 euros. 

Ese es el **Contexto de Filtro.** *(Filter Context).*

Son TODAS Las fuerzas mágicas en cadena que rodean visualmente el reporte, reduciendo a la tabla enorme subyacente hasta dejar nomas la filita de "España | Pantalón | 2024", solo para aplicar la Medida `SUM()` allí rapidísmo.

## El Dios de DAX: La Función `CALCULATE()`

¿Qué pasa si el gerente te pide: *"En toda circunstancia ponme una tarjeta estática global y muéstrame TODO LO ARROJADO DEL SISTEMA SIEMPRE TOTAL, no importa qué País cliquemos yo necesito el total para compararme de asco o no"*?

Tienes que ignorar los botones o las reducciones invisibles que te manda el Contexto de Filtro de Power BI y DAX.

**`CALCULATE()` a tu rescate**
Es la única función nativa de DAX con esteroides diseñada explícitamente y expresamente para modificar, inyectar o bloquear los filtros estelares.

```dax
-- Función con 3 ingredientes en CALCULATE
-- 1. Expresión matemática.
-- 2, 3..n. Comandos Modificadores Estelares DAX (Rompen / Agregan Filtros)
```

**Bloqueando TODA la Dimensión de Paises (ALL)**

Con `ALL()` dentro de `CALCULATE`, quitamos temporalmente en el interior del cálculo de DAX este filtro molesto arrojando el universo entero de Paises original subyacente de la fuente nativa SQL... y el cálculo sale disparado en total.

```dax
Ventas_Globales_Nulas_A_Filtros_Locales =
    CALCULATE(
        [Ventas_Totales_Generales],
        ALL(Geografia[Pais])
    )
```

Si le das clic al país "Italia" en el Slicer, tu tarjeta global `Ventas_Totales_Globales` reirá internamente en voz bajita mostrando estrepitosamente sus $5M totales ignorando la bandera Verde Blanco y Roja. 

Y de este modo se inician maravillas y pesadillas inexplorables (¡y divertidas!) de arquitectura BI pura.
