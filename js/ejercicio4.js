'use strict'

let dateOfBirth = parseInt(prompt("Introduce tu año de nacimiento: ")); //Le pide al usuario introducir su año de nacimiento

//Verifica las edades
if (dateOfBirth > 2024) {
    alert("No existes, pringao");
}else if(dateOfBirth == 2024){
    alert("Eres un feto");
}else{
    let edad = 2024 - dateOfBirth; //Calcula la edad en años
    alert("Tienes "+edad+" años"); //Muestra la edad
}

