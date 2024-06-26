
//****************************************************************1st************************************************************************ */

// let main=document.querySelector(".main-content")

// let newEle=document.createElement("div")

// newEle.innerText="New Section Added"

// main.append(newEle)







//********************************************************************2nd****************************************************************** */

// let main=document.querySelector(".main-content")
// let newEle=document.createElement("h2")
// let newText=document.createTextNode("Introduction")

// newEle.append(newText)

// main.prepend(newEle)





//********************************************************************3rd******************************************************************* */



// let article2=document.getElementById("article2")

// let newP=document.createElement("p")

// newP.innerHTML="Inserted Before Article 2"

// article2.before(newP)




//*******************************************************************4th******************************************************************* */



// let article1=document.getElementById("article1")
// let newP=document.createElement("p")
// newP.innerHTML="Inserted After Article 1"

// article1.after(newP)




//********************************************************************5th************************************************************* */



// let header=document.getElementById("header")

// let h1=document.createElement("h1")
// h1.innerText="Replaced Header"

// document.body.replaceChild(h1,header)





//******************************************************************6th****************************************************************** */



// let footer=document.getElementById("footer")

// let newfooter=document.createElement("footer")

// newfooter.innerHTML="New Footer Section"

// document.querySelector(".main-content").replaceChild(newfooter,footer)





//********************************************************************7th******************************************************************* */


// let header=document.getElementById("header")
// let newDiv=document.createElement("div")

// newDiv.innerHTML="Before Header"

// header.before(newDiv)




//***********************************************************************8th**************************************************************** */


// let footer=document.getElementById("footer")
// let newDiv=document.createElement("div")

// newDiv.innerHTML="after footer"

// footer.after(newDiv)




//*****************************************************************9th************************************************************************ */


// let newDiv=document.createElement("div")
 
//  newDiv.innerText="Append to Body"

//  document.body.append(newDiv)




//*******************************************************************10th******************************************************************* */




// let newDiv=document.createElement("div")
// newDiv.innerText="Prepend to Body"

// document.body.prepend(newDiv)







//*****************************************************************2.1********************************************************************** */



// let header=document.getElementById("header")

// let h1="<h1>Inserted Before Header</h1>"

// header.insertAdjacentHTML("beforebegin",h1)




//************************************************************2.2*************************************************************************** */

// let header=document.getElementById("header")
// let p="<p>Inserted after Header</p>"

// header.insertAdjacentHTML("afterend",p)



//***************************************************************2.3*********************************************************************** */


// let container=document.getElementById("container")
// let div="<div>Inserted At Start of Container</div>"

// container.insertAdjacentHTML("afterbegin",div)




//**********************************************************2.4****************************************************************************** */


// let container=document.getElementById("container")
// let div="<div>Inserted At End of Container</div>"

// container.insertAdjacentHTML("beforeend",div)





//************************************************************2.5************************************************************************** */

// let box2=document.getElementById("box2")
// let span="<span>Inserted Before Box 2</span>"

// box2.insertAdjacentHTML("beforebegin",span)




//*************************************************************2.6************************************************************************ */




// let box2=document.getElementById("box2")
// let span="Inserted After Box 2</span>"

// box2.insertAdjacentHTML("afterend",span)



//**********************************************************2.7************************************************************************* */

// let box3=document.getElementById("box3")

// document.querySelector(".content").removeChild(box3)




//***********************************************************2.8***************** *********************************************************/



// let h2=document.createElement("h2")
// let newtex=document.createTextNode("Inserted Before Footer")
// h2.appendChild(newtex)

// document.getElementById("footer").insertAdjacentElement("beforebegin",h2)



//*********************************************************2.9**************************************************************************** */


// let p="<p>Inserted After Footer</P>"
// document.getElementById("footer").insertAdjacentHTML("afterend",p)




//***********************************************************2.10************************************************************************** */


// let div=document.createElement("div")

// div.innerText="Appended to Body"

// document.body.append(div)