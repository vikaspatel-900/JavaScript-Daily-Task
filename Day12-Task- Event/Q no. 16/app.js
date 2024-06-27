let mytext=document.getElementById("test")

mytext.addEventListener("mouseenter",function(){
 mytext.classList.add("shadow")
})


mytext.addEventListener("mouseout",function(){
  mytext.classList.remove("shadow")
})
