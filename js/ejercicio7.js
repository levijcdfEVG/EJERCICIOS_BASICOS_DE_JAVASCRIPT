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
    
    //Verificar si el valor es distinto de stop
    do{
        contenido = parseInt(prompt("Introduce numero: ")); //Introducir numero por teclado
        //Se va rellenando el array
        array[contador] = contenido;
        contador++;
    }while(contenido != 'stop');

    for (let index = 0; index < array.length; index++) {
        if(array[index] == 'stop')
            array[index].delete;
        
    }
   
}