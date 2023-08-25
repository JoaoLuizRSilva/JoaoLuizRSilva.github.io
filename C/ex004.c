#include <stdio.h>
#include <math.h>

void separarPartes(double numero, int *parteInteira, double *parteFracionaria) {
    // Calcula a parte inteira do n�mero
    *parteInteira = (int)numero;

    // Calcula a parte fracion�ria do n�mero
    *parteFracionaria = numero - *parteInteira;
}

int main() {
    double numero;
    int parteInteira;
    double parteFracionaria;

    printf("Digite um n�mero real: ");
    scanf("%lf", &numero);

    separarPartes(numero, &parteInteira, &parteFracionaria);

    printf("Parte inteira: %d\n", parteInteira);
    printf("Parte fracion�ria: %lf\n", parteFracionaria);

    return 0;
}
