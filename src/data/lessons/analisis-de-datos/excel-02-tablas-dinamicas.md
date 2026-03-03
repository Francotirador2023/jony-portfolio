# Tablas Dinámicas y Segmentación de Datos

Si escribir fórmulas celda por celda es trabajar "duro", usar Tablas Dinámicas (Pivot Tables) es trabajar "inteligente". Son, sin discusión, la herramienta de resumen más poderosa nativa de Excel.

## ¿Qué es una Tabla Dinámica?

Imagina un reporte de 50,000 filas de Ventas (diferentes fechas, cientos de tiendas, miles de productos). ¿Cómo le dices a tu jefe "cuánto se vendió en la región Norte durante el mes de Marzo"?

Hacer fórmulas `SUMAR.SI.CONJUNTO` tomaría minutos de escribir sintaxis compleja y podría fallar si borras algo sin querer.

Con una Tabla Dinámica, simplemente **arrastras y sueltas**:
1. Abres la pestaña **Insertar > Tabla Dinámica**.
2. Arrastras el campo **Tienda** a la caja de *Filas* (y la inmensa lista se resume en nombres únicos de Tiendas).
3. Arrastras el campo **Monto** a la caja de *Valores* (Excel suma en 1 milisegundo todo automáticamente).

![Demostración de un tablero avanzado de Tabla Dinámica (Pivot Tables)](/courses-assets/excel_ui_pivot.png)

## Anatomía de una Pivot Table

Esencialmente se divide en cuatro grandes bloques (cuadrantes de configuración):

- **Filtros (Filters):** Para poner "Meses" u "On/Off". Aplica a toda la tabla.
- **Columnas (Columns):** Lo que arrastres aquí, se leerá horizontalmente.
- **Filas (Rows):** Lo que arrastres aquí se apilará verticalmente.
- **Valores (Values):** El corazón de la tabla. Por defecto hace *Suma* si pones números, y hace *Recuento (Count)* si arrastras letras. Puedes configurarlo para mostrar promedios, porcentajes del total general, o máximos.

## Segmentación de Datos (Slicers)

Una tabla puede volverse un *Dashboard* (Tablero de Control) simplemente agregando Slicers.

- Ve a la pestaña **Análisis de tabla dinámica** y da clic en **Insertar Segmentación de Datos**.
- Se crearán botones bonitos e interactivos. 

Si haces clic en el botón "Norte", **toda** la tabla dinámica se actualizará frente a tus ojos en tiempo real. Esto te permite enviarle el Excel a tu jefe y que él mismo dé los clics, sin ensuciar la data original ni borrar tus fórmulas.
