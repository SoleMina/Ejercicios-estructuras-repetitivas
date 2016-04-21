//Ejercicio Triangulo:
for(cateto=1 ; cateto<=500 ; cateto++){
    for (cateto1=1 ; cateto1<=500; cateto1++) {
        for (hipotenusa=1 ; hipotenusa<=500; hipotenusa++) {
            if (hipotenusa*hipotenusa===cateto*cateto+cateto1*cateto1){
                document.write("ternas de pitarogas:"+'<br>'+cateto+'<br>'+cateto1+'<br>'+hipotenusa+'<br>');
    }
}
}
}
