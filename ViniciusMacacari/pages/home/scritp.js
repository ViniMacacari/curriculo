// Baixar pdf

let button = document.getElementById("curriculo-download");
button.addEventListener("click", function() {
  downloadPDF()
})

function downloadPDF() {
    let url = "../../files/pdf/Vinicius Macacari - CV.pdf";
    let link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = 'arquivo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  //Não funciona devido a politica de alguns navegadores, tem que ter um servidor, em breve verificar
// function downloadPDF() {
//   let url = "../../files/pdf/Vinicius Macacari - CV.pdf";
//   fetch(url)
//     .then(response => response.blob())
//     .then(blob => {
//       let link = document.createElement('a');
//       link.href = window.URL.createObjectURL(blob);
//       link.download = 'download.pdf';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     });
// }
  //Não funciona devido a politica de alguns navegadores, tem que ter um servidor, em breve verificar