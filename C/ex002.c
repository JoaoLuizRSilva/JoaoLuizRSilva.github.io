#include <stdio.h>

int SomaDivisores(int num) {
    int soma = 0;
    for (int i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            soma += i;
        }
    }
    return soma;
}

void somaDivisores(int vetor[]) {
    for (int i = 0; i < 5; i++) {
        int num = vetor[i];
        int resultado = SomaDivisores(num);
        printf("Soma de divisores de %d: %d\n", num, resultado);
    }
}

int main() {
    int numeros[5];

    printf("Digite 5 números inteiros positivos:\n");
    for (int i = 0; i < 5; i++) {
        scanf("%d", &numeros[i]);
    }

    somaDivisores(numeros);

    return 0;
}
