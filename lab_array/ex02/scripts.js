<<<<<<< Updated upstream
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
=======
/* function cousin(limit) {
    for (let number = 2; number <= limit; number++){
        let isCousin = true;
        for (let divider = 2; divider < number; divider++){
            if (number % divider === 0){
                isCousin = false;
                break;
            }
        }
        if (isCousin){
            console.log(number);
        }
    }
}
cousin(50) */
let number = 2, divider = 2;
function cousin (limit) {
    while (number <= limit ) {
        let isCousin = true;
    }
}
>>>>>>> Stashed changes
