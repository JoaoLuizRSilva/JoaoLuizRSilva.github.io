#include <iostream>
#include<conio.h>
using namespace std;
main ()
{

    int quant;
    cout<< "Digite o tamanho do vetor: ";
    cin >> quant;
    int la=0, h=0, t=0, vetor[quant], tes=1, matriz[tes][tes];

    while (la<quant)
    {
        if (tes*tes>=quant)
        {
            break;
        }
        ++tes;
    }
    while (la<quant)
    {
        cout<< "Forneca o "<<t+1<<"o. numero natural: ";
        cin >> vetor[t];
        if (vetor[t]>=0)
        {
            ++la;
            ++t;
        }
    }

    la=0;
    t=0;
    while (la<tes)
    {
        h=0;
        while (h<tes)
        {
            matriz[la][h]=vetor[t];

            if (t==quant-1)
                t=-1;
            cout<< "M["<<la<<"]["<<h<<"] = "<<matriz[la][h]<<"\n";
            ++t;
            ++h;
        }
        ++la;
    }
    getch();
}
