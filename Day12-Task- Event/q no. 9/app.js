let userText=document.getElementById("test")
let myform=document.getElementById("myform")

myform.addEventListener("submit",function(){
  let a=userText.value 
console.log(a)
  document.write("Length Of UserText :- " + a.length + "<br>")
  document.write("UpperCase Of UserText :- " + a.toUpperCase() + "<br>")
  document.write("LowerCase Of UserText :- " + a.toLowerCase() + "<br>")
  for(let i=0; i<=a.length-1; i++){
    let b=a.toLowerCase()
    if(b.includes("w")){
      document.write("w is present of this string :-  <br>" )
      break
    }
   
  }


  document.write("alphabet present at index 4 :- " + a[4] + "<br>")

  document.write(a.toString().split(' '))
  
})