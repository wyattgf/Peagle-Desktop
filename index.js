const path = require('path');
const electron = require('electron');


const { app} = electron;


app.on('ready', () => {

  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);


});

