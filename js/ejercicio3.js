'use strict'

let number = parseInt(prompt("Introduce un numero: ")); //Pidele al usuario que introduzca un numero

//Mientras la variable no tenga un valor numérico, se envia un error
while(isNaN(number)){
    alert("ERROR: El valor no es numérico");
    number = parseInt(prompt("Introduce un numero: "));
}


//Bloque de verificación if para verificar si el numero es par o no
if (number % 2 == 0) {
    alert("¡El numero es par!");
}else{
    alert("¡El numero es impar!");
}


