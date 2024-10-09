'use strict'

const colores = []; //Declara el array

for (let index = 0; index <= 4; index++) {
    let color = prompt("Introduce un color: "); //Le pide al usuario introducir un color 
    colores.push(color); //Añade al final del array
}

for (let index = 0; index < colores.length; index++) {
    console.log(colores[index]); //Muestra la celda del array
}