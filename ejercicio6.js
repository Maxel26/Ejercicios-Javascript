// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces.

let frase = prompt('Digita una frase')
let numVeces = Number(prompt('Digita el numero de veces que quieres que se repita'))
for (let index = 0; index < numVeces; index++) {
    console.log(frase);   
}