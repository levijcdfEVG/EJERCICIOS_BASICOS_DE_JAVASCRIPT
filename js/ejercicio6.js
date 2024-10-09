'use strict'


const NUMERO = parseInt(prompt("¿Que tabla de multiplicar quieres visualizar?: ")); //Pide al usuario el numero del que quiere obtener una tabla de multiplicar
let max = parseInt(prompt("¿Hasta qué numero quiere visualizar la tabla?: "));

const tablaMultiplicar = []; //Crea el array de 
//Realiza la tabla de multiplicar de todos los numeros de acuerdo con los valores que ha creado el usuario
for (let i = 1; i <= max; i++) {
    tablaMultiplicar[i] = NUMERO * i; //Guarda los elementos de la tabla de multiplicar en un array
}


for (let j = 1; j < tablaMultiplicar.length; j++) {
    console.log(tablaMultiplicar[j]); //Muestra los elementos de la tabla de multiplicar
    console.log("\t"); //Se tabula
}