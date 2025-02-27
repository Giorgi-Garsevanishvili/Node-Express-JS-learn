const resultElem = document.querySelector('.result');

function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
  resultElem.innerHTML= `Code matched = <a href="${decodedText}">Link</a>`

  if (resultElem.innerHTML.includes(decodedText)){
   html5QrcodeScanner.stop();
  }

}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 60, qrbox: {width: 250, height: 250} },
  /* verbose= */ false);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);

