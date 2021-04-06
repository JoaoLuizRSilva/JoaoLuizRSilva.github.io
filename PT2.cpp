#include<iostream>
#include<conio.h>
using namespace std;
    float sequencia(int pf)
    {
       int n1=0, n2=1, resultado=1, c=1;
       if(pf>=1&&pf<=3.4028235E+38)
       {
        while(c<pf)
        {
            resultado=n1+n2;
            n1=n2;
            n2=resultado;
            ++c;
        }
        return resultado;
       }
       else
        return 0;
    }
main()
{
    const int  posicao=40;
    float a, b;
    int v=1, t=1;
    cout<<"40 primeiras projecoes da razao aurea:\n";
    while(t<=posicao)
    {
        a=sequencia(v);
        ++v;
        b=sequencia(v);
        cout<<b<<"/"<<a<<"="<<b/a<<"\n";
        ++t;
    }
    getch();
}
