//JS Puro
var minhaVar = 'minha variável'; 

function minhaFuncao(x, y){
    return x + y; 
}

var numeros = [1, 2, 3]; 

numeros.map(function(valor){
    return valor * 2; 
});

//Ecma Script 2015 (ES6)
let num = 20; 

const PI = 3.14;

numeros.map(valor => valor * 2);

class Matematica {
    soma(x,y){
        return x + y; 
    }
}

//Type Script - does not work!
var n1:string = 'Nathan Cirillo';
n1 = 20; 