// Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura while, e pergunte ao usuário se ele deseja cadastrar outra nota. No final, exiba no console:

/*
- A média geral dos alunos
- Quantos homens enviaram as notas
- Quantas mulheres tiveram nota acima de 7
- Qual a maior nota entre os homens

OBS - para obter a média geral deve somar todas as notas e dividir pelo número de alunos
*/

// Criando Variáveis
let mediaGeral = 0;
let qtdHomens = 0;
let qtdMulheresAcimaDe7 = 0;
let maiorNotaHomens = 0;
let contador = 1;

//Nota e Sexo

while(contador <= 10){
    nota = parseInt(prompt("Digite a nota do " + contador + "º aluno"))
    sexo = prompt("Digite o sexo do aluno (m/f)")

    if(sexo == "m"){
        if(nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        qtdHomens++
    }

if(sexo == "f" && nota > 7){
    qtdMulheresAcimaDe7++
}

mediaGeral += nota
contador++
}

mediaGeral = mediaGeral / 10

console.log("A média geral dos alunos foi: " + mediaGeral);
console.log("A quantidade de homens cadastrados foi: " + qtdHomens);
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi: " + qtdMulheresAcimaDe7);
console.log("A maior nota entre os homens foi: " + maiorNotaHomens);