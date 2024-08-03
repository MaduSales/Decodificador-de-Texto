const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const btnCopy = document.querySelector(".btn-copy");
const bolderText = document.querySelector(".bolder-text");
const thinnerText = document.querySelector(".thinner-text");

// As "chaves" de criptografia são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function btnEncriptar(){
    let textoEncriptado = encriptador(textArea.value);
    message.value = textoEncriptado;
    textArea.value = "";
    btnCopy.style.visibility = 'visible';
    bolderText.style.visibility = 'hidden';
    thinnerText.style.visibility = 'hidden';
    message.style.backgroundImage = 'none';
}


function btnDesencriptar(){
    let textoDesencriptado = desencriptador(textArea.value);
    message.value = textoDesencriptado;
    textArea.value = "";
    btnCopy.style.visibility = 'visible';
    bolderText.style.visibility = 'hidden';
    thinnerText.style.visibility = 'hidden';
    message.style.backgroundImage = 'none';
    
}

function encriptador(stringEncriptada) {
    let matriz = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    return stringEncriptada;
}


function desencriptador(stringDesencriptada) {
    let matriz = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringDesencriptada.includes(matriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }

    return stringDesencriptada;
}

function copy() {
    message.select();
    navigator.clipboard.writeText(message.value).then(
      () => {
        console.log("Texto copiado para a área de transferência");
      },
      () => {
        console.log("Erro ao copiar para a àrea de transferência");
      },
    );
  }
  