

const browserWindow = require('electron').remote.BrowserWindow
const {remote, shell} = require('electron')




window.onload = function (){
    var btn = this.document.querySelector("#btn")
    var btn2 = this.document.querySelector("#btn2")
    var btn3 = this.document.querySelector("#btn3")
    var btn4 = this.document.querySelector("#btn4")
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
