// Verificar se o usuário deseja finalizar o programa
// Criando Variáveis
let continuar = "s"
do {
    let nome = prompt("Insira seu nome");
    let idade = parseInt(prompt("Insira sua idade"));
    let peso = parseInt(prompt("Insira seu peso"));
    let altura = Number(prompt("Insira sua altura. Ex: 1.73"));
    let profissao = prompt("Qual é sua profissão?")

    console.log("Olá " + nome + " você tem " + idade + " anos, é " + profissao + " tem " + altura + "M de altura e pesa " + peso + "kg.")

    // Verificando Idades
    if(idade >= 18) {
        console.log("Está liberado para tomar umas geladas!")
    } else{
        console.log("Sem gelada pra você")
    }

    // Descobrindo Idade Fracionada
    let idadeDias = idade * 365;
    let idadeMeses = idade * 12;
    let idadeSemanas = idade * 52;

    console.log("Sua idade em dias é: " + idadeDias);
    console.log("Sua idade em meses é: " + idadeMeses);
    console.log("Sua idade em semanas é: " + idadeSemanas)

    // Descobrindo IMC
    let imc = 0;
    imc = peso / (altura * altura)

    if(imc < 18.5){
        console.log("Seu IMC se classifica em: Magreza");
    } else if (imc >= 18.5 && imc < 24.9){
        console.log("Seu IMC se classifica como: Normal");
    } else if (imc >= 24.9 && imc < 30){
        console.log("Seu IMC se classifica como: Sobrepeso");
    } else {
        console.log("Seu IMC se classifica em: Obesidade")
    }

    // Descobrindo quando o usário nasceu

    let anoNascimento = 0;
    let anoAtual = 2024;
    anoNascimento = anoAtual - idade;

    console.log("Você nasceu no ano de: " + anoNascimento);

    // Exibindo anos e idades

    console.log("Sua idade conforme foram passando os anos a partir de quando você nasceu:");

    for(let i = anoNascimento; i <= anoAtual; i++){
        let idadeNascimento = i - anoNascimento;
        console.log(`${i}: ${idadeNascimento} anos de idade`)
    }

    //Outra forma de utilizar o FOR acima:
    /*
    let anoVivido = anoNascimento;
    let idadeAtual = 0;

    for (let anoVivido = anoNascimento; anoVivido <= anoAtual; anoVivido++){
        console.log(anoVivido + " - " + idadeAtual + " anos de idade" )
    }
    */

    continuar = prompt("Deseja inserir os dados novamente? (s/n)")
} while(continuar == "s")




