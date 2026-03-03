# DAX: Columnas Calculadas vs Medidas

DAX (Data Analysis Expressions) es el lenguaje de fórmulas de Power BI. Su gran truco es que no opera con "celdas" abstractas cruzadas (A4, B7), sino que ópera por nombre absoluto de "Columnas y Tablas de modelo estructural".

El primer gran tropiezo de cualquier analista de Excel que entra a Power BI es confundir cuándo Crear una **Columna Calculada** y cuándo Crear una **Medida**.

## 1. Columnas Calculadas (La Herencia de Excel)

Una columna calculada expande tu base de datos agregando literalmente una nueva columna fila por fila. Se ejecuta tan pronto como recargas los datos (`Refresh`) en tu tablero, usando la CPU velozmente y comiéndose la memoria RAM guardando todos los literales pesados uno al lado de otro.

**Cuándo debes usarla:**
Cuando necesites **Segmentar o Filtrar** (Slicers) en una visualización usando ese nuevo dato como categoría en un eje o filtro.
*(Ej: Calcular la Edad restando la Fecha de Nacimiento en la tabla Clientes para hacer un filtro por "Millennials vs Gen-Z").*

**Ejemplo DAX Columna:**
```dax
Margen Bruto Columna = 
    Ventas[Precio_Venta] - Ventas[Costo_Producto]
```
*Se calcula estática para la Fila 1, luego Fila 2, Fila 3, etc.*

## 2. Medidas (La Magia Inmaterial de DAX)

Las **Medidas (Measures)** son alucinantes. 
¡No existen visualmente en la base de datos tabular y no ocupan memoria de almacenamiento estático permanente!

![Editor de Fórmulas DAX creando una Medida de Margen](/courses-assets/pbi_dax_measure.png)

Son **fórmulas lógicas dinámicas** que solo cobran vida y se auto-calculan en tiempo real cuando las sacas de la lista y las arrojas de cabeza dentro de una Visualización o Tarjeta Gráfica nativa, dejándose llevar por los Filtros que elijan el cliente en pantalla. 

**Cuándo debes usarlas:**
Prácticamente para **TODO EL CÁLCULO NUMÉRICO SUMABLE** del Tablero (Ventas anuales MTD, Porcentajes de Margen, Conteo distinto de Vendedores que ganaron más, Porcentaje contra meta, etc.).

**Ejemplo DAX Medida:**
```dax
-- Sumamos agresivamente en el aire todo
Margen Bruto Total % = 
    DIVIDE(
        SUM(Ventas[Precio_Venta]) - SUM(Ventas[Costo_Producto]),
        SUM(Ventas[Precio_Venta]), 
        0
    )

-- Resultado:
-- 52.4% (Margen General de Ventas calculado al vuelo)
```
Si el usuario filtra la página a "Sólo ver a España", la medida de Arriba milésimamente rápido hace las asquerosas sumas filtrando y lanza la división al Vuelo para la pantalla arrojando un grandioso visual estadístico.

### La Regla de Oro Comercial
- Si es para el Eje, Etiqueta, o Segmentador -> Haz una Columna.
- Si es para contar billetes, porcentajes, márgenes o unidades en la cajita numérica... ¡Crea obligadamente la Medida en DAX y olvídate de las Columnas de la prehistoria!
