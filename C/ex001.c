#include <stdio.h>
#include <stdbool.h>

int quantidadeDeDigitosDeUmInteiro(int n) {
    int r = 0;
    if (n == 0) return 1;
    else {
        while (n != 0) {
            n = n / 10;
            r += 1;
        }
        return r;
    }
}

int digitoDeUmInteiro(int n, int pos) {
    int digito, tam = quantidadeDeDigitosDeUmInteiro(n);
    if (pos >= tam) return -1;
    else {
        for (int i = 0; i <= pos; i++) {
            digito = n % 10;
            n = n / 10;
        }
        return digito;
    }
}

bool numeroEspelhado(int num) {
    int digito1, digito2, tam = quantidadeDeDigitosDeUmInteiro(num);
    for (int i = 0; i < tam / 2; i++) {
        digito1 = digitoDeUmInteiro(num, i);
        digito2 = digitoDeUmInteiro(num, tam - i - 1);
        if (digito1 != digito2) return false;
    }
    return true;
}

int main() {
    int i, inicio, fim;

    printf("Este programa imprime uma lista de números espelhados compreendidos\n");
    printf("dentro de um intervalo estabelecido pelo usuário...\n\n");

    printf("Indique o limite INICIAL dos números que serão testados:");
    scanf("%d", &inicio);
    printf("Indique o limite FINAL dos números que serão testados:");
    scanf("%d", &fim);

    printf("\nIMPRESSÃO DOS NÚMEROS ESPELHADOS:\n");
    if (inicio < fim) {
        for (i = inicio; i <= fim; i++) {
            if (numeroEspelhado(i)) printf("%d\n", i);
        }
    } else {
        for (i = inicio; i >= fim; i--) {
            if (numeroEspelhado(i)) printf("%d\n", i);
        }
    }

    return 0;
}
