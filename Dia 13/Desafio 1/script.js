// Criando Classe

class Computador {
    tipo;
    processador;
    video;
    armazenamento;
    memoriaRam;
    ssd;
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaRam = memoriaRam;
        this.ssd = ssd;
    }

    exibirInformacoes(){
        console.log("Tipo: " + this.tipo);
        console.log("Processador: " + this.processador);
        console.log("Video: " + this.video);
        console.log("Armazenamento: " + this.armazenamento);
        console.log("Memoria Ram: " + this.memoriaRam);
        console.log("SSD: " + this.ssd);
    }
}

//Exemplo de uso

const meuComputador = new Computador("Desktop", "Ryzen 5", "Dedicado", 1000, 16, true);
meuComputador.exibirInformacoes();




