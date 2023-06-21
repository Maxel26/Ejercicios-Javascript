// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
// Si es múltiplo debe imprimir Si, el número x es múltiplo 5, de lo contrario debe imprimir No, el número x no es múltiplo de 5.

let multiplo = prompt('Digita el numero')
if( multiplo % 5 == 0 ){
    console.log('Si, el numero '+ multiplo +' es multiplo de 5');
} else{
    console.log('No, el numero '+ multiplo +' no es multiplo de 5');
}