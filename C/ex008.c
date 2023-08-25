#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char input[100];
    char inputLower[100]; // Cópia da string convertida para minúsculas
    int i, j, len;
    int isPalindrome = 1;

    printf("Digite uma string: ");
    fgets(input, sizeof(input), stdin);

    len = strlen(input);

    if (len > 0 && input[len - 1] == '\n')
        input[len - 1] = '\0';

    for (i = 0; i < len; i++) {
        inputLower[i] = tolower(input[i]);
    }
    inputLower[len] = '\0'; // Adicionar o terminador de string

    for (i = 0, j = len - 1; i < j; i++, j--) {
        // Pular caracteres não alfabéticos
        while (i < len && !isalpha(inputLower[i])) i++;
        while (j >= 0 && !isalpha(inputLower[j])) j--;

        if (i >= j) break; // Verificação completa

        if (inputLower[i] != inputLower[j]) {
            isPalindrome = 0;
            break;
        }
    }

    if (isPalindrome) {
        printf("A string eh um palindromo.\n");
    } else {
        printf("A string nao eh um palindromo.\n");
    }

    return 0;
}
