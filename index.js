import { PDFJS } from 'pdfjs-dist';
import fs from 'fs';

var data = new Uint8Array(fs.readFileSync('helloworld.pdf'));


var container = document.getElementById('viewerContainer');

// (Optionally) enable hyperlinks within PDF files.
//pdfLinkService = new PDFLinkService();

console.log("viewer", PDFViewer);
pdfViewer = new PDFJS.PDFViewer({
  container: container,
  //linkService: pdfLinkService,
});
//pdfLinkService.setViewer(pdfViewer);

container.addEventListener('pagesinit', function () {
  // We can use pdfViewer now, e.g. let's change default scale.
  pdfViewer.currentScaleValue = 'page-width';
});

// Loading document.
PDFJS.getDocument(data).then(function (pdfDocument) {
  // Document loaded, specifying document for the viewer and
  // the (optional) linkService.
  pdfViewer.setDocument(pdfDocument);

  //pdfLinkService.setDocument(pdfDocument, null);
});
