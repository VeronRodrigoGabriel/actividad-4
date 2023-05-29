let persona ={
    nombre: 'Veron Rodrigo',
    edad: '18',
    profesion: 'Programador'
  }
  
  function presentarPersona (person){
     console.log("Hola, Soy " + persona.nombre + ".");
    console.log("Tengo " + persona.edad + " años y soy " + persona.profesion + ".");
  }
  
  console.log(presentarPersona(persona))