let btn=document.getElementById("btn")
let myform=document.getElementById("myform")


btn.addEventListener(Submit,function(){
    document.getElementById("getName").innerHTML=document.getElementById("name").value
    document.getElementById("getEmail").innerHTML=document.getElementById("email").value
})