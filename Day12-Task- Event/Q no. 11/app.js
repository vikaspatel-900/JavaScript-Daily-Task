let time=document.getElementById("time")


setInterval(function(){

let date=new Date()
let newtime=date.toLocaleTimeString()
time.innerHTML=newtime


},1000)