#include <stdio.h>
#include <math.h>

int arredonda(double x) {
    if (x >= 0) {
        return (int)(x + 0.5);
    } else {
        return (int)(x - 0.5);
    }
}

int main() {
    double numero;
    printf("Digite um número: ");
    scanf("%lf", &numero);

    int resultado = arredonda(numero);
    printf("%.1f arredondado é: %d\n", numero, resultado);

    return 0;
}
