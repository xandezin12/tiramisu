//rolar quantos dados o// usuario quiser
let par=0;
let impar=0;
console.log("roll a dices");
const entradateclado = require('readline-sync');
let nvezes = entradateclado.question("quantos dados vc vai rolar:[1---10]");
for (let rodada = 1; rodada<=nvezes; rodada++) {
    //bloco vai ser repetido nvezes vezes 
    let dado = Math.floor(Math.random() *6)+1;
    console.log('dado numero '+rodada+' rolou um :'+dado);
    if (dado%2==0){
     // bloco par
        par++;
    }else{
     // bloco impar
        impar++;
    }
}
console.log("total de pares :"+par);
console.log("total de impares :"+impar);


// contar e exibir quantas vezes deu o numero 6 e quantas vezes deu o numero 1