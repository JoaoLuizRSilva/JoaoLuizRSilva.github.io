#include<iostream>
#include<conio.h>

using namespace std;

float n1 (float f)
{float c;
c=5*(f-32)/9;
return c;}

float n2 (float c)
{float k;
k=c+273.15;
return k;
}
void n3 (float &r)
{float result;
result=n1 (r);
r=n2(result);
}
main()
{float r1, r2;
cout<<"Temperatura em fahrenheint:";
cin>>r1;
r2=n1(r1);
n3(r1);
cout<<"Temperatura em Celsius:"<<r2<<".\nTemperatura em Kelvin:"<<r1<<".";
getch();
}
