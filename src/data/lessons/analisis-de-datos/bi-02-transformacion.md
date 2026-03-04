# ETL: Limpieza Básica en Power Query

En la lección anterior (si todo salió bien) le diste clic a **"Transformar Datos"**.
¡Felicidades, acabas de ingresar al lado oscuro del análisis de datos: **Power Query Editor**!

> [!NOTE]
> Power Query funciona como una dimensión alterna de Power BI. Es una ventana separada donde realizamos el proceso **ETL** (Extract, Transform, Load - Extraer, Transformar e Inyectar). Aquí la regla principal es: **Lo que pasa en Power Query, no afecta a tus archivos originales.**

Vamos a imaginar que en lugar del Pokedex, fuiste contratado por Riot Games o Valve para analizar un archivo CSV de **Jugadores Reportados por Hacks** (`analisis-03-anti-cheat.csv`).

## 1. El Panel de "Pasos Aplicados" (Tu Historial Quirúrgico)

Si miras a tu derecha en Power Query, verás un panel llamado **"Pasos Aplicados"** (Applied Steps). 
¡Esta es tu máquina del tiempo!

A diferencia de Excel donde si borras algo mal tienes que hacer `Ctrl+Z` y rezar para no haberlo guardado, Power Query graba cada click que haces como si fuera una línea de código virtual. 

1. Verás que ya hay pasos creados solos como *Origen (Source)* y *Encabezados promovidos (Promoted Headers)*.
2. Si cometes un error limpiando el CSV del Anti-Cheat, **NO le des a Ctrl+Z**. Simplemente ve a "Pasos Aplicados" y dale a la pequeña "X" roja para borrar ese paso quirúrgicamente.

![Pasos Aplicados Power Query](/images/courses/bi-panel%20pasos%20aplicados-ejemplo.png)

---

## 2. Limpieza de Tramposos Nivel 1 (Filtros y Tipos de Dato)

Al cargar el archivo `analisis-03-anti-cheat.csv`, verás a usuarios sospechosos. Limpiemos la interfaz.

### A) El Tipo de Dato Correcto (El ADN de la columna)
Power BI necesita saber si una columna es "Oro" (Número) o si es el "Nombre del PJ" (Texto).
1. Arriba de la primera fila en cada columna verás un icono de **`ABC`**, un **`123`** o un **🗓️**.
2. Verifica que `Reportes_Recibidos` sea número entero (`123` o `1.2`). 
3. Verifica que `Riesgo_Ban` sea Texto (`ABC`).
*(Le das clic al icono para cambiarlo).*

### B) Banhammer (Filtrando datos inútiles)
Solo queremos analizar casos reales de riesgo Alto.
1. Ve a la columna `Riesgo_Ban`. 
2. Haz clic en la flechita hacia abajo ⬇️ y desmarca a los jugadores con riesgo "Nulo" o "Baja". 
¡Pum! Quedan limpiados del análisis futuro sin borrar el CSV original. Verás un nuevo paso en *"Pasos Aplicados"*.

![Filtros Power Query](/images/courses/bi-filtros-ejemplo.png)

---

## 3. Cerrar y Aplicar (Save State)

Una vez que limpiaste la base de datos de AFKs y Hackers, necesitas volver al mundo real (Power BI Desktop).

1. Arriba a la izquierda en Power Query, busca el disquete que con un pequeño icono cuadrado.
2. Dice **Cerrar y Aplicar (Close & Apply)**.
3. Dale clic. La ventana de Power Query desaparecerá y Power BI cargará tus datos transformados directo a su memoria (tu RAM temporal) listos para la gloria de ser graficados.

![Botón Cerrar y Aplicar](/images/courses/bi-cerrar%20y%20aplicar-ejemplo.png)

En la próxima lección, veremos el "Jefe Final" de Power Query: el temible *Merge* entre dos tablas gigantes.
