
// Definindo a tabuada que queremos montar
const numero = Math.floor(Math.random()*10)+1;
// Utilizando o laço for para iterar de 1 a 10 (inclusive)
for (let i = 1;  i<= 100; i++) {
    // Multiplicando o número pelo contadclearor (i) para 
    //obter os resultados
    const resultado = numero * i;
    // Exibindo o resultado na console
    console.log(numero+" x "+i+"= "+resultado);
}