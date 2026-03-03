# Esquema Estrella y Copo de Nieve

Hablamos antes de tener Dimensiones (contexto) interactuando con Hechos (transacciones). ¿Cómo los conectamos para que Power BI y DAX funcionen a la máxima velocidad posible matemática? Existen 2 estándares universales para armar rompecabezas de datos.

## El Rey Supremo: El Esquema en Estrella (Star Schema)

Le debe el nombre a su figura.
Si dibujas un gran cuadro en todo el centro, esa es siempre tu **Tabla de HECHOS**.
Rodeando a ese sol central, como las puntas de una estrella en 5 direcciones diferentes apuntando todas hacia el centro, están las **Tablas de DIMENSIONES**.

**Características vitales de la Estrella:**
- Tu Dimensión VENDEDOR conecta al Hecho VENTA. Tu Dimensión PRODUCTO conecta al Hecho VENTA.
- Nadie conecta entre sí. **Los vendedores no se conectan a los productos**.
- Cada dimensión interactúa filtrando únicamente a la gigantesca tabla central.
- El Esquema Estrella está **desnormalizado** para analítica. Nos importa un rábano que un dato se lea redundante en la dimensión, nos importa la velocidad y la simplicidad visual al crear tableros.

![Diseño de Esquema en Estrella en Power BI Model View](/courses-assets/pbi_model_star.png)

> [!IMPORTANTE]
> **Microsoft Power BI** está profundamente optimizado de fábrica para leer y procesar Esquemas Estrella a velocidades descaradas. ¡Arma tu modelo siempre en Estrella si puedes elegir!

## El Hermano Complicado: El Esquema Copo de Nieve (Snowflake Schema)

Imagina tu Estrella perfecta, pero te das cuenta de que la dimensión **PRODUCTOS** tiene el dato "Categoría" y luego "País de Fabricación de la Categoría", y dices "ohh mucha información, mejor despego la Categoría a una tabla propia".

Ahora el Hecho_Venta conecta al Producto. Y el Producto conecta a Categoría. Y Categoría conecta a País.
Has creado "ramificaciones" visuales que lucen lejanamente como un cristal de copo de nieve ramificándose hasta el absurdo.

**Desventajas terribles en Analítica:**
- Rompe tableros. Porque al analista principiante la matriz se le hace eterna.
- Cuando quieras filtrar la Venta usando un DAX para "Europa" que está al fondo del `Copo > Pais > Continente`, el pobre motor tendrá que arrastrar filtros cruzando 3 tablas intermedias haciendo JOINs encadenados antes de llegar al Hecho central. **Rendimiento arruinado**.

Quédate con la simpleza magistral de la Estrella si no eres un Arquitecto de Datos manejando un Data Warehouse bancario gigantesco en la nube. ¡Tu Power BI e informes DAX fluirán sin barreras!
