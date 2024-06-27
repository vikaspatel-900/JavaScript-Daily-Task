let userinput=document.getElementById("text");
let btn=document.getElementById("btn")
let form=document.getElementById("form")

form.addEventListener("submit",function(){
  let a=userinput.value 
  let b=a.toString().split('').reverse().join('')

  if(a===b){
    alert(`${a} is pallindrome number`)
  }

  else{
    alert(`${a} is not pallindrome number`)
  }
})