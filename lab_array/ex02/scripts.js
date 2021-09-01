let limite = 1000;
for (let number = 2; number <= limite; number++){
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