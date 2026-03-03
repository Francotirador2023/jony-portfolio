# Calidad de Datos (Data Quality)

En el mundo corporativo analítico hay un dicho muy famoso entre los ingenieros de datos anglosajones: 

> **"Garbage In, Garbage Out" (GIGO)**.

Significa sencillamente "Entra basura, sale basura". Puedes tener el mejor esquema de estrella hiper-optimizado en tu Power BI o tu máquina de SQL en Amazon, tu código y tu cerebro DAX puede ser maravilloso. Pero, si el dato puro que viene del sistema es basura, tu hermoso tablero con gráficos neón contará la peor gran mentira y llevará a tomar decisiones millonarias... que fundirán a la compañía.

## El rol Analítico frente a la calidad de Datos

Un analista de negocios en rol Junior se confía y empieza a graficar directo de la sábana de Excel.
Un analista de negocios **Senior** no lanza una sola gráfica hasta haber completado los flujos de "Data Quality Control".

### Revisión Preventiva 1: Tipos de Datos (Formatos Sucios)
Es el problema más repetido por el error humano comercial en las cajas rústicas o Excels antiguos. 
- Personas guardando sus números de teléfono en un espacio y el sistema los leyó como `Número Integro`, y las sumatorias de BI colapsan porque "suma 20 teléfonos en vez de sumar ventas".
- ¿Solución? Asegúrate de pre-limpiar esto con el martillo pesado del editor nativo `Power Query`. Pásalo forzadamente a `Tipo: TEXTO`.

### Revisión Preventiva 2: Los Duplicados Malditos
Ventas importadas dos veces de un sistema anticuado sin saberlo. El jefe ve un salto en la gráfica de 500% y todos festejan... y al final de mes se descubre el desfalco de métricas en el P&L que arrastró sus cabezas al fracaso.
- Usa en Power Query el confiable botón **Quitar Filas Duplicadas**.
- Mejor aún, en base de datos si sabes SQL, usarás comandos visuales y estadísticos (`COUNT() > 1`) por el ID unívoco transaccional para auditar al desarrollador y cantarle sus verdades. 

### Revisión Preventiva 3: Valores Atípicos (Outliers)
¿Aparece una venta por 99 Millones de dólares a Pepito de la esquina que normalmente compra 10 dólares en un sábado? Un "dedazo" histórico arruinando tu promedio mensual.
- Estos picos son fácilmente auditables con analítica rápida estadística en Excel antes del modelado, revisando las desviaciones y mínimos o máximos absolutos con `MAX()` y `MIN()` por curiosidad lógica.

Sin la limpieza minuciosa e inquisitiva tu carrera termina apenas inicie. Un Analista que no cuestiona a los datos, ¡entonces simplemente hace copy & paste!
