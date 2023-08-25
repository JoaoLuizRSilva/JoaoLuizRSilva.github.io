#include <stdio.h>

float calcularMedia(char letra, float nota1, float nota2, float nota3) {
    float media;

    switch (letra) {
        case 'A':
        case 'a':
            media = (nota1 + nota2 + nota3) / 3;
            break;
        case 'P':
        case 'p':
            media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
            break;
        case 'H':
        case 'h':
            media = 3 / ((1 / nota1) + (1 / nota2) + (1 / nota3));
            break;
        default:
            printf("Op��o inv�lida!\n");
            return -1; // Retornar um valor negativo indica que algo deu errado.
    }

    return media;
}

int main() {
    float nota1, nota2, nota3;
    char letra;

    printf("Digite as tr�s notas do aluno: ");
    scanf("%f %f %f", &nota1, &nota2, &nota3);

    printf("Digite a letra correspondente � m�dia desejada (A, P ou H): ");
    scanf(" %c", &letra); // Espa�o antes do %c para consumir o caractere de nova linha.

    float media = calcularMedia(letra, nota1, nota2, nota3);

    if (media >= 0) {
        printf("A m�dia do aluno �: %.2f\n", media);
    } else {
        printf("C�lculo da m�dia falhou.\n");
    }

    return 0;
}
