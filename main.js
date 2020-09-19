
var electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow

var mainWindow = null


app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:300,
        height:300,
        webPreferences:{nodeIntegration:true}
    })
    mainWindow.loadFile('index.html')
    mainWindow.on('close',()=>{
        mainWindow = null
    })
})


