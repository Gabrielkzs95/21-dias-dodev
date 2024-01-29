// 2 - Caixa Eletrônico DoDev (Dowhile)
// - Solicite o nome e o cpf do seu clientes.
// - Pergunte um Valor.
// - Ofereça a opção de saque ou depósito.
// - Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
// - Caso a opção de depósito seja escolhida, adiciona o valor inserido do saldo total.
// - Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
// - Exiba o Saldo total.
// - Exiba o maior valor inserido (independente de ser depósito ou saque).
// - Exiba a média dos valores inseridos (independente de ser depósito ou saque).

// REGRAS
// 1 - Considere iniciar o variável saldo com algum valor
// 2 - Não deve ser permitido sacar um valor não disponível no saldo.
// 3 - Não deve ser permitido sacar nem depositar um valor negativo.

let saldo = 1000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false;

do {
    const nome = prompt("Digite seu nome:");
    const cpf = prompt("Digite seu cpf:");
    const valor = Number(prompt("Digite o valor da transação: "));
    const operacao = prompt("Qual operação deseja fazer? S / D")

    if(valor < 0) {
        console.log("Valor inválido. A transação não foi realizada");
    } else if (operacao == "S" && valor > saldo){
        console.log("Saldo insuficiente. A transação não foi realizada");
    } else if (operacao == "S"){
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}`);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`)
    
    } else {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`)
    }

    const opcao = prompt("Deseja continua? (1 para continuar, 2 para parar:)");
    if (opcao === "1") {
        continuar = true
    } else if (opcao === "2"){
        continuar = false
    } else {
        console.log("Opção Inválida. Programa encerrado!")
        continuar = false
    }

} while (continuar)

console.log(`Saldo final: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransacoes)}`);