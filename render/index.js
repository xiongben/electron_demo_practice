
var fs = require('fs')

window.onload = function (){
    var btn = this.document.querySelector("#btn")
    var mylist = this.document.querySelector("#namelist")
    btn.onclick = function (){
        fs.readFile("person.txt",(err, data)=>{
            mylist.innerHTML = data
        })
    }
}






