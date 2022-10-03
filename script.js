const inputText = document.querySelector(".input-text")
const mensaje =document.querySelector(".message")

//La letra "e" es convertida en "enter"
//La letra "i" es convertida en "imes"
//La letra "a" es convertida en "ai"
//La letra "o" es convertida en "ober"
//La letra "u" es convertida en "ufat"

function btnEncriptar(){
    const textoEncriptado = crypt(inputText.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputText.value = "" 
}

function crypt(stringCrypted){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o","ober"],["u","ufat"]];
    stringCrypted = stringCrypted.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++){
        if(stringCrypted.includes(matrizCodigo[i][0])){
            stringCrypted = stringCrypted.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringCrypted;
}

function btnDesencriptar(){
    const textoEncriptado = decrypt(inputText.value)
    mensaje.value = textoEncriptado;
    inputText.value = "" 
}

function decrypt(stringDecrypted){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o","ober"],["u","ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++){
        if(stringDecrypted.includes(matrizCodigo[i][1])){
            stringDecrypted = stringDecrypted.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDecrypted;
}


function copiar (){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value=""
    alert("Texto copiado al portapapeles")
}