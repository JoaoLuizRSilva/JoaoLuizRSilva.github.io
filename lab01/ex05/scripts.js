let C = 0;
let N = 2;
let contDiv;
while(N<=1000){
    C = 1;
    contDiv = 0;
    do{
        if(N%C==0){
            contDiv=contDiv+1;
        }
    C = C + 1;
    }while(C > N);
    if (contDiv=2){
        console.log(N)
    }
    N = N + 1;
}