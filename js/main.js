const puppeteer = require('puppeteer'); // Importa Puppeteer

(async () => { // Función async autoejecutable

  const browser = await puppeteer.launch(); // Abre Chrome

  const page = await browser.newPage(); // Nueva pestaña

  // Carga tu HTML local
await page.goto('file:///Users/mauricioarango/documents/programmer/proyectos/curriculum_vitae/index.html', {
    waitUntil: 'networkidle0' // Espera a que todo cargue
});

// Genera el PDF
await page.pdf({
    path: 'Hoja_de_Vida_Mauricio_Arango.pdf',
    format: 'A4',
    printBackground: true
});

  await browser.close(); // Cierra Chrome

})();
