'use strict';

let cadena = prompt("Introduce una cadena: "); // Pide al usuario que introduzca una cadena
const cadenaReverse = cadena.split(''); // Convierte la cadena en un array de caracteres
const reverseFinal = [];

for (let i = cadenaReverse.length - 1; i >= 0; i--) { // Recorre el array desde el final
    reverseFinal.push(cadenaReverse[i]); // Añade cada caracter a reverseFinal
}

let cadenaFinal = reverseFinal.join(''); // Convierte el array en una cadena
alert("La cadena invertida es: " + cadenaFinal); // Imprime la cadena invertida

if(esPalindromo(cadenaFinal, cadena)){
    alert("Es palindromo");
}else{
    alert("No es palindromo");
}




//Funcion
function esPalindromo(cadenaFinal, cadena) {
    let resultado = true;
    for (let i = 0; i < cadenaFinal.length; i++) {
        if(cadenaFinal[i] != cadena[i])
            resultado = false;
            break;
   }

   return resultado; //Devuelve el resultado
}

