'use strict'

// Prompts para introducir valores
let num1 = parseFloat(prompt("Introduce el número 1: ")); // Se usa parseFloat para permitir decimales
let num2 = parseFloat(prompt("Introduce el número 2: "));
let opr = prompt("Introduce la operación (+, -, *, /): ");
let result;

// Verificar si la operación es válida y calcular el resultado
if ((opr !== '+') && (opr !== '-') && (opr !== '*') && (opr !== '/')) {
    alert("Operación no válida. Por favor, introduce una de las siguientes: +, -, *, /.");
} else {
    result = calculator(num1, num2, opr);
    alert("El resultado es: " + result);
}

// Función para la calculadora
function calculator(num1, num2, opr) {
    if (opr === '+') {
        return num1 + num2;
    } else if (opr === '-') {
        return num1 - num2;
    } else if (opr === '*') {
        return num1 * num2;
    } else if (opr === '/') {
        // Manejo de división por cero
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero.";
        }
        return num1 / num2;
    } else {
        // En caso de una operación no válida, retornamos un mensaje
        return "Operación no válida.";
    }
}