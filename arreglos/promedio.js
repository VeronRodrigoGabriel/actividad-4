let notas = [5,5,5,3,3,6,6,7,6,8,3,8,8,10,10,9,6]
function obtenerPromedioPonderado (n){
  let total;
total = n.reduce((a, b) => a + b, 0);
  let promedio;
  promedio = total / notas.length;
  return promedio
}
console.log(obtenerPromedioPonderado(notas))