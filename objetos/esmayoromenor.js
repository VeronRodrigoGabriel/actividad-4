let persona ={
    nombre: 'Veron Rodrigo',
    edad: '18',
    profesion: 'Programador'
  }
function esMayorEdad(persona) {
    if (persona.edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
console.log(esMayorEdad(persona))