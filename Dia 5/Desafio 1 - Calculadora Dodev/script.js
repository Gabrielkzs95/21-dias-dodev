//Criando Variáveis
let num1 = parseInt(prompt("Insira o primeiro número"));
let num2 = parseInt(prompt("Insira o segundo número"));
let opcao = parseInt(prompt("Escolha a operação que deseja realizar:" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"));

//Criando Switchcase
switch(opcao){
    case 1:
        console.log("Soma")
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log("Subtração")
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 3:
        console.log("Multiplação")
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;
    case 4:
        console.log("Subtração")
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;
    default:
        console.log("Insira um opção correta de 1 a 4")
        break;
}

