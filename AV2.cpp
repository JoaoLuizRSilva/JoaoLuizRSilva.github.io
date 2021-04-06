#include<iostream>
#include<conio.h>
using namespace std;

bool digito(char carac)
{
return (carac >= '0' && carac <= '9');
}

bool letra(char carac)
{
return ((carac >= 'A' && carac <= 'Z') || (carac >= 'a' && carac <= 'z'));
}

bool digitoPar(char carac)
{
 return (carac%2==0);
}

bool vogal(char carac)
{
    switch(carac)
          {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        return true;
        default: return false;

          }
}

bool maiuscula(char carac)
{
return(carac >= 'A' && carac <= 'Z');
}
main()
{
    char info;
    cout<<"digite um unico caracter:";
    cin>>info;
    digito (info);
    letra (info);
    digitoPar (info);
    vogal (info);
    maiuscula (info);

    if (vogal(info)&&maiuscula(info)==false)
        cout<<"O caractere fornecido e vogal minuscula.";

    if(vogal(info)&&maiuscula(info)==true)
        cout<<"O caractere fornecido e vogal maiuscula.";

    if(letra(info)&&vogal(info)==false&&maiuscula(info)==false)
        cout<<"O caractere fornecido e consoante minuscula.";

    if(letra(info)&&vogal(info)==false&&maiuscula(info)==true)
        cout<<"caractere fornecido e consoante maiuscula.";

    if(digito(info)&&digitoPar(info)==true)
        cout<<"O caractere fornecido e digito par.";

    if(digito(info)&&digitoPar(info)==false)
        cout<<"O caractere fornecido e digito impar.";

    if(digito(info)==false&&letra(info)==false)
        cout<<"O caractere fornecido nao e nem letra, nem digito.";
getch();
}
