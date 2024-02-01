// Criando Variáveis

let alunos = [];
let notas = [];
let continuar = true;
let contador = 0

// Criando Loops
while(continuar){
    let nome = prompt("Insira o nome do " + (contador + 1) + " º aluno:");
    let nota = Number(prompt("Digite a nota do aluno"));
    alunos[contador] = nome;
    notas[contador] = nota;
    contador++
    let resposta = prompt("Deseja Inserir Informações sobre outro aluno? (S/N)");
    if(resposta === "n"){
        continuar = false
    }
}

// Exibindo informações

console.log("Notas dos Alunos:")
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i] + " - " + notas[i])
}

let somaNotas = 0
for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

let mediaNotas = somaNotas / alunos.length;
console.log("A soma das notas foi: " + somaNotas);
console.log("A média geral da turma foi: " + mediaNotas)
