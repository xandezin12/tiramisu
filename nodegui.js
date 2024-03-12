const { QMainWindow, QPushButton, QLabel } = require('@nodegui/nodegui');

const win = new QMainWindow();
win.setWindowTitle('NodeGUI Example');

const button = new QPushButton();
button.setText('Clique Aqui');
button.addEventListener('clicked', () => {
    label.setText('Olá, Mundo!');
});

const label = new QLabel();
label.setText('Aguardando clique no botão...');

win.setCentralWidget(label);
win.setCentralWidget(button);
win.show();

global.win = win; // Mantém a janela aberta enquanto o aplicativo estiver em execução
