let edad;
edad = parseInt(prompt("Ingrese edad"));
function esMayorEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
console.log(esMayorEdad(edad))