//Calificaciones Alumnos:
document.write("Calificaciones del alumnado:"+ '<br>' +'<br>');

var n=4;
var menor=1000;
var suma=0;

for(i=1;i<=4;i++){
    calificacion=Number(prompt('Ingrese nota del alumno'+i));
    if(calificacion<menor){
        menor=calificacion;
        }
else{
    menor=menor; //eso se define por defecto
}
suma=suma+calificacion;}
promedio=suma/n; //promedio de las notas
document.write("Promedio calificacion:"+promedio+'<br>'+"La calificacion más baja es:"+ menor);