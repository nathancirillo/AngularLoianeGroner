//JS Puro
var minhaVar = 'minha variável';
function minhaFuncao(x, y) {
    return x + y;
}
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//Ecma Script 2015 (ES6)
var num = 20;
var PI = 3.14;
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//Type Script
var n1 = 'Nathan Cirillo';
n1 = 20;
