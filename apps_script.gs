/**
 * Google Apps Script — Receptor de resultados del Test Diagnóstico de Redes
 *
 * INSTRUCCIONES DE INSTALACIÓN (una sola vez):
 * 1. Creá una hoja de cálculo nueva en Google Sheets (sheets.new).
 * 2. Extensiones → Apps Script.
 * 3. Borrá el contenido de ejemplo y pegá TODO este archivo.
 * 4. Guardá el proyecto (ícono de disquete).
 * 5. Arriba a la derecha, botón "Implementar" → "Nueva implementación".
 * 6. Tipo: "Aplicación web".
 * 7. "Ejecutar como": Yo (tu cuenta).
 * 8. "Quién tiene acceso": Cualquier usuario.
 * 9. Implementar → Autorizar permisos con tu cuenta de Google (te va a pedir
 *    confirmar accesos, es normal, es tu propio script).
 * 10. Copiá la URL que te da ("URL de la aplicación web") — termina en /exec.
 * 11. Pegá esa URL en el archivo index.html del test, en la constante SHEET_ENDPOINT.
 *
 * Cada vez que un alumno termina el test, se agrega una fila nueva a esta hoja,
 * SIN nombre ni ningún dato identificable — solo fecha/hora, puntaje total,
 * y aciertos por unidad.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const data = JSON.parse(e.postData.contents);

  // Si es la primera respuesta, escribe los encabezados
  if (sheet.getLastRow() === 0) {
    const headers = Object.keys(data);
    sheet.appendRow(headers);
  }

  // Asegura que las columnas coincidan con los encabezados existentes
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const row = headers.map(h => (data[h] !== undefined ? data[h] : ""));

  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Función opcional para probar manualmente desde el editor de Apps Script
function testDoPost() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        score_total: 10,
        total_preguntas: 15,
        unidad_01_correctas: 2,
        unidad_01_total: 2
      })
    }
  };
  doPost(fakeEvent);
}
