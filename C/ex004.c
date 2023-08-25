#include <stdio.h>
#include <math.h>

void separarPartes(double numero, int *parteInteira, double *parteFracionaria) {
    // Calcula a parte inteira do número
    *parteInteira = (int)numero;

    // Calcula a parte fracionária do número
    *parteFracionaria = numero - *parteInteira;
}

int main() {
    double numero;
    int parteInteira;
    double parteFracionaria;

    printf("Digite um número real: ");
    scanf("%lf", &numero);

    separarPartes(numero, &parteInteira, &parteFracionaria);

    printf("Parte inteira: %d\n", parteInteira);
    printf("Parte fracionária: %lf\n", parteFracionaria);

    return 0;
}
