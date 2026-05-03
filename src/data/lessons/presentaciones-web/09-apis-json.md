# Consumiendo datos desde APIs (JSON)

En la web, los datos raramente viven en archivos locales. La forma estándar de obtener datos dinámicos es mediante APIs (Application Programming Interfaces) en formato JSON.

## ¿Qué es JSON?
JavaScript Object Notation. Es el lenguaje universal para mover datos entre un servidor (Python, SQL) y el navegador.

```json
{
  "id": 1,
  "producto": "Laptop",
  "precio": 1200,
  "stock": true
}
```

## El método `fetch`
Es la herramienta nativa de JavaScript para pedir datos.

```javascript
fetch('https://api.miempresa.com/ventas')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dibujarGrafico(data);
  });
```

---

## Mejores Prácticas
1. **Manejo de errores:** ¿Qué pasa si la API no responde? Siempre usa `.catch()`.
2. **Loading States:** Muestra un spinner mientras los datos cargan para mejorar la experiencia del usuario (UX).
3. **Seguridad:** Nunca pongas tus claves de API directamente en el código de front-end (usa variables de entorno).
