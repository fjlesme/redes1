# Test Diagnóstico de Redes

Test interactivo de opción múltiple para evaluar el nivel de conocimiento previo de los alumnos sobre fundamentos de redes de computadoras, antes de iniciar el curso.

## Ver el test en vivo

👉 **[https://fjlesme.github.io/redes1/](https://fjlesme.github.io/redes1/)**

## ¿Qué contiene?

- 15 preguntas de opción múltiple, distribuidas en las 7 unidades del programa:
  1. Concepto de Redes
  2. Tipos de Redes
  3. Dispositivos de Redes
  4. Redes Cableadas
  5. Estructura y Diseño de Redes
  6. Redes Inalámbricas
  7. Seguridad en Redes
- Corrección automática al finalizar, con detalle de respuestas correctas/incorrectas.
- Puntaje final y nivel estimado (inicial / básico / intermedio-avanzado).
- Desglose de aciertos por unidad, para identificar en qué temas los alumnos necesitan más refuerzo.

## Cómo usarlo

No requiere instalación ni servidor. Es un único archivo HTML autocontenido:

1. Compartí el link del sitio con tus alumnos (por ejemplo, en un aula virtual o grupo de la clase).
2. Cada alumno responde las 15 preguntas desde su navegador (celular, tablet o computadora).
3. Al finalizar, ve su propio resultado en pantalla.

Los resultados se envían de forma **totalmente anónima** a una hoja de Google configurada por el docente — no se pide ni se guarda nombre, email, ni ningún dato identificable de los alumnos. Solo se guarda: fecha/hora, puntaje total y aciertos por unidad.

## Cómo configurar la recolección de resultados (Google Sheets)

Este paso se hace **una sola vez**, antes de compartir el link con los alumnos.

1. Creá una hoja de cálculo nueva en [sheets.new](https://sheets.new).
2. Andá a **Extensiones → Apps Script**.
3. Borrá el contenido de ejemplo y pegá el contenido del archivo [`apps_script.gs`](./apps_script.gs) de este repo.
4. Guardá el proyecto.
5. Arriba a la derecha: **Implementar → Nueva implementación**.
6. Tipo: **Aplicación web**.
7. "Ejecutar como": **Yo** (tu cuenta).
8. "Quién tiene acceso": **Cualquier usuario**.
9. **Implementar** → autorizá los permisos con tu cuenta de Google (te va a pedir confirmar accesos, es normal, es tu propio script).
10. Copiá la URL que te da ("URL de la aplicación web"), termina en `/exec`.
11. Abrí el archivo `index.html`, buscá la línea:
    ```js
    const SHEET_ENDPOINT = "PEGAR_URL_AQUI";
    ```
    y reemplazá `"PEGAR_URL_AQUI"` por la URL que copiaste.
12. Subí el `index.html` actualizado a tu repositorio de GitHub (reemplazando el anterior).

A partir de ese momento, cada vez que un alumno termine el test, se agrega una fila nueva en tu hoja de cálculo con su resultado, de forma anónima.

> ⚠️ Mientras `SHEET_ENDPOINT` diga `"PEGAR_URL_AQUI"`, el test funciona con normalidad pero **no envía nada a ningún lado** — los resultados solo se muestran en pantalla al alumno.

## Estructura del repositorio

```
├── index.html      # Test diagnóstico completo (HTML + CSS + JS en un solo archivo)
├── apps_script.gs  # Código para pegar en Google Apps Script (recibe los resultados)
└── README.md       # Este archivo
```

## Tecnología

HTML, CSS y JavaScript puro (sin frameworks ni dependencias externas), por lo que es compatible con GitHub Pages y cualquier hosting estático.
