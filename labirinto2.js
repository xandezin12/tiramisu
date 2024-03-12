const { clear } = require('console');
const { exit } = require('process');
const readline = require('readline');

// Labirinto representado como uma matriz de caracteres
const labirinto = [
    "##################################",
    "#    🚪                    x   ##",
    "#    ###   #####################",
    "#          #               #### ",
    "#    #   #   #############  ####",
    "#         #   #              ##",
    "#    #####   #   ###############",
    "#            #           ##    #",
    "#####   ##############   ##   #",
    "#       #     🏁#   #   ######",
    "#       #       #   #   #    ## ",
    "#       #       #   #   #   ### ",
    "#       #########   #   #  #### ",
    "#                     #   ###  ",
    "########################## ####"
];

// Posição inicial do herói
let posicaoHeroi = { linha: 1, coluna: 20 };

// Função para imprimir o labirinto no console com a posição do herói
function imprimirLabirinto() {
    limparConsole();
    for (let i = 0; i < labirinto.length; i++) {
        let linha = "";
        for (let j = 0; j < labirinto[i].length; j++) {
            if (i === posicaoHeroi.linha && j === posicaoHeroi.coluna) {
                linha += '😃'; // Representa o herói na posição atual
            } else {
                linha += labirinto[i][j];
            }
        }
        console.log(linha);
       
    }
}

// Função para verificar se uma nova posição é válida
function posicaoValida(linha, coluna) {
    return labirinto[linha][coluna] !== '#'; // Verifica se a nova posição não é uma parede
}

// Função para mover o herói
function moverHeroi(direcao) {
    let novaLinha = posicaoHeroi.linha;
    let novaColuna = posicaoHeroi.coluna;

    // Atualizar a posição de acordo com a direção
    switch (direcao) {
        case 'up':
            novaLinha--;
            break;
        case 'down':
            novaLinha++;
            break;
        case 'left':
            novaColuna--;
            break;
        case 'right':
            novaColuna++;
            break;
        default:
            return;
    }

    // Verificar se a nova posição é válida
    if (posicaoValida(novaLinha, novaColuna)) {
        posicaoHeroi.linha = novaLinha;
        posicaoHeroi.coluna = novaColuna;
        limparConsole();
        imprimirLabirinto();
    }
}

// Configurar a leitura de teclado
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Aguardar entrada do usuário para mover o herói
console.log("Use as setas do teclado para mover o herói.");
rl.input.on('keypress', function (str, key) {
 
    if (key.name=='up' || key.name=='down' ||key.name=='left' ||key.name=='right') {
        
        moverHeroi(key.name);
    }
});

// Imprimir o labirinto inicial no console
// Função para limpar o console
function limparConsole() {
    // Escrever caracteres de controle para limpar o console
    process.stdout.write('\u001b[2J\u001b[0;0H');
}
limparConsole();
imprimirLabirinto();
