const io = require('socket.io')();
const readlineSync = require('readline-sync');

const games = {};

io.on('connection', (socket) => {
    console.log('Novo jogador conectado');

    const playerId = socket.id;

    socket.on('joinGame', () => {
        const gameId = Object.keys(games).length + 1;
        games[gameId] = {
            players: [{ id: playerId, choice: null }],
            choices: [],
            results: [],
        };

        if (Object.keys(games[gameId].players).length === 2) {
            io.emit('gameStart');
        } else {
            console.log('Jogo esperando na porta 8080. Aguarde mais um jogador...');
        }
    });

    socket.on('makeChoice', () => {
        const gameId = Object.keys(games).find(gameId => games[gameId].players.find(player => player.id === playerId));
        const choice = parseInt(readlineSync.question('Escolha um número: '));
        games[gameId].players.find(player => player.id === playerId).choice = choice;

        if (games[gameId].players.every(player => player.choice !== null)) {
            const result = (games[gameId].players[0].choice + games[gameId].players[1].choice) % 2 === 0 ? 'par' : 'ímpar';
            games[gameId].results.push(result);

            io.emit('showResult', result);
            console.log('Resultado:', result);
        }
    });

    socket.on('disconnect', () => {
        console.log('Jogador desconectado');
        const gameId = Object.keys(games).find(gameId => games[gameId].players.find(player => player.id === playerId));
        if (gameId) {
            games[gameId].players = games[gameId].players.filter(player => player.id !== playerId);
            if (games[gameId].players.length === 0) {
                delete games[gameId];
            }
        }
    });
});

io.listen(8080, () => {
    console.log('Jogo esperando na porta 8080. Aguarde mais um jogador...');
});
