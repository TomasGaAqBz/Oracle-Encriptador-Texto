const textEncriptar = document.querySelector(".input-text");
const textDesencriptar = document.querySelector(".input-text-area");
const desaparecerMuñeco = document.querySelector(".muñeco");
const contenedorNoecnotrado = document.querySelector(".caja-texto-noencontrado");
const parrafo = document.querySelector(".parrafo")
const resultado =document.querySelector(".parrafo-resultado")

//botones
function botonEncriptar(){
    const textEncriptado = encriptar(textEncriptar.value);
    resultado.textContent = textEncriptado;
    ocultar();
}
function botonDesencriptar(){
    const textDescencriptado = desencriptar(textEncriptar.value)
    resultado.textContent= textDescencriptado;
}


//funciones para los botones
function encriptar(stringParaEcriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u", "ufat"]];
    stringParaEcriptar.value =stringParaEcriptar.toLowerCase;
    for(let i=0; i<matrizCodigo.length;i++){

        if(stringParaEcriptar.includes(matrizCodigo[i][0])){
            stringParaEcriptar = stringParaEcriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringParaEcriptar;
}
function desencriptar(stringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat", "u"]];
    stringParaDesencriptar.value =stringParaDesencriptar.toLowerCase;
    for(let i=0; i<matrizCodigo.length;i++){

        if(stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringParaDesencriptar;
}
function copiarTexto(){
    textEncriptar.value = resultado.textContent;
}
// Aparecer , Desaparecer Elementos

function ocultar(){
    desaparecerMuñeco.classList.add("esconder");
    contenedorNoecnotrado.classList.add("esconder");
    parrafo.classList.add("esconder");
}