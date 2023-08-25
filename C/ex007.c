#include <stdio.h>

int main() {
    int matriz1[3][3], matriz2[3][3], resultado[3][3];
    int i, j;

    // Entrada da primeira matriz
    printf("Digite os valores da primeira matriz 3x3:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            scanf("%d", &matriz1[i][j]);
        }
    }

    // Entrada da segunda matriz
    printf("Digite os valores da segunda matriz 3x3:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            scanf("%d", &matriz2[i][j]);
        }
    }

    // Multiplicação das matrizes
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            resultado[i][j] = matriz1[i][j] * matriz2[i][j];
        }
    }

    // Exibição do resultado
    printf("Resultado da multiplicacao:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d ", resultado[i][j]);
        }
        printf("\n");
    }

    return 0;
}
