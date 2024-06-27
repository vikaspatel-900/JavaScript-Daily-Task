let arylength=prompt("Enter Array length")

let ary=new Array();
ary.length=arylength

for(let i=0; i<ary.length; i++){
  ary[i]=prompt("Enter a number for Array")
}


//************************************************************************orderd list*************************************************** */

document.write("<ol>")
ary.forEach((e)=>{
  document.write("<li>"+ e + "</li>")
})
document.write("</ol>")




let b=ary.sort((a,b)=>a-b)

document.write(b)

//*******************************************************************unorderd list***************************************************** */


document.write("<ul>")
ary.forEach((e)=>{
  document.write("<li>"+ e + "</li>")
})
document.write("</ul>")




//*************************************************************************sum************************************************************** */

let sum=0

ary.forEach((e)=>{
  sum=sum+Number(e)
})
document.write("Sum of array :- " + sum +"<br>")


//************************************************************maximu******************************************************************** */



document.write( "Maximum number of array :- " + b[ary.length-1] + "<br>")


//****************************************************************minimum************************************************************* */



document.write( "Manimum number of array :- " + b[0] + "<br>")



//*********************************************************all even**************************************************************** */

let Alleven=ary.every((e)=>{
    return e%2==0
})

document.write("All numbers are even :- "+ Alleven + "<br>")


//**********************************************************all odd***************************************************************** */


let Allodd=ary.every((e)=>{
  return e%2!=0
})

document.write("All numbers are od :- "+ Allodd + "<br>" )



//*********************************************************even number array******************************************************* */


let evenary=ary.filter((e)=>{
  return e%2==0
})


document.write("Even number Array :- " + evenary + "<br>")



//**************************************************************odd number array****************************************************** */



let oddary=ary.filter((e)=>{
  return e%2!=0
})

document.write("Odd number Array :- "+oddary)