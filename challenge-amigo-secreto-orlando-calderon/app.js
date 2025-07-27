
let listaDeAmigos = []; // Esta es nuestra lista donde vamos a guardar todos nuestros amigos.

let miLista = document.querySelector('#listaAmigos'); // Esta variable almacena la "ul" que contendrá los nombres de nuestros amigos
let resultado = document.getElementById('resultado'); // Esta otra variable almacena la "ul" del resultado, esta solamente tendrá una "li" donde aparecerá el resultado

function generarNumeroGanador(){   //Funcion que retorna un numero selector para nuestro arreglo de amigos
    let numero = Math.floor(Math.random() * listaDeAmigos.length); 
    return numero;
}


function agregarEnLista(amigo) {   //En esta fucnción recine el nombre del amigo y creamos una "li" dinamicamente al presionar el boton "añadir"
            let elementoDelista = document.createElement('li'); //Crea el elemento "li"
            elementoDelista.innerHTML = amigo; //Introduce el nombre del amig
            miLista.appendChild(elementoDelista); // Agrega la string a la lista "ul"
   
}

function limpiarTextBox(){ //Funcion que vacía el input y coloca una string vacía
    document.querySelector('#amigo').value = ''; 
}

function sortearAmigo(){ //Funcion que muestra el ganador en pantalla 
    let ganador = listaDeAmigos[generarNumeroGanador()]; //Mandamos llamar la funcion de generarNumeroGandaor para que esta retorne un numero el cual apunta a un nombre del arreglo 
    console.log(ganador);
    miLista.remove(); //Borramos la lista del DOM para anunciar el ganador 
    let enunciadoResultado = document.createElement('li'); // Creamos el unico elemento "li" en nuestra lista ul 
    enunciadoResultado.innerHTML = `El amigo secreto sorteado es: ${ganador}`; // Anunciamos el ganador con una subString 
    resultado.appendChild(enunciadoResultado); //Agregamos el elemento "li" a su respectiva "ul"

    
}

function agregarAmigo(){ //Funcion que es llamada cada vez que el boton "añadir" es clickeado
    let amigo = document.getElementById('amigo').value;
    if(amigo == ''){ //Validamos si es usuario esta tratando de ingresar una string vacía
        alert('Por favor ingresa un nombre válido no vacío.'); 
    } else {
         listaDeAmigos.push(amigo); //Si no está vacía entonces, agregamos el nombre a nuestro arreglo 
    }

    console.log(listaDeAmigos);
    
    agregarEnLista(amigo); //Mandamos llamar a la funcion que manipula al DOM para mostrar los amigos regitrados
    limpiarTextBox(); // Lamamos a la función para resetear el nombre de nuestro input.
    
}
