// premitive datatypes- 7 catagories
//1: string, 2: Number, 3:Boolean, 4:Null , 5:Undefined , 6:symbol, 7:Big int

//const { captureOwnerStack } = require("react");

// const score = 100;
// console.log(typeof score);

// const scoreValue = 100.3;
// console.log(typeof scoreValue);

// //const score = false;



//  const id = Symbol('123')
// console.log(typeof id);

//  const anotherID = Symbol('123')
// console.log( typeof anotherID);

// console.log(id == anotherID);

// const bigNumber = 567989433448n
// console.log(typeof bigNumber);

// const heros = ["shaktman","naagraj","doga"]//array
// console.log(typeof heros);

 

// let myObj = {
// //objects
// name: "shweta",
// age : 27,

//  }
//  console.log(typeof myObj);
 

//  const myFunction = function() {
//     console.log("Hello World");
    
//  }

//  console.log(typeof myFunction);
 
 
 

//Reference type(Non Premitive)--
// Arrays, Objects, Functions



// ++++++++++++++++++++++++++++++++++++++++

// Stack ,Heap - 2 type of memory
// stack- (Primitive), Heap(Non Primitive)


let myYouTubename= "Shwetayt.com"
let anotherName = myYouTubename
anotherName = "ChaiAndCode"
console.log(anotherName);
console.log(myYouTubename);


let userOne = {

    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email ="shweta@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

