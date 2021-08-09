let controle;
let numero = 2;
let contDiv;
while(numero<=1000){
    controle = 1;
    contDiv = 0;
    do{
        if(numero%controle == 0){
            contDiv=contDiv+1;
        }
        controle++;
    }while(controle > numero);
    if (contDiv == 2){
        console.log(numero)
    }
    numero++;
}