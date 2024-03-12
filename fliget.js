const figlet = require('figlet');

// Texto que queremos converter em arte ASCII
const texto = ' Hello, Figlet!';
const texto2 ='😊 Hello, Emoticons! 😎';

// Usando o método 'text' do figlet para converter o texto em arte ASCII
figlet.text(texto, function(err, data) {
    if (err) {
        console.log('Algo deu errado...');
        console.dir(err);
        return;
    }
    // Exibindo a arte ASCII gerada
    console.log(data);
});

figlet.text(texto2, function(err, data) {
    if (err) {
        console.log('Algo deu errado...');
        console.dir(err);
        return;
    }
    // Exibindo a arte ASCII gerada
    console.log(data);
});