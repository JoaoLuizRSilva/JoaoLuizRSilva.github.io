let controle = 0;
let A1 = 0;
let A2 = 1;
let A3 = 0;
console.log(A1)
console.log(A2)
while(controle<=100){
    A3 = A1 + A2;
    console.log(A3);
    A1 = A2;
    A2 = A3;
    controle++;
}