let btn=document.getElementById("btn")
let fruits=document.getElementById("fruits")
let option=document.querySelectorAll("option")


btn.addEventListener("click",function(){
    fruits.removeChild(option[1])
    fruits.removeChild(option[2])
    fruits.removeChild(option[3])
    fruits.removeChild(option[4])
})