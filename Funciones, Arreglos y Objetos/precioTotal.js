let precios = [];
let precio;

while(precio != "total"){
  precio = prompt("Ingrese el precio de cada producto (ingrese 'total' para obtener el total):")
  if (precio != "total"){
    precios.push(precio)
  }        
}
function obtenerSuma (n){
let total;
total = n.reduce((a, b) => parseInt(a) + parseInt(b), 0);
return total
}
console.log(obtenerSuma(precios))