var nota1 = 5;
var nota2 = 7;
var nota3 = 9;
var media = (nota1 + nota2 + nota3) / 3;
var mediaMinima = 7; // Mádia minima para aprovação

// Verificando se as notas estão dentro do intervalo válido
while (nota1 > 0 || nota1 < 10 || nota2 > 0 || nota2 < 10 || nota3 > 0 || nota3 < 10) {
    console.log("Insira notas válidas entre 0 e 10!");
    break;
}

if (media >= mediaMinima){
    console.log("Aluno aprovado com média:" + media);
} else {
    console.log("Aluno reprovado com média:" + media);
}

