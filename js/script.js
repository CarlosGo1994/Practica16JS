'use strict'

/*
Programa que nos diga si es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

var num = parseInt(prompt('Introduce un numero',0));

while(isNaN(num)){
    num = parseInt(prompt('Introduce un numero',0));
}

if(num%2 == 0){
    alert('es un numero par');
}else {
    alert('es impar');
}