function numeroPrimo(n1, n2) {
  let numero = new Array();
  for (var c = n1; c <= n2; c++) {
    if (primo(c)){
      numero.push(c);
    }
  }
  return numero;
}
function primo(n2) {
  for(let c = 2; c <n2; c++)
    if(n2 % c === 0) {
        return false
    };
  return n2 > 1;
}
console.log(numeroPrimo(5, 80));