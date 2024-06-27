let userText=document.getElementById("test")
let myform=document.getElementById("myform")

myform.addEventListener("submit",function(){
  let a=userText.value 
  let date=new Date(a)
  document.write( "birthday Date :- " + date.getDate() + "<br>")
  document.write( "birthday month  :- " +date.getMonth() + "<br>")
  document.write( "birthday year  :- " +date.getFullYear() + "<br>")

 
})