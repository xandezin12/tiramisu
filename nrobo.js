// este programa usa as bibliotecas readline-sync, chalk e figlet // chalk permite mensagens coloridas no console
// figlet transforma texto em arte ASCII, estou usando para dar graça ao nosso Jogo. // comandos de importação
// npm i figlet // npm install chalk@4.0.0 // duvidas sobre instalação pergunte ao seu professor
const readline = require('readline-sync');
const chalk = require('chalk');
const  figlet = require('figlet');
// Início do jogo
const numeroAleatorio = Math.floor(Math.random() * 100) +1;
let tentativas = 0;
let palpite;
while (true) {
    console.log(chalk.green.bold('Bem-vindo ao Jogo de Adivinhação!'));
    console.log(chalk.cyan('Vou pensar em um número entre 1 e 100. Tente adivinhar!'));
   palpite = parseInt(readline.question(chalk.blue('Digite seu palpite: ')));
  if (palpite === numeroAleatorio) {
    console.log(chalk.green.bold('Parabéns! Você acertou o número.'));
    // crie um while infinito uso a palavra break para quebrar ele...
    break;
  } else if (palpite < numeroAleatorio) {
    console.log(chalk.red('Tente um número maior.'));
  } else {
    console.log(chalk.red('Tente um número menor.'));
  }
  tentativas++;
}
console.log(chalk.yellow.bold(`Número de tentativas: ${tentativas}`));
figlet('ROBOT - '+tentativas, function(err, data) {
    if (err) {
      console.log('Algo deu errado ao exibir o robô...');
      console.dir(err);
      return;
    }
    console.log(chalk.yellow(data));
  });


