
var electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow

var globalShortcut = electron.globalShortcut
var mainWindow = null


app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:600,
        height:300,
        webPreferences:{nodeIntegration:true,enableRemoteModule:true}
    })

    //全局注册快捷键
    globalShortcut.register('ctrl+e',()=>{
        mainWindow.loadURL('https://www.baidu.com')
    })
    //判断注册是不是成功
    let isRegister = globalShortcut.isRegistered('ctrl+e')?"Register Success" : "Register fail"
    // console.log(isRegister)

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


app.on('will-quit',function () {
    //注销全局快捷键
    globalShortcut.unregister('ctrl+e')
    globalShortcut.unregisterAll()
})
