import { PDFJS } from 'pdfjs-dist';
import fs from 'fs';

var data = new Uint8Array(fs.readFileSync('helloworld.pdf'));
PDFJS.getDocument(data).then(function (pdfDocument) {
  console.log('Number of pages: ' + pdfDocument.numPages);

  pdfDocument.getPage(1).then(function (page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);
    
    // Prepare canvas using PDF page dimensions.
    var canvas = document.getElementById('the-canvas');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context.
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});
