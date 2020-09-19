
const {Menu, BrowserWindow} = require('electron')
var template = [
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forcereload' },
            { role: 'toggledevtools' },
            { type: 'separator' },
            { role: 'resetzoom' },
            { role: 'zoomin' },
            { role: 'zoomout' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    {
        label:'天上人间洗浴会所',
        submenu:[
            {
                label:'精品spa',
                accelerator: 'ctrl+N',  //有点问题，字母变大写
                click:()=>{
                    var win = new BrowserWindow({
                        width:500,
                        height: 500,
                        webPreferences:{nodeIntegration:true,enableRemoteModule:true}
                    })
                    win.loadFile('yellow.html')
                    win.on("close",()=>{
                        win = null
                    })
                }
            },
            {label:'泰式按摩'},
        ]
    },
    {
        label:'大浪淘沙洗浴会所',
        submenu:[
            {label:'牛奶浴'},
            {label:'爱情拍拍手'},
        ]
    }
]

var m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)


