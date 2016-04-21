//Elevar un  número a la n potencia.
document.write("Potencia"+ '<br>' +'<br>');
n=Number(prompt('Ingrese el número base que quiera sacar su potencia'));
x=Number(prompt('Ingrese el exponente de su número base'));
potencia=Math.pow(n, x);
document.write(n+ " elevado a la " +x+ " = " +potencia);