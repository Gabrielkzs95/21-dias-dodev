// Criando Variáveis

let array = [];
let arrayInvertido = [];

//Populando Array
for(let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número"))
    array[i] = numero
}

console.log("Array original: " + array)

// Invertendo Array
let contador = 4
for(let i = 0; i < 5; i++){
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido: " + arrayInvertido)