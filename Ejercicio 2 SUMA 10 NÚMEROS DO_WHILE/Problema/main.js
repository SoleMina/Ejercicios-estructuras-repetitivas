// Suma de 10 números-ciclo DO WHILE
document.write("Suma:"+ '<br>' +'<br>');
var i=0;
var suma=0;

do {
	suma+=i;
	i++;
} while(i<=10)
// i++;  no lo considera pues no está dentro de un bucle
console.log(suma);
document.write(suma);