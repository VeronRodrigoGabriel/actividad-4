let numero1;


numero1 = parseInt(prompt("ingrese un numero"))

function clasificacionNumeros(n){
  if (n > 100){
    alert( "numero fuera de rango")
  }
  else {
    if (n == 0){
      alert("numero nulo")
     }
    else {
      if(n <= -1){
        alert("numero negativo")
      }
      else{
        if(n > 0){
          alert("numero positivo")
        }
      }
    }
  }
}
console.log(clasificacionNumeros(numero1))