function romano(numero) {
	var alteracao = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roma = '',c;
	for ( c in alteracao ) {
	  while ( numero >= alteracao[c] ) {
		roma += c;
		numero -= alteracao[c];
	  }
	}
	return roma;
  }
  console.log(romano(34))