let vetor = [2, 5, 6, 3, 1], n1 = 0, n2 = 0, n3 = 1, controle;
function sum(array){
    controle = 0
    while (controle < 5){
        n1 = n1 + array[controle];
        controle = controle + 1;
    }
    return n1;
}
function sumOdds(array){
    controle = 0
    while (controle < 5){
        if(array[controle] % 2 != 0){
            n2 = n2 + array[controle];
        }
        controle = controle + 1;
    }
    return n2;
}
function product(array){
    controle = 0
    while (controle < 5){
        n3 = n3 * array[controle];
        controle = controle + 1;
    }
    return n3;
}
console.log("Soma dos elementos do Array: " + sum(vetor))
console.log("Soma dos elementos impares do Array: " + sumOdds(vetor))
console.log("Produto dos elementos do Array: " + product(vetor))