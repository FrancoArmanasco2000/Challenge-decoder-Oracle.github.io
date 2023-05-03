function encriptar(){
    let textarea = document.getElementById('write').value;
    let aux = "";
    for (let i = 0 ; i<textarea.length; i++){
        if(textarea[i]=="e"){
            aux+="enter";
        }else if(textarea[i]=="i"){
            aux+="imes";
        }else if(textarea[i]=="a"){
            aux+="ai";
        }else if(textarea[i]=="o"){
            aux+="ober";
        }else if(textarea[i]=="u"){
            aux+="ufat";
        }else if(textarea[i]=="i"){
            aux+="imes";
        }else{
            aux+=textarea[i];
        }
    }
    
    if(aux!=""){
        let ocultar = document.getElementById("waiting");
        ocultar.style.display = "none";
        document.getElementById("output").innerHTML=aux;
        document.getElementById('write').value="";
        let button = document.getElementById('copy');
        button.value='Copiar';
        document.getElementById("copy").style.display="inline";
    }
    

}


function desencriptar(){
    let textarea = document.getElementById('write').value;
    let aux = "";
    let i = 0
    while(i<textarea.length){
        if(textarea.substring(i,i+"enter".length)=="enter"){
            aux+="e";
            i+="enter".length;
        }else if(textarea.substring(i,i+"imes".length)=="imes"){
            aux+="i";
            i+="imes".length;
        }else if(textarea.substring(i,i+"ai".length)=="ai"){
            aux+="a";
            i+="ai".length;
        }else if(textarea.substring(i,i+"ober".length)=="ober"){
            aux+="o";
            i+="ober".length;
        }else if(textarea.substring(i,i+"ufat".length)=="ufat"){
            aux+="u";
            i+="ufat".length;
        }else {
            aux+=textarea[i];
            i++;
        }
    }
    if(aux!=""){
        let ocultar = document.getElementById("waiting");
        ocultar.style.display = "none";
        document.getElementById("output").innerHTML=aux;
        document.getElementById('write').value="";
        let button = document.getElementById('copy');
        button.value='Copiar';
        document.getElementById("copy").style.display="inline";
    }
    
}

function copiarTxt(){
    let text = document.getElementById('output');
    let button = document.getElementById('copy');
    navigator.clipboard.writeText(text.textContent);
    button.value='Copiado';
}

