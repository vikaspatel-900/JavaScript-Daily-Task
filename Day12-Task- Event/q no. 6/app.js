let userinput=document.getElementById("text");
let btn=document.getElementById("btn")
let form=document.getElementById("form")

form.addEventListener("submit",function(){
  let a=userinput.value 
  
  let b=a.toString().split('')
  console.log(b)
  let sum=0;
  b.map((e)=>{
    return sum=sum+Number(e)
  })

  alert(sum)
})