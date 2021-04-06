/*Professor eu não consegui entender a logica da função, que tem por
objetivo receber um número inteiro em seu parâmetro e determinar se
este é um número espelhado, então fiz apenas o que eu consegui.
Se possível gostaria que de aula síncrona explicando a prova.*/
#include<iostream>
#include<conio.h>
using namespace std;
int quantidadeDeDigitosDeUmInteiro(int n)
{
int i, r = 0;
if (n == 0) return 1;
else while (n != 0)
{
n = n / 10;
r = r + 1;
}
return r;
}
int digitoDeUmInteiro(int n, int pos)
{
int i, digito, tam;
tam = quantidadeDeDigitosDeUmInteiro(n);
if (pos >= tam) return -1;
else
{
for (i = 0; i <= pos; i++)
{
digito = n % 10;
n = n / 10;
}
return digito;
}
}
int numeroEspelhado (int numeI)
{
        int P , P2;
        P=quantidadeDeDigitosDeUmInteiro(numeI)-1;
        P2=digitoDeUmInteiro(numeI, P);
}
main()
{
    int limiIni, limiFin, c;
    cout<<"Indique o limite inicial dos numeros que serao testados: ";
    cin>>limiIni;
    cout<<"Indique o limite final dos numeros que serao testados: ";
    cin>>limiFin;
    if(limiIni<limiFin)
    {
        while(limiIni<=limiFin)
        {
            c=numeroEspelhado(limiIni);
            cout<<c<<".\n";
            limiIni=limiIni+1;
        }
    }
    else
    {
        while(limiIni>=limiFin)
        {
            c=numeroEspelhado(limiIni);
            cout<<c<<".\n";
            limiIni=limiIni-1;
        }
    }
    getch();
}
