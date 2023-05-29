let name = prompt("Ingrese nombre");
let price = parseFloat(prompt("Ingrese precio"));
let amount = parseInt(prompt("Ingrese cantidad"))
let producto = {
    nombre: name,
    precio: price,
    cantidad: amount
};

function calcularTotal(n){
  let total;
  total = n.cantidad * n.precio;
  return total
}
console.log(calcularTotal(producto))