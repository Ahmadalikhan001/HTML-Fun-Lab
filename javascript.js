// For loop 
// for (let i= 0 ; i<10 ; i++){
//     console.log(i);
// }
// for (i =10 ; i>0 ; i--){
//     console.log(i);
// }

//while Loop 
// let j=0 ;
// while (j<10){
//     console.log(j);
//     j+=1;
// }
// let j=10;
// while (j>0){
//     console.log(j)
//     j-=1
// }

// do while loop

// let k = 0;
// do {
//     console.log(k + 1);
//     k += 1;
// } while (k < 10);

// let k1 =10 ;
// do {
//     console.log(k1)
//     k1 -= 1;
// } while (k1>0);

// const a =["Apple","Banana","Orange","Mango"];
// let i = 0;
// while (i < a.length){
//     console.log(a[i])
//     i++
// }

//Practices Example 
// let i = 1
// do {
//     console.log (i)
//     i++
// } while (i<=5)
    // let i = 5
    // do {
    //     console.log(i)
    //     i--
    // } while (i>=0)


// for (let i=0; i<10; i++){
//     console.log (i)
// }
// for (let a= 10; a>0; a--){
//     console.log(a)
// }

// for (let a=10; a>=0; a--){
//     console.log(a)
// }

// let a=0;
// while(a<10){
//     console.log(a)
//     a++
// }

// let a=10;
// while(a>0){
//     console.log(a)
//     a--
// }

// let k= 10;
// do {
//     console.log(k)
//     k--
// } while(k>0);


/* Closure: a clouser is an inner function that has access to the 
outer(enClosing) function Variable
There are three type of Scopes.1) Local scope 2) Outer Functions Scope 3)Global Scope 
For Example 

*/
// let i =10;
// function Show(){
//     let j= 20
//     console.log(j,i)

// }

// Show();


// function Show2(){
//     let j= "j is a Local Variable of Outer Function";
//     console.log(j);
//     function InnerFun (){
//         let k = "K is a Local variable of inner Function";
//         console.log(k)
//         console.log(j)
//     } 
//     InnerFun();
// } 
// Show2();
/* Note We cannot Called k which is the inner Function Variable in Outer Function .
Remember inner function Can not access inner function variable but Inner function access the outer function variable
*/

// Function 
// There are three Typr of function in JavaScript 
// 1) Function Declaration 
// 2) Function Expresion
// 3) Arrow Function

// Function Declaration Example
function AnyName(){
    //here you Write any logice for example
    console.log("Pakistan Zindabad") 
} 
 //Calling The Above Function.
 AnyName();
 // The above Type of Function Is called Function Delaraction 

 // Function Expresion Example 

 let Any_Name = function(){
    // You write your Logice here For Example 
    console.log("Pakistan Zindabad")

 }
 // function Calling 
 Any_Name()

 // Arow function Example

 const Any_name = ()=>{
    // write your logice here for example 
    console.log("Pakistan Zindabad")
 }
 //function Calling
 Any_name()

 