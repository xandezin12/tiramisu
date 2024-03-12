const player = require('play-sound')();

// Caminho para o arquivo MP3
const caminhoArquivoMP3 = 'caminho/do/arquivo/audio.mp3';

// Reproduzir o arquivo MP3
player.play(caminhoArquivoMP3, (erro) => {
    if (erro) {
        console.error('Erro ao reproduzir o arquivo:', erro);
    } else {
        console.log('Arquivo reproduzido com sucesso!');
    }
});