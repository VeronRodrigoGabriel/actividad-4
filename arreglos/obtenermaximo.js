let numeros = [1, 2, 3, 4, 5,4,5,6,7,8,9,10,100];
function obtenerMaximo(n){
  let maximo = 0;
  for (let i = 0; i < n.length; i++) {
    if (maximo < n[i]) {
      maximo = n[i]
    }
  }
  return maximo
}
console.log(obtenerMaximo(numeros));