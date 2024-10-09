'use strict'

//Prompts para introducir valores
let num1 = parseInt(prompt("Introduce el numero 1: "));
let num2 = parseInt(prompt("Introduce el numero 2: "));
let opr = prompt("Introduce la operacion (+, -, *, /): ");
let result;
if((opr != '+') && (opr != '-') && (opr != '*') && (opr != '/'))
    alert("Aprende mates");
else
    result = calculator(num1,num2,opr);
    alert("El resultado es: "+result);

//funcion

function calculator(num1,num2,opr) {
    if(opr == '+'){
        return num1 + num2;
    }else if(opr == '-'){
        return num1 - num2;
    }else if(opr == '*'){
        return num1 * num2;
    }else if(opr == '/'){
        return num1 / num2;
    }
}