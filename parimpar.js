// nosso par ou impar 2c-fenomenal
// exibir seja bem-vindo no console
console.log("sejam bem-vindo ao par impar");
// crio uma variavel teclado que representa
// interação com o teclado seja ele qual for
const t= require('readline-sync');
var nomejogador1 = t.question('digite nome do jogador1');
var nomejogador2 = t.question('digite nome do jogador2');
// Escolha de Par ou Ímpar
var escolha = t.question(nomejogador1+', você quer Par ou Ímpar? [P/I]:');
var numeroj1 =t.question('Por favor,  '+nomejogador1+' escolha seu número:[1..5]: ',
 {hideEchoBack: true, mask: require('chalk').magenta('\u2665')});
var soma =  int(numeroj1) + int(numeroj2);
if (soma % 2==0){
    resultado='par';
} else {
  resultado='impar'
} ;

/*
Este código é um programa JavaScript simples que permite que dois jogadores joguem um jogo "Par ou Ímpar" (que significa "Par ou Ímpar" em inglês). 
Aqui está uma explicação detalhada do código:

1. A instrução `console.log` exibe a mensagem "sejam bem-vindo ao par impar" no console, que significa "bem-vindo ao par ou ímpar".
2. A instrução `import { question } from 'readline-sync';` importa a função `question` do módulo `readline-sync`. Esta função é usada para obter a entrada do usuário na linha de comando.

3. Duas variáveis ​​`nomejogador1` e `nomejogador2` são definidas para armazenar os nomes dos dois jogadores. A função `question` é usada para solicitar ao usuário que insira os nomes.
4. A próxima seção do código solicita ao `nome jogador1` que escolha entre "Par" ou "Ímpar" (Par ou Ímpar) e armazena a escolha na variável `escolha`.

5. O programa então pede ao `nomejogador1` para escolher um número entre 1 e 5. 
A função `question` é usada com opções adicionais `{ hideEchoBack: true, mask: require('chalk').magenta('\u2665') }` 
para ocultar a entrada durante a digitação e exibir um símbolo de coração como máscara.

6. O programa calcula a soma dos números escolhidos por `nomejogador1` e `nomejogador2` e armazena na variável `soma`. No entanto, `numeroj2` não está definido no código fornecido, portanto resultaria em um erro.

7. O código então verifica se a soma dos números é par ou ímpar usando o operador de módulo `%`. Se a soma for divisível por 2 (ou seja, tiver resto 0), considera o resultado como "par" (par), caso contrário "ímpar" (ímpar).
No geral, este código tem como objetivo simular um simples jogo de “Par ou Ímpar” entre dois jogadores, onde eles escolhem números, e o programa determina se a soma dos números é par ou ímpar.
*/

