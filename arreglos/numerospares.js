let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function obtenerPares(n){
let pares = n.filter(n => n % 2 === 0);
  return pares
}
console.log(obtenerPares(numeros));