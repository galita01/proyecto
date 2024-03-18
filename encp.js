
let campoTexto=document.querySelector(".campo-texto");
let campoMensaje=document.querySelector(".mensaje");

let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]

function btnEncriptar(){
   
    let textoEncriptado=encriptar(campoTexto.value);
    campoMensaje.value=textoEncriptado
    campoTexto.value="";
    campoMensaje.style.backgroundImage="none"
}

function quitaAcento(sinAcento){
    let aMin=sinAcento.replace (/[áàäâ]/g,"a");
    let eMin=aMin.replace (/[éèëê]/g,"e");
    let iMin=eMin.replace (/[íìïî]/g,"i");
    let oMin=iMin.replace (/[óòöô]/g,"o");
    let uMin=oMin.replace (/[úùüû]/g,"u");
    return uMin
}

function encriptar (fraseEncriptada){
    
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
    fraseEncriptada=fraseEncriptada.toLowerCase()
    fraseEncriptada=quitaAcento(fraseEncriptada)
  
    for(let i=0; i<matrizCodigo.length; i++){
        if(fraseEncriptada.includes(matrizCodigo[i][0])){
            fraseEncriptada=fraseEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }
    }
    return fraseEncriptada
}



function btnDesencriptar(){
    let textoEncriptado=desencriptar(campoTexto.value);
    campoMensaje.value=textoEncriptado
    campoTexto.value="";
}
  
function desencriptar (fraseDesencriptada){
 
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    fraseDesencriptada=fraseDesencriptada.toLowerCase()
    
    for(let i=0; i<matrizCodigo.length; i++){
        if(fraseDesencriptada.includes(matrizCodigo[i][1])){
            fraseDesencriptada=fraseDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }
    }
    return fraseDesencriptada
}


   const $textoCopiar=document.getElementById("textoArea");
         $boton=document.getElementById("botonC");
    
         $boton.addEventListener("click", e=>{
            $textoCopiar.select();
            document.execCommand("copy");
         })
         




