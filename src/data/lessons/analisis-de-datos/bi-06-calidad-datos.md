# 🛡️ Calidad de Datos (El Sistema Anti-Cheat)

Entre los programadores TOP del mundo existe una ley de oro inquebrantable llamada **GIGO**: 
> **"Garbage In, Garbage Out" (Entra basura, sale basura).**

Imagina que creas el mejor Dashboard de la historia, súper hermoso y optimizado. Pero, ¿qué pasa si el servidor del juego está lleno de Hackers o *Partidas Guardadas (Save Files)* corruptos? Tu tablero mostrará que un jugador de Bronce hizo 1 billón de daño en 1 segundo. Tu sistema creerá esa mentira, y tomarán decisiones pésimas.

Un analista de negocios **Senior** es como el sistema Anti-Cheat (Vanguard / Ricochet). Nunca lanza un gráfico hasta haber esterilizado la base de datos.

## 🕵️‍♂️ Revisión 1: Bugs de Formato (Tipos de Datos)
El error humano más común. Pasa cuando un sistema mal configurado permite meter letras donde van números.
- Ejemplo: Alguien guardó su nivel como "Nivel Cien" en lugar de `100`. Tu Dashboard intentará sumar la palabra "Cien" y la BBDD crasheará.
- **La Solución:** Usa el martillo pesado de `Power Query` para "Forzar Limpieza" de toda la columna a `Tipo: Número Entero`, o desecha las filas corruptas.

## 🕵️‍♂️ Revisión 2: Glitches de Duplicación (Duplicados)
Un lag del servidor provocó que la importación de datos metiera tu victoria de ayer **dos veces** en el historial. El Coach de tu equipo ve la gráfica e ilusionado piensa que tienen un WinRate del 100%. Mentira absoluta.
- **La Solución:** Usa el botón de **Quitar Filas Duplicadas** en Power Query, o usa un COUNT en SQL basándote en el `Match_ID` (que debe ser siempre único por partida) para cazar el error y banear ese bug.

## 🕵️‍♂️ Revisión 3: Los Hackers (Atípicos u Outliers)
¿Aparece una compra por 99 Millones de Monedas de Oro de un jugador nivel 1 que fue creada hace 5 minutos? Esto altera y rompe todos tus promedios (Averages).
- **La Solución:** Estos picos son fáciles de cazar antes de graficar. Revisa siempre los "Valores Máximos y Mínimos" con herramientas estadísticas. Si hay una barra en tu gráfica que se sale de los límites naturales del juego, tienes un problema de negocio grave.

*El verdadero Analista cuestiona a los datos como un detective. ¡No seas alguien que solo hace Copy / Paste ciegamente!*
