// Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

// const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

// El resultado debería ser el siguiente:

// 11

const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ]
let contador = 0;
for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 1 ) contador++;
        
}
console.log(contador);