let numeros = [1, 2, 3, 4, 5,4,5,6,7,8,9,10];
function obtenerSuma (n){
let total;
total = n.reduce((a, b) => a + b, 0);
return total
}
console.log(obtenerSuma(numeros));