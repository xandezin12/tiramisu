const Speaker = require('speaker');
const fs = require('fs');

// Carregar o arquivo de áudio
const audioBuffer = fs.readFileSync('caminho/do/arquivo/audio.wav');

// Criar um novo Speaker
const speaker = new Speaker({
  channels: 1,          // Número de canais (1 para mono, 2 para estéreo)
  bitDepth: 16,         // Profundidade de bits por amostra (geralmente 16 ou 24)
  sampleRate: 44100     // Taxa de amostragem (geralmente 44100 Hz)
});

// Reproduzir o áudio
speaker.write(audioBuffer);

// Quando terminar, feche o speaker
speaker.end();