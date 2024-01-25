// Resolução do professor!

// Criando Variáveis
let nome;
let idade;
let temCarta;
let temCarro;

//Pedindo informações ao usuário
nome = prompt("Digite seu nome");
idade = parseInt(prompt("Digite sua idade"));
let opcaoCarta = prompt("Você tem carta de motorista? (s/n)")
if (opcaoCarta == "s"){
    temCarta = true;
}

let opcaoCarro = prompt("Você tem carro? (s/n)")
if (opcaoCarro == "s"){
    temCarro = true
}

//Exibindo mensagem no console
if (idade < 18 || !temCarta) {
    console.log(nome + ", você não pode dirigir")
} else if (idade >= 18 && temCarta && !temCarro) {
    console.log(nome + ", você pode dirigir mas não tem um carro")
} else {
    console.log(nome + ", você será o motorista!")
}

// Resolução eu eu fiz sem consulta!

/*
const nome = prompt('Qual é o seu nome?');
const idade = Number(prompt('Qual é a sua idade?'));
const carteiraMotorista = prompt('Possui carteira de motorista?');
const possuiCarro = prompt('Possui algum carro?');

if(idade < 18 || carteiraMotorista === "Não"){
    console.log(nome + ' você não pode dirigir')
} else if (carteiraMotorista === "Sim" && possuiCarro === "Sim"){
    console.log(nome + ' você será o motorista!')
} else {
    console.log(nome + ' você pode dirigir mas não tem um carro')
}
*/