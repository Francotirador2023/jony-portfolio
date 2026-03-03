# Power Query: El Secreto de Excel Moderne

Hasta hace unos años, los analistas de Excel perdían la mitad del día usando `BUSCARV` manuales, copiando, pegando, y arreglando celdas mal formateadas de sistemas viejos (el típico CSV que venía con números como texto).

**Power Query** fue la respuesta de Microsoft. Es la herramienta de **ETL (Extracción, Transformación, Carga)** integrada dentro de Excel (pestaña 'Datos' -> 'Obtener Datos').

## ¿Por qué Power Query cambiará tu vida?

1. **Automatización real:** Todo lo que hagas en Power Query quedará grabado como un "paso". Si mañana recibes un archivo nuevo del jefe con ventas, simplemente lo pones en la misma carpeta, le das al botón *"Actualizar Todo"* y todas las limpiezas (cambios de texto, cálculos, uniones) se aplicaran en segundos solas.
2. **Cruza millones sin problemas:** Al no calcular celda por celda como una fórmula, puede manejar muchísima más carga.
3. **Une tablas igual que SQL:** Con el menú *"Combinar Consultas"* (`Merge Queries`), estás creando interfaces visuales de `LEFT JOINs`, `INNER JOINs`, etc. sin necesidad de escribir ni una coma de código.

## Fases de Power Query (ETL)

- **E (Extract):** Te permite conectarte directamente a URLs, carpetas enteras de Windows, archivos JSON, o motores de Bases de Datos pesados como SQL Server desde tu simple computadora de oficina sin pedir permisos locos.
- **T (Transform):** Su editor. Aquí puedes:
  - Eliminar columnas y filas que no sirvan.
  - Dividir textos ("Juan Perez" -> "Juan", "Perez").
  - Extraer años o meses de fechas locas (como "2024Enero05").
  - Transformar formato de "Texto" a "Número decimal" masivamente con un botón derecho.
- **L (Load):** Cuando le das a Cargar, te lo baja todo limpito hacia una Tabla nueva de tu Excel, Lista Blanca y 100% brillante lista para una Tabla Dinámica.

![Demostración visual del Editor Avanzado de Power Query M y Pasos Aplicados](/courses-assets/power_query_ui.png)

Si no sabes Power Query, no sabes aprovechar ni el 5% del potencial real del Excel moderno. ¡El próximo paso será Power Pivot y el Modelado!
