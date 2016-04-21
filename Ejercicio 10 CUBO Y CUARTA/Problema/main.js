//Cubo y cuarta de un número:
document.write("Cubo y cuarta de un número determinado:"+ '<br>' +'<br>');

for (i=1; i<=10; i++) {

	x=Number(prompt('Ingrese el número que desee'+i));
	cubo=Math.pow(x,3);
	document.write('<br>'+"el cubo del número "+x+" es:"+cubo +'<br>');
	cuarta=Math.pow(x,4);
	document.write('<br>'+"la cuarta del número "+x+" es:"+cuarta +'<br>');
	
}