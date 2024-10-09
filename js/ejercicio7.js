'use strict'

const array = []; //Se instancia el array

introducirArray(array); //Llama a la funcion de llenar array


let max = calcularMax(array); //Le pasamos el array por parametro a la funcion

alert("El maximo es "+max); //Visualiza el max



//Funciones
function calcularMax(array) {
    let max = null; //Define el maximo como 0

    for (let i = 0; i < array.length; i++) {
        
        if(array[i] > max)
            max = array[i]; //Va poniendo el mayor numero de la comparacion en esta variable
        
    }

    return max; //Devuelve el mayor numero del array
}

function introducirArray(array) {
    let contador = 0;
    let contenido;

    // Verificar si el valor es distinto de 'stop'
    do {
        contenido = prompt("Introduce numero (o 'stop' para terminar): "); // Introducir numero por teclado
        
        // Comprobar si el contenido es 'stop'
        if (contenido.toLowerCase() !== 'stop') { // Ignorar mayúsculas/minúsculas
            // Convertir a número solo si no es 'stop'
            array[contador] = parseInt(contenido); // Se va rellenando el array
            contador++;
        }
        
    } while (contenido.toLowerCase() !== 'stop'); // Continuar hasta que se introduzca 'stop'
    
    // Opcional: ajustar el tamaño del array para eliminar los elementos vacíos
    array.length = contador; // Ajustar la longitud del array al contador

    // Imprimir el contenido del array
    console.log("Contenido del array:", array);
}
