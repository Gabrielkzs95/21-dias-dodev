// Sistema que pergunte ao usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto

const temFome = prompt('Você está com fome? (Sim/Não)?');
const temDinheiro = prompt('Você tem dinheiro? (Sim/Não)?');
const restauranteAberto = prompt ('O restaurante está aberto? (Sim/Não)?')

if(temFome === "Não" || temDinheiro === "Não"){
    console.log('Hoje a janta será em casa!');
}else if (temDinheiro === "Sim" && restauranteAberto === "Sim"){
    console.log('Hoje o jantar será no seu restaurante preferido!')
}else {
    console.log('Peça um Delivery')
}

