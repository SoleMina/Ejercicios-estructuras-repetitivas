//Tablas de multiplicar
document.write("Tablas de multiplicar"+ '<br>' +'<br>');
n=Number(prompt('Ingrese el número que quiera para obtener su tabla de multiplicar'));
for(i=0; i<=100; i++) {
	producto=n*i;
    document.write(n + "x"+ i +"="+ producto +'<br>' +'<br>');
}