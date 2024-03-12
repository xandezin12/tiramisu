const io = require('socket.io-client');
const socket = io.connect('http://localhost:8080');

socket.emit('joinGame');
socket.on('gameStart', () => {
    console.log('O jogo começou!');
    console.log('Faça sua escolha.');
    socket.emit('makeChoice');
});

socket.on('showResult', (result) => {
    console.log('Resultado:', result);
});