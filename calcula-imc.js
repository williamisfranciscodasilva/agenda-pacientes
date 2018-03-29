//peso dividido por altura ao quadrado, ou seja, peso / (altura*altura)
var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

if(altura != 0) {
    var imc = peso / (altura * altura);
    console.log(imc);
}
else{
    console.log("Não executarei, porque a altura é igual a 0");
}