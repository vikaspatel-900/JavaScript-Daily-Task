let userinput=document.getElementById("text");
let exponent=document.getElementById("text2")
let btn=document.getElementById("btn")
let form=document.getElementById("form")

form.addEventListener("submit",function(){
  let a=userinput.value
  let b=exponent.value

  let d=a**b
  alert(d)
})
