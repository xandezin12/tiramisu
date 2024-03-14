const readlineSync = require("readline-sync");

// Solicita uma entrada do usuário
var resposta = readlineSync.question("Você gosta do Alexandre? (sim/nao) ");

// Verifica a resposta do usuário e exibe uma mensagem correspondente
if (resposta.toLowerCase() === "sim") {
    console.log("Que legal! Jesus te ama!");
} else if (resposta.toLowerCase() === "nao") {
    console.log("Suas bolas irão explodir dia 25/04/24 às 20:34!");
} else {
    console.log("Responda direito, por favor.");
}
