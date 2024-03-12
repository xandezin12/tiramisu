
//Para tocar notas musicais em Node.js, você pode usar a biblioteca Tone.js, que oferece uma API poderosa e fácil de usar para gerar e manipular áudio em tempo real. Aqui está um exemplo de como você pode usar o Tone.js para tocar notas:


const Tone = require('tone');

// Crie um sintetizador
const synth = new Tone.Synth().toDestination();

// Função para tocar uma nota
function tocarNota(nota, duracao) {
    synth.triggerAttackRelease(nota, duracao);
}

// Tocar a nota Dó (C4) por 1 segundo
tocarNota('C4', '1');