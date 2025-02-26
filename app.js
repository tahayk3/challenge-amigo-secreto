let arrayAmigos = []

function agregarAmigo(){
    const nombreAmigo = document.getElementById('amigo').value;
    if(!nombreAmigo){
        alert("Por favor, inserte un nombre");
    }
    else{
        arrayAmigos.push(nombreAmigo);
        document.getElementById('amigo').value = "";
        listaAmigos();
    }
}

function listaAmigos(){
    const listaVisual = document.getElementById("listaAmigos");
    let item = "";

    console.log(listaVisual);
    listaVisual.innerHTML = "";
    
    for(let x = 0; x < arrayAmigos.length; x++){
        item = document.createElement('li');
        item.innerHTML = arrayAmigos[x];
        listaVisual.appendChild(item);
    }
}

function generarNumeroAleatorio(rango){
    let resultadoNumero = Math.floor(Math.random()*rango);
    return resultadoNumero;
}

function sortearAmigo(){
    let numAleatorio = "";
    let amigoSeleccionado = "";
    let resultadoAmigoVisual = "";
    if(arrayAmigos.length > 1){
        numAleatorio = generarNumeroAleatorio(parseInt(arrayAmigos.length));
        amigoSeleccionado = arrayAmigos[numAleatorio];
        resultadoAmigoVisual = document.getElementById('resultado');

        resultadoAmigoVisual.innerHTML = amigoSeleccionado;
    }
}
