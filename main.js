const path = require('path');  // працює з файлами всередині проекту
const url = require('url');  // відстежує адреса
const {app, BrowserWindow} = require('electron');  // в Electron робим app&BrowserWindow

let win;

//  Функція створює вікно, яке відображатиметься на екрані
function createWindow() {
  win = new BrowserWindow({
    width: 700,
    height: 500,
    icon: __dirname + "/img/icon.png"
  });

//  Прикріпляєм файл до win
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'), // добавили index.html
    protocol: 'file:',
    slashes: true
  }));

  //win.webContents.openDevTools();  // В прозі відкривається вікно Console від Google

//  Закриває вікно
  win.on('closed', () => {
    win = null;
  });
}

//  Запуск програми(коли запускаєм спрацьовує ф-ція CreateWindow)
app.on('ready', createWindow);

//  Повністю закриває, виходить з програми
app.on('window-all-closed', () => {
  app.quit();
});
