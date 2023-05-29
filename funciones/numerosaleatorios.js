function generarNumeroAleatorios(){
    let numero =  Math.random();
    let generadorNumero
    generadorNumero = Math.ceil((numero * 10));
    return generadorNumero
  }
  console.log(generarNumeroAleatorios());