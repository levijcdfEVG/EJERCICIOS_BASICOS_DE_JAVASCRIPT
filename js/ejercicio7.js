'use strict'

const array = [1,2,3,4,50,6,9,-1,9]; //Se instancia el array

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