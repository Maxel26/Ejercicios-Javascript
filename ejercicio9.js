// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

let number = 5
let array = [];
// array= array.pop(array[1])
array.splice(2,0);
for (let i = 1; i <= number; i++) {
    array += i 
    
}