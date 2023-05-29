let palabra;
palabra = prompt("Ingrese palabra")
function palindrome(palabra) {
  let re;
  let lowRegStr = palabra.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
console.log(palindrome(palabra))