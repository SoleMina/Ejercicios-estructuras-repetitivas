//Ejercicio de 10 números con FOR
var suma=0;
for (var i = 1; i <= 10; i++) {
    numero = Number(prompt('ingresa numero'+i));
    suma=suma+numero;
}
document.write("la suma es:" + suma);