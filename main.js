
var electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow

var mainWindow = null


app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:600,
        height:300,
        webPreferences:{nodeIntegration:true,enableRemoteModule:true}
    })
    mainWindow.webContents.openDevTools()
    require('./main/menu.js')
    mainWindow.loadFile('demo2.html')

    //BrowserView
    // var BrowserView = electron.BrowserView
    // var view = new BrowserView()
    // mainWindow.setBrowserView(view)
    // view.setBounds({x:0,y:120,width:400,height:400})
    // view.webContents.loadURL('https://www.baidu.com')

    mainWindow.on('close',()=>{
        mainWindow = null
    })
})


