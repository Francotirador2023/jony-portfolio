# Guía de Despliegue - Jony Portfolio

Aquí tienes dos formas sencillas de poner tu portafolio en internet.

## Opción 1: Netlify Drop (La más rápida)
Esta opción no requiere instalar nada extra.

1.  Asegúrate de haber ejecutado `npm run build` (ya lo hicimos, así que la carpeta `dist` está lista).
2.  Entra a [app.netlify.com/drop](https://app.netlify.com/drop).
3.  Abre la carpeta de tu proyecto en el explorador de archivos:
    `C:\Users\jonyr\.gemini\antigravity\scratch\jony-portfolio`
4.  Arrastra la carpeta **`dist`** dentro del recuadro en la página de Netlify.
5.  ¡Listo! En unos segundos tendrás un link público (ej. `random-name.netlify.app`).

### ¿Cómo actualizar mi web?
Si hiciste cambios en tu código y quieres subirlos:
1.  Vuelve a ejecutar `npm.cmd run build` en tu terminal.
2.  Ve a la pestaña **"Deploys"** en tu panel de Netlify.
3.  Arrastra la carpeta `dist` nuevamente al recuadro que dice "Need to update your site?".
4.  La web se actualizará instantáneamente.

## Opción 2: Vercel (Profesional)
Si quieres usar la línea de comandos.

1.  Instala Vercel CLI globalmente (si no lo tienes):
    ```bash
    npm install -g vercel
    ```
2.  Ejecuta el comando de despliegue desde la carpeta del proyecto:
    ```bash
    vercel deploy
    ```
3.  Sigue las instrucciones en pantalla (Login con GitHub/Email, confirmar opciones por defecto).
4.  Para producción final:
    ```bash
    vercel --prod
    ```

## Opción 3: GitHub Pages
Si subes este código a un repositorio de GitHub.

1.  Sube tu código a GitHub.
2.  En Settings > Pages, selecciona la opción para desplegar desde una rama (usualmente `gh-pages` o configurando una GitHub Action para Vite).
