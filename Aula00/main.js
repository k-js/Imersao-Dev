var nome = prompt("Seu Nome Completo")

var notaDoPrimeiroBimestre = prompt("digite sua primeira nota ");
var notaDoSegundoBimestre = prompt("digite sua segunda nota ");
var notaDoTerceiroBimestre = prompt("digite sua terceira nota ");
var notaDoQuartoBimestre = prompt("digite sua segunda nota ");

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

if ( notaFixada >= 7 ) {
    alert("Aprovado");
} 
else { 
    if ( notaFixada <= 5 ) {
    alert("Reprovado");
}else {
    alert ("Recuperação");
}
}

console.log("Bem vindo " + nome)
console.log(notaFixada)


// isso é um comentário 

// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação