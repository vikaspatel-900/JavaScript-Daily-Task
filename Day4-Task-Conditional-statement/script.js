// let age=prompt("Please Enter Your age");
//   age=Number.parseInt(age)

//   if(age>=18){
//     document.write("You are old enough to drive.")
//   }

//   else{
//     document.write("You are left with "+ (18-age ) +" years to drive.")
//   }




  // ---------------------------------2nd Q -------------------------------------------------------------


//   let my_age=25;
//   let your_age=prompt("Please Enter Your Age");
//      your_age=Number.parseInt(your_age);

//      if(your_age>my_age){
//         document.write("You are " + (your_age - my_age)+ " years older than me.")
//      }

//      else if(your_age===my_age){
//         document.write("Your age is equal to me")
//       }

//       else{
//         document.write("You are " + (my_age - your_age)+ " years younger than me")
//       }



//-------------------------------------------3rd Q ------------------------------------------

// let a=4;
// let b=3;

// if(a>b){
//     document.write((a)+ " is greater than " + (b))
// }




//---------------------------------------------4th Q ----------------------------------------



// let num=prompt("Enter your number");
//     num=Number.parseInt(num);

//     if(num%2==0){
//         document.write((num) + " is even number")
//     }

//     else{
//         document.write((num) + " is not even number")
//     }




//-----------------------------------5th Q-----------------------------------------------


let marks=prompt("Please Enter Your Marks");
    marks=Number.parseInt(marks);

    switch(true){
        case(marks>=80 && marks<=100):
        document.write("You Got The Grade A")
        break;

        case(marks>=70 && marks<=79):
        document.write("You Got The Grade B")
        break;

        case(marks>=60 && marks<=69):
        document.write("You Got The Grade C")
        break;

        case(marks>=50 && marks<=59):
        document.write("You Got The Grade D")
        break;


        case(marks>=0 && marks<=49):
        document.write("You are faild")
        break;


        default:
            document.write("Please enter valid marks")
    }










    