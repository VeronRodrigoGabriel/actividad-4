let temperatura = parseFloat(prompt("Ingrese la temperatura a convertir:"));
let unidad = prompt("Ingrese la unidad de temperatura ('C' para Celsius, 'F' para Fahrenheit):");
let resultado;

function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}




if (unidad === 'C') {
  resultado = celsiusAFahrenheit(temperatura);
  console.log(temperatura + " grados Celsius equivale a " + resultado + " grados Fahrenheit.");
} else 
  if (unidad === 'F') {
  resultado = fahrenheitACelsius(temperatura);
  console.log(temperatura + " grados Fahrenheit equivale a " + resultado + " grados Celsius.");
}