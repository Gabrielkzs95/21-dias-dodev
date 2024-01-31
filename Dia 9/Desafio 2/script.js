// Criando Variáveis/LOOP
let confirmar = "n"

while(confirmar != "s"){
    let nome = prompt("Insira seu nome");
    let idade = parseInt(prompt("Insira sua idade"));
    let salarioAtual = parseFloat(prompt("Insira seu salário atual"));
    console.log("Nome: " + nome + " Idade: " + idade + " Salário Atual: " + salarioAtual);
    confirmar = prompt("As informações estão corretas? (s/n)");


// Fazendo previsão do Salário
let aumento = 0.015;
console.log("Previsão salarial para os próximos 10 anos:")

for(let ano = 1; ano <= 10; ano++){
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2024 + ano) + " - R$ " + salarioAtual)
}
}