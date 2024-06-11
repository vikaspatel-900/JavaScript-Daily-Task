//----------------------------------------------------------------1st-------------------------------------------------------------

// let ary=new Array();

// ary.push(22,45,66,89,67);
// ary.unshift(54,98,90,77,61)
// document.write(ary)





//---------------------------------------------------------------------2nd------------------------------------------------------------


// let ary=[21,56,98,45,12,23,56,51,27,63]

// document.write(ary+"<br>")
// ary.pop();
// ary.shift();
// document.write(ary+"<br>"+ary.length)


//---------------------------------------------------------------3rd-------------------------------------------------------------------


// let strarray=["html","css","javascript","react.js"];
// document.write(strarray+"<br>")

// strarray.splice(2,2,"vikas","rahul","Arjun");

// document.write("<ol>")
// for(let i=0; i<strarray.length; i++){
//     document.write("<li>"+strarray[i]+"</li>")
// }
// document.write("<ol>")



//----------------------------------------------------------------5th--------------------------------------------------------


// let ary=[32,62,"vikas",78,91,12]
// document.write(typeof(ary)+"<br>")

// let b=ary.toString();

// document.write(typeof(b))




//---------------------------------------------------------------6th----------------------------------------------------------------




// let ary=[34,343,987,122,543,564,212,654,433,435]

// document.write(ary+"<br>")

// let newary=ary.slice(3,7)
// document.write(newary)




//-----------------------------------------------------------------7th-------------------------------------------------------------


// let ary=["Html","css","Javascript","React.js","Node.js","mongodb"]

// document.write("<ol>")
// for(let i=0; i<ary.length; i++){
//     document.write("<li>"+ary[i]+"</li>")
// }
// document.write("</ol>")


//-----------------------------------------------------------------8th--------------------------------------------------------------


// let myary=["Html","Css","Javascript","React.js","Node.js","Mongodb"];

// document.write(myary+"<br>")

// myary.sort();

// document.write("<ul>")
// for(let i=0; i<myary.length; i++){
//     document.write("<li>"+myary[i]+"</li>")
// }
// document.write("</ul>")





//-------------------------------------------------------------------9th---------------------------------------------------------------


// let myary=[34,65,23,56,87,43,31,90,41,25]

// document.write(myary+"<br>")

// myary.sort((a,b)=>a-b);

// document.write("<ol>")
// for(let i=0; i<myary.length; i++){
//    document.write(" <li> "+ myary[i] +" </li> ")
// }
// document.write("</li>")




//---------------------------------------------------------------10th----------------------------------------------------------------------


// let myary=[34,65,23,56,87,43,31,90,41,25];
// document.write(myary+"<br>")

// myary.sort((a,b)=>b-a);

// document.write("<ol>")
// for(let i=0; i<myary.length; i++){
//    document.write(" <li> "+ myary[i] +" </li> ")
// }
// document.write("</ol>")



//---------------------------------------------------------------12th-----------------------------------------------------------------------



// let myary=["red","green","blue","yellow","orange","black"];

// document.write(myary+"<br>")

// let b=myary.join(" + ")
// document.write(`"${b}"`)


//------------------------------------------------------------13th-----------------------------------------------------------------------------



// let ary=[6,8,-4,5,7,-3,2,-2,4,-1]

// ary.sort((a,b)=>a-b);

// document.write(ary)





//-------------------------------------------------------------14th--------------------------------------------------------------------------




// let ary=[32,34,"a",56,21,"a",90,12,"a",89,"a",23,45,"a",52];

// let count=0;

// for(let i=0; i<ary.length; i++){
//     if(ary[i]=="a"){
//         count=count+1
//     }
// }

// document.write(`a ( ${count} times )`)



//--------------------------------------------------------------17th--------------------------------------------------------------------


// let ary1=[32,51,82,15,29,71];
// let ary2=[56,21,76,93];

// let newary=new Array();

// const merge=(a,b)=>{
//      newary=a.concat(b);
//      return newary
// }

// merge(ary1,ary2)

// document.write(newary)



//---------------------------------------------------------------19th------------------------------------------------------------------


// let ary=[45,74,12,37,29,18,81,62];

// const remove_array_element=(ary,e)=>{
//         for(let i=0; i<ary.length; i++){
//             if(ary[i]===e){
//                 ary.splice(ary[i],1)
//             }
//         }
// }

// document.write(remove_array_element(ary,12))



//--------------------------------------------------------------20----------------------------------------------------------------------


// let ary=[45,74,12,37,29,18,81,62];

// const contains=(ary,e)=>{
//      for(let i=0; i<ary.length; i++){
//         if(ary.includes(e)){
//             return true
//         }

//     else{
//         return false
//     }
//      }
// }


// document.write(contains(ary,26))
