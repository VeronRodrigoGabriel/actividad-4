let base;
let altura;
base = parseFloat(prompt("Ingrese area"));
altura = parseFloat(prompt("Ingrese altura"));
function calcularAreaRectangulo(b, a) {
  let area = b * a;
  return area;
}
console.log(calcularAreaRectangulo(base, altura));   