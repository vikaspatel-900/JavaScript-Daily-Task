//---------------------------------------------------------1st---------------------------------------------------------



// let ary=[312,543,564,754,876,324,643,244,765];

// document.write("<ol>")
// for(let i=0; i<ary.length; i++){
//     document.write("<li> "+ ary[i] + " </li>")
// }

// document.write("</ol>")



//------------------------------------------------------------2nd----------------------------------------------------------------


// let ary=["html","css","javascript","react.js","node.js"]


// document.write("<ul>")
// for(let i=0; i<ary.length; i++){
//     document.write("<li> "+ ary[i] + " </li>")
// }

// document.write("</ul>")



//----------------------------------------------------------3rd---------------------------------------------------------------------


// let ary=[10,20,30,40,50,60,70,80,90]

// ary.forEach((e)=>{
//     document.write((e*e)+ "<br>")
// })




//-----------------------------------------------------------------4th--------------------------------------------------------------




// let ary=["html","css","javascript","react.js","node.js"];

// let b=ary.join(" - ")

// document.write(b)



//----------------------------------------------------------------------5th--------------------------------------------------------------



// let ary=[10,20,30,40,50,60,70,80,90];

// document.write("<ul>")
// ary.forEach((e,i)=>{
//     document.write("<li>"+i + ") " + e +"</li>")
// })
// document.write("</ul>")




//---------------------------------------------------------------------6th-------------------------------------------------------------------



// let ary=new Array(8);

// for(let i=0; i<ary.length; i++){
//     ary[i]=prompt("Enter array element")
// }

// ary.forEach((e)=>{
//     document.write(e+ "<br>")
// })


//---------------------------------------------------------------------7th------------------------------------------------------------------


// let ary=[23,34,56,67,98,52,49,98,71,51,79,83,62,49,47,21]

// const check_num=(ary,e)=>{
//       for(let i=0; i<ary.length; i++){
//         if(ary[i]===e){
//             document.write(`${e} is present in ${i} index of this array` + "<br>")
//         }
//       }
// }


// check_num(ary,52)






//---------------------------------------------------------------------------8th----------------------------------------------------------------



// let ary=[32,65,43,87,12,26,91,52,63,31,21,42];

// let b=ary.sort(sorting)

// function sorting(a,b){
//     return a-b
// }

// document.write(b)




//-------------------------------------------------------------------9th--------------------------------------------------------------


// let fruits=["orange","banana","apple","pineapple","strawberry","mango","kiwi","papaya"]

// let b=fruits.sort()

// document.write(b)



//------------------------------------------------------------10th-----------------------------------------------------------------



// let ary=[10,20,30,40,50,60,70,80,90]

// // let sum=ary.reduce((a,b)=>{
// //     return a+b
// // })

// // document.write(sum)


// let average=ary.reduce((a,b)=>{
//     return 
// })


// document.write(average)




//-----------------------------------------------------------------11th-------------------------------------------------------------


// let ary=[32,34,56,67,54,56,76,34]

// let b=ary.every((e)=>{
//     return e%2==0
// })

// document.write(b)





//--------------------------------------------------------------------13th-----------------------------------------------------------


// let ary=new Array(10);

// for(let i=0; i<ary.length; i++){
//     ary[i]=prompt("Enter array element value")
// }

// let b=ary.sort((a,b)=>a-b)


// document.write(b)




//--------------------------------------------------------------------14th------------------------------------------------------------



// let ary=new Array(8);

// for(let i=0; i<ary.length; i++){
//     ary[i]=prompt("Enter Array Element" )
// }

// let b=ary.sort((a,b)=>a-b)
// document.write(b+ "<br>")
// document.write(`Minimum Number of Array = ${b[0]}`+ "<br>")
// document.write(`Miximum Number of Array = ${b[b.length-1]}`+ "<br>")




//-----------------------------------------------------------------15th--------------------------------------------------------------



// let ary=[32,45,65,87,54,76,23,54,21,90,86,56,79,64,83]

// let even_num=ary.filter((e)=>{
//     return e%2==0
// })

// document.write(even_num+ "<br>")




// let odd_num=ary.filter((e)=>{
//     return e%2!=0
// })

// document.write(odd_num)



//-----------------------------------------------------------------------16th----------------------------------------------------------



// let ary=new Array(8);

// let myfun=function(ary){
//        for(let i=0; i<ary.length; i++){
//         ary[i]=prompt("Please enter array element")
//        }

//        return ary
// }

// document.write(myfun(ary))




//-----------------------------------------------------------------19th-----------------------------------------------------------------


// let user_num=prompt("Please Enter A Number");
// let factorial=1

// for(let i=1; i<=user_num; i++){
//     factorial=factorial*i
// }


// document.write(factorial)


