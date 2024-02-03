// Criando Variáveis

let nomes = [];
let senhas = [];
let contador = 0;

let continuar = true;

// Criando Loop
while(continuar){

    let opcao = prompt("O que deseja fazer? 1 - Cadastro; 2 - Login; 3 - Excluir; 4 - Encerrar")

    switch (opcao) { //cadastro
        case "1":
            nomes[contador] = prompt("Qual o nome?");
            senhas[contador] = prompt("Qual a senha?");
            contador++;
            console.log("Usuário: " + nomes + " Senhas: " + senhas)
            break;

        case "2": //login
            let nome = prompt("Qual o nome?");
            let senha = prompt("Qual a senha?");
            let loginValido = false;

            for (let i = 0; i < nomes.length; i++) {
                if (nome == nomes[i] && senha == senhas[i]){
                    loginValido = true;
                }
            }

            if (loginValido) {
                alert("Login feito com sucesso. Bem-Vindo!");
            } else {
                alert("Login ou senha incorretos");
            }
            break;

        case "3": //exclusão
            let nomeExcluir = prompt("Qual o nome que deseja excluir?");
            let nomesAux = [];
            let senhasAux = [];
            let contadorAux = 0;

            for (let i = 0; i < contador; i++) {
                if (nomeExcluir == nomes[i]) {
                    alert("Cadastro excluído com sucesso");
                } else {
                    nomesAux[contadorAux] = nomes[i];
                    senhasAux[contadorAux] = senhas[i];
                    contadorAux++;
                }
            }

            nomes = nomesAux;
            senhas = senhasAux;
            contador--;

            break;


        case "4":
            continuar = false;

            break;

        default:
            console.log("Opção inválida, escolha outra")

            break;
    }
}
    


