let userinput=document.getElementById("text");
let btn=document.getElementById("btn")
let result=document.getElementById("result")


let num='';
let fact=1;

userinput.addEventListener("change",function(a){
  num=Number(userinput.value)
  fact=1;
})



btn.addEventListener("click",function(){
  for(let i=num; i>=1; i--){
      fact=fact*i
  }
  
result.innerHTML=`Factorial :- ${fact}`
  
})



