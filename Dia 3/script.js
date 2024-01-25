// Definindo Variáveis
let nome = "";
let idade = 0;
let altura = 0;
let peso = 0;

//Sistema para obter informações
nome = prompt("Digite seu Nome: ");
idade = parseInt(prompt("Digite sua Idade: "));
altura = parseFloat(prompt("Digite sua Altura?: "));
peso = parseInt(prompt("Digite seu peso?"));

//Ano de Nascimento
let anoNasc = 0;
anoNasc = 2024 - idade

//Cálculo IMC
let imc = 0;
imc = (peso / (altura * altura)).toFixed(2);

//Mensagem para usuário
console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg, seu IMC é " + imc + "kg/m2")