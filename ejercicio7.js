// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número.

let number = Number(prompt('Digita el primer numero'))  
let number2 = Number(prompt('Digita el segundo numero')) 

for (let index = number; index <= number2; index++) {
        console.log(index);
}