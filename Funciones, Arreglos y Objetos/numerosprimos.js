let numero;
numero = parseInt(prompt("Ingrese un numero"));

function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

if (esPrimo(numero)) {
  console.log(numero + " es un numero primo.");
} else {
  console.log(numero + " no es un numero primo.");
}
