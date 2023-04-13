// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
 

//* Obtener los elementos
// const texto = document.querySelector('.caja');
// const btnEncriptar = document.querySelector('.btn-encriptar')
// const btnDesencriptar = document.querySelector('.btn-desencriptar')



function encriptar() {
  const texto = document.querySelector('.caja').value.toLowerCase(); // gael
  let aside = document.querySelector('.aside');
  let textoEncriptado = texto.replace(/e/g, "enter");
  textoEncriptado = textoEncriptado.replace(/i/g, "imes");
  textoEncriptado = textoEncriptado.replace(/a/g, "ai"); //gaiel
  textoEncriptado = textoEncriptado.replace(/o/g, "ober");
  textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

  console.log(textoEncriptado);
  aside.innerHTML = `
  <textarea rows="10" class="mensaje-encriptado" readonly>${textoEncriptado}</textarea>
  `
}

function desencriptar() {
  const texto = document.querySelector('.caja').value.toLowerCase(); // gael
  let aside = document.querySelector('.aside');
  let textoEncriptado = texto.replace(/enter/g, "e");
  textoEncriptado = textoEncriptado.replace(/imes/g, "i");
  textoEncriptado = textoEncriptado.replace(/ai/g, "a"); //gaiel
  textoEncriptado = textoEncriptado.replace(/ober/g, "o");
  textoEncriptado = textoEncriptado.replace(/ufat/g, "u");

  console.log(textoEncriptado);
  aside.innerHTML = `
    <textarea rows="10" class="mensaje-encriptado" readonly>${textoEncriptado}</textarea>
    `
}

function copy() {
  let copyText = document.querySelector(".mensaje-encriptado");
  copyText.select();
  document.execCommand("copy");
}

