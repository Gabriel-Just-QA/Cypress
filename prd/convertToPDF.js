const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function convertHtmlToPdf() {
  const reportHtmlPath = path.join(__dirname, 'cypress/reports/html/index.html');
  const pdfPath = path.join(__dirname, 'cypress/reports/pdf/test-report.pdf');

  if (fs.existsSync(reportHtmlPath)) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${reportHtmlPath}`, { waitUntil: 'networkidle0' });
    await page.pdf({ path: pdfPath, format: 'A4' });
    await browser.close();
    console.log('Relatório PDF gerado com sucesso!');
  } else {
    console.error('Relatório HTML não encontrado!');
  }
}

convertHtmlToPdf();
