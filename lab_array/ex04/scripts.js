let cont100=0, cont50=0, cont20=0, cont10=0, cont5=0, cont2=0;
function atm(valor){
    while (valor>=100){
        valor=valor-100;
        cont100++;
    }
    while (valor>=50){
        valor=valor-50;
        cont50++;
    }
    while (valor>=20){
        valor=valor-20;
        cont20++;
    }
    while (valor>=10){
        valor=valor-10;
        cont10++;
    }
    while (valor>=5){
        valor=valor-5;
        cont5++;
    }
    while (valor>=2){
        valor=valor-2;
        cont2++;
    }
    console.log("Total de cédulas de R$100: " + cont100)
    console.log("Total de cédulas de R$50: " + cont50)
    console.log("Total de cédulas de R$20: " + cont20)
    console.log("Total de cédulas de R$10: " + cont10)
    console.log("Total de cédulas de R$5: " + cont5)
    console.log("Total de cédulas de R$2: " + cont2)
}
atm(962)
