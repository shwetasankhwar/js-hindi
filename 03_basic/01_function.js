
function sayMyName(){
console.log("S");
console.log("H");
console.log("W");
console.log("E");
console.log("T");
console.log("A");


}
//sayMyName() // refrence(execution)
//sayMyName//refrence

//function addTwoNumbers (number1,number2/*parameter-input in defintion of function*/){
 //   console.log(number1 + number2);
    

// }

//function addTwoNumbers (number1,number2){

    // let result= number1 + number2
    //  console.log("hitesh");
    // return result// after using result we can't print anything in function
   
   // return number1 + number2
    
//}
//const result = addTwoNumbers(3,5/*argument- passed value in time of function call */)

//console.log("result: ",result);

function loginUserMessage(userName ="sam"){
    if(!userName/* undefined and empty string gives false as result*/){
console.log("please enter a username");
 return

    }
  return `${userName} just logged in`

}
//console.log(loginUserMessage("shweta"))
//console.log(loginUserMessage(""))
console.log(loginUserMessage())