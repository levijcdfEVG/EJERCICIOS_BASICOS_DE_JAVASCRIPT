'use strict'

let min = parseInt(prompt("Introduce el minimo: "));
let max = parseInt(prompt("Introduce el maximo: "));


for (let number = min; number < max; number++) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
        console.log("Numero " + number + " FizzBuzz"); // Multiplo de 3 y de 5
    } else if (number % 3 === 0) {
        console.log("Numero " + number + " Fizz"); // Multiplo de 3
    } else if (number % 5 === 0) {
        console.log("Numero " + number + " Buzz"); // Multiplo de 5
    }
}
