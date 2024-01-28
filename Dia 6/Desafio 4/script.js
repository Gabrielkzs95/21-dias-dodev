// Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exita na tela qual o resultado da sua tabuada e dos próximos 2 números.

let number = Number(prompt("Insira o número que deseja:"))

for(let i = number; i <= number + 2; i++){
    console.log("Tabuada do número: " + i)
    for(let j = 0; j <= 10; j++){
        console.log(i + " X " + j + " = " + (i * j))
    }
}