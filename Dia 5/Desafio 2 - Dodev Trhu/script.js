//Criando Variáveis
let valor
let quantidade
let opcao = parseInt(prompt("Bem vindo ao DoDev-thru, o que você deseja?" + "\n1 = Abastecer Gasolina; \n2 = Abastecer Álcool; \n3 = Calibrar os Pneus"))

//Criando Switchcase
switch(opcao){
    case 1:
        valor = parseInt(prompt("Digite o valor que deseja abastecer:"))
        quantidade = valor / 5
        console.log("Você abasteceu " + quantidade + " L de gasolina")
        break;
    case 2:
        valor = parseInt(prompt("Digite o valor que deseja abastecer:"))
        quantidade = valor / 3
        console.log("Você abasteceu " + quantidade + " L de álcool")
        break;
    case 3:
        console.log("Pneus calibrados com sucesso!")
        break;
    default:
        console.log("Insira um opção correta")
        break;
}