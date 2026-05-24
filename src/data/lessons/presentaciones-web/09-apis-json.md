# Consumiendo Datos (APIs y JSON)

Hasta el momento, hemos escrito los datos de nuestros gráficos directamente en nuestro código de JavaScript (lo que se conoce técnicamente como datos *hardcoded*). Pero en la vida real, los datos cambian constantemente. Las ventas suben, las métricas operativas se actualizan cada segundo y nuestro dashboard debe reflejar esos cambios automáticamente.

Para lograr esto, aprenderemos a cargar datos externos desde internet o archivos locales utilizando **JSON** y la función **fetch** de JavaScript.

---

## 1. ¿Qué es JSON?

**JSON** significa *JavaScript Object Notation* (Notación de Objetos de JavaScript). Es el formato estándar de texto que utilizan casi todos los sistemas informáticos y servidores del mundo para enviarse información a través de internet de manera ordenada.

Se lee muy fácil porque utiliza llaves `{}` para definir objetos y corchetes `[]` para listas. Los datos se organizan en parejas de `"clave": valor`:

```json
{
    "mes": "Mayo",
    "ventas": 54230,
    "eficiencia": 94.8,
    "sucursales": ["Norte", "Sur", "Centro"]
}
```

Para un gráfico, solemos recibir una lista de objetos:
```json
[
    { "dia": "Lunes", "visitas": 120 },
    { "dia": "Martes", "visitas": 150 },
    { "dia": "Miercoles", "visitas": 180 }
]
```

---

## 2. ¿Qué es una API?

Una **API** (Interfaz de Programación de Aplicaciones) es como el mesero de un restaurante. Tú (el navegador web) le pides información del menú (por ejemplo, "dame las ventas de hoy"), el mesero (la API) va a la cocina (la base de datos de la empresa) y te trae un plato con los datos listos en formato **JSON**.

---

## 3. ¿Cómo Cargar Datos en JavaScript con Fetch?

Para hacer peticiones a una API en JavaScript moderno, utilizamos la función nativa **`fetch()`**. 

Como el servidor puede tardar unos milisegundos en responder, JavaScript maneja este proceso de forma "asíncrona" (en segundo plano) para no congelar la pantalla. Usamos `async` y `await` para decirle al navegador: *"espera a que terminen de llegar los datos antes de continuar"*.

Aquí tienes la plantilla estándar para cargar datos:

```javascript
async function obtenerDatos() {
    try {
        // 1. Hacemos la petición a la dirección URL de la API
        const respuesta = await fetch("https://api.miempresa.com/ventas");
        
        // 2. Convertimos la respuesta de texto a un objeto JSON de JavaScript
        const datos = await respuesta.json();
        
        // 3. ¡Listo! Ya podemos usar los datos para actualizar nuestro gráfico
        console.log(datos);
        
    } catch (error) {
        console.error("Hubo un error al cargar los datos:", error);
    }
}

// Ejecutamos la función
obtenerDatos();
```

---

## Integrando Fetch con tus Gráficos

Una vez que obtienes los datos JSON desde internet, puedes extraer las variables usando ciclos o mapas sencillos para alimentar tu gráfico de Chart.js o Plotly.js de manera dinámica:

```javascript
// Imagina que 'datos' es: [{ "mes": "Ene", "ventas": 100 }, { "mes": "Feb", "ventas": 200 }]

// Extraemos los nombres de los meses para el Eje X
const etiquetas = datos.map(item => item.mes); // Resultado: ['Ene', 'Feb']

// Extraemos los valores de las ventas para las alturas de las barras
const valores = datos.map(item => item.ventas); // Resultado: [100, 200]

// Actualizamos los datos de nuestro gráfico y lo redibujamos
miGrafico.data.labels = etiquetas;
miGrafico.data.datasets[0].data = valores;
miGrafico.update(); // Método mágico de Chart.js para refrescar la pantalla con animaciones
```

---

## 🎯 Tu Reto Práctico

1. Crea un archivo de texto en la misma carpeta que tu `index.html` llamado `datos.json`.
2. Escribe el siguiente contenido dentro de `datos.json`:
   ```json
   [
       { "mes": "Lunes", "ventas": 45 },
       { "mes": "Martes", "ventas": 60 },
       { "mes": "Miercoles", "ventas": 85 }
   ]
   ```
3. En tu código de JavaScript de tu archivo HTML, escribe una función `fetch()` que apunte a `"datos.json"` de manera local:
   ```javascript
   fetch("datos.json")
       .then(response => response.json())
       .then(datos => {
           console.log("¡Datos locales cargados con éxito!", datos);
       });
   ```
4. Abre la consola de desarrollador del navegador (haciendo clic derecho en la página, luego en "Inspeccionar" y ve a la pestaña "Consola"). Verás la lista de datos cargada automáticamente desde tu archivo JSON. ¡Has conectado tu web a datos dinámicos!
