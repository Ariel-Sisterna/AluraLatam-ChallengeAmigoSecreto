// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = []

//Asigna un texto a un elemento cualquiera h1 p ...
function asignarElementoHTML(elemento,texto){
    //document.querySelector() asigna a la variable el elemento (h1, p ...)
    //Esto tambien se puede hacer con documento.getElementBy
    let elementoHTML = document.querySelector(elemento)
    //Asigna texto --> elemento ex. <h1>texto</h1>
    elementoHTML.textContent = texto
}

function limpiar(){
    //Esto se utiliza para limpiar la caja
    document.getElementById('amigo').value = ""
}

// Verifica si la entrada es válida (solo letras y espacios)
function esNombreValido(nombre) {
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para solo letras y espacios
    return regex.test(nombre);
}

function sortearAmigo() {
    //Verifica que la lista no este vacía
    
    if(listaAmigos.length === 0){
        asignarElementoHTML('h2', 'No hay amigos para sortear')
        return
    }else{
        // Generar un índice aleatorio
    let aleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[aleatorio];

    // Mostrar el amigo sorteado
    let resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo seleccionado es: ${amigoSorteado}`;

    // Eliminar el amigo de la lista
    listaAmigos.splice(aleatorio, 1);

    // Actualizar la lista en pantalla
    actualizarListaAmigos();
    }
}

function actualizarListaAmigos(){
    //Capturamos el elemento HTML ID = 'lista de amigos'
    let lista = document.getElementById('listaAmigos')
    //limpiar lista antes de actualizar
    lista.innerHTML=''
    //Recorremos el arreglo lista de amigos y agregamos cada elemento a una lista
    // creada
    listaAmigos.forEach(elemento => {
        //crear un elemento lista
        let li = document.createElement("li");
        li.textContent = elemento; // Asignar el texto del elemento
        lista.appendChild(li); // Agregarlo a la lista
    })

}

function reiniciar() {
    // Vaciar la lista de amigos
    listaAmigos = []
    //Mensaje de reinicio
    asignarElementoHTML('h2', 'Lista reiniciada. Agrega nuevos amigos.');
    // Limpiar la lista en el HTML
    document.getElementById('listaAmigos').innerHTML = ""
    // Limpiar el resultado
    document.getElementById('resultado').textContent = ""; 
}

function agregarAmigo() {

    //      Capturar nombre de amigoSs
    //Asigna parrafo a h2
    asignarElementoHTML('h2', 'Digite los nombre de sus amigos')
    //Captura los elementos del imput - id=amigo en amigos
    //Al adicionar el metodo trim(), quita los espacios vacios
    //' maria ' == 'maria'
    let amigos = document.getElementById('amigo').value.trim()
    
    if (!esNombreValido(amigos)) {
        asignarElementoHTML('h2', 'Debes escribir un nombre válido (sin números ni caracteres especiales).');
    } else if(listaAmigos.includes(amigos)){
        //Verificar que el nombre no este repetido
        asignarElementoHTML('h2', 'Este nombre ya se ha guardado, escribe otro')
        limpiar()
    }else if(amigos === ''){
        //Evitar que escriba un nombre vacio ''
        asignarElementoHTML('h2', 'Debes escribir un nombre valido')
        limpiar()
    }else{
        //Adicionar elelemto amigo a la lista de amigos
        listaAmigos.push(amigos)
        actualizarListaAmigos() 
    }
    limpiar()

    
}








