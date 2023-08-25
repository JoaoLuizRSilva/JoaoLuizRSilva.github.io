#include <stdio.h>

struct data
{
    int dia, mes, ano;
};

int diasNoMes(int mes, int ano) {
    int diasMes[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    if (mes == 2 && ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0))) {
        return 29;
    }
    return diasMes[mes];
}

int diferencaEmDias(struct data d1, struct data d2) {
    int totalDias = 0;

    // Adicionar os dias dos anos inteiros
    for (int ano = d1.ano + 1; ano < d2.ano; ano++) {
        totalDias += 365;
    }

    // Adicionar os dias dos meses restantes no ano de d1
    for (int mes = d1.mes + 1; mes <= 12; mes++) {
        totalDias += diasNoMes(mes, d1.ano);
    }

    // Adicionar os dias dos meses completos no ano de d2
    for (int mes = 1; mes < d2.mes; mes++) {
        totalDias += diasNoMes(mes, d2.ano);
    }

    // Adicionar os dias restantes no mês de d1
    totalDias += diasNoMes(d1.mes, d1.ano) - d1.dia;

    // Adicionar os dias de d2
    totalDias += d2.dia;

    return totalDias;
}

int main() {
    struct data data1, data2;

    printf("Informe a primeira data (dia mes ano): ");
    scanf("%d %d %d", &data1.dia, &data1.mes, &data1.ano);

    printf("Informe a segunda data (dia mes ano): ");
    scanf("%d %d %d", &data2.dia, &data2.mes, &data2.ano);

    int diferenca = diferencaEmDias(data1, data2);
    printf("Diferenca em dias: %d\n", diferenca);

    return 0;
}
