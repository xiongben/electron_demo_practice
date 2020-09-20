

const browserWindow = require('electron').remote.BrowserWindow
const {remote, shell, clipboard} = require('electron')
const fs = require('fs')



window.onload = function (){
    var btn = this.document.querySelector("#btn")
    var btn2 = this.document.querySelector("#btn2")
    var btn3 = this.document.querySelector("#btn3")
    var btn4 = this.document.querySelector("#btn4")
    var btn5 = this.document.querySelector("#btn5")
    var btn6 = this.document.querySelector("#btn6")
    var btn7 = this.document.querySelector("#btn7")
    var btn8 = this.document.querySelector("#btn8")
    var code = this.document.querySelector("#code")
    var image = this.document.querySelector("#images")

    btn.onclick = function (){
        newWin = new browserWindow({
            width: 500,
            height: 500
        })
        newWin.loadFile('yellow.html')
        newWin.on("close",()=>{
            newWin = null
        })
    }

    btn2.onclick = function (e){
        e.preventDefault()
        var url = "https://www.baidu.com"
        shell.openExternal(url)
    }

    btn3.onclick = function (e){
        e.preventDefault()
        var url = "https://www.baidu.com"
        window.open('./pop_page.html')
    }

    btn4.onclick = function (e){
        e.preventDefault()
        var dialog = remote.dialog
        dialog.showOpenDialog({
            title:"please choose a picture",
            filters:[{name:'img',extensions:['jpg','png']}],
            buttonLabel: '选择图片呀',
        }).then(res => {
            image.setAttribute("src",res.filePaths[0])
        }).catch(err =>{
            console.log(err)
        })
    }

    btn5.onclick = function (e){
        e.preventDefault()
        var dialog = remote.dialog
        dialog.showSaveDialog({
            title:"save file",
        }).then(res => {
            console.log(res)
            fs.writeFileSync(res.filePath,'xiong ben test now')
        }).catch(err =>{
            console.log(err)
        })
    }

    btn6.onclick = function (e){
        e.preventDefault()
        var dialog = remote.dialog
        dialog.showMessageBox({
            type:'warning',
            title:"去不去由你",
            message: "this is a message for test",
            buttons:['yes','no'],
        }).then(res => {
            console.log(res)

        }).catch(err =>{
            console.log(err)
        })
    }

    btn7.onclick = function (e){
        e.preventDefault()
        var opetion = {
            title: "news,this is news,get it!",
            body: "this is content,66666666",
        }
        new window.Notification(opetion.title,opetion)
    }

    btn8.onclick = function (e){
        e.preventDefault()
       clipboard.writeText(code.innerHTML)
        alert('copy success!')
    }
}

var rightTemplate = [
    {label:'粘贴',accelerator: 'ctrl+v',},
    {label:'复制',accelerator: 'ctrl+c',}
]

var menu1 = remote.Menu.buildFromTemplate(rightTemplate)

window.addEventListener('contextmenu',function (e){
    e.preventDefault()
    menu1.popup({window:remote.getCurrentWindow()})
})


window.addEventListener('message',(msg)=>{
    var mytext = this.document.querySelector("#mytext")
    mytext.innerHTML = JSON.stringify(msg.data)
})

//网络状况监听
window.addEventListener('online',function (){
    alert("网络好了啊")
})

window.addEventListener('offline',function (){
    alert("好像断网了啊")
})
