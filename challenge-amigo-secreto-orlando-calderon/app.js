
let listaDeAmigos = []; // Esta es nuestra lista donde vamos a guardar todos nuestros amigos.

let miLista = document.querySelector('#listaAmigos');
let resultado = document.getElementById('resultado');

function generarNumeroGanador(){
    let numero = Math.floor(Math.random() * listaDeAmigos.length);
    return numero;
}


function agregarEnLista(amigo) {
            let elementoDelista = document.createElement('li');
            elementoDelista.innerHTML = amigo;
            miLista.appendChild(elementoDelista);
   
}

function limpiarTextBox(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let ganador = listaDeAmigos[generarNumeroGanador()];
    console.log(ganador);
    miLista.remove();
    let enunciadoResultado = document.createElement('li');
    enunciadoResultado.innerHTML = `el ganador es: ${ganador}`;
    resultado.appendChild(enunciadoResultado);

    
}

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo == ''){
        alert('No se admite enviar un nombre vacío, ingresa nuevamente.');
    } else {
         listaDeAmigos.push(amigo);
    }

    console.log(listaDeAmigos);
    
    agregarEnLista(amigo);
    limpiarTextBox();
    
}
