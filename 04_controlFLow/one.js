// if

// if (true) {
//     // code will be executed
// }
// if (false) {
//     // code will not be executed



// }

// const  isUserLoggedIn = true
// const temp = 41
// if (temp===40) {
//     console.log("less than 50");
    
// }
// else{
// console.log("temprature is greater than 50");
// }

//console.log("Executed");



//<isUserLoggedIn,>,<= , >= , == ,!= ,=== ,!==

// const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(` User power : ${power}`);      
// }
//   console.log(` User power : ${power}`);

const balance = 1000

// if (balance>500 ) console.log("test"),console.log("test2");// implicit scope -->single line

// if (balance < 500) {
//     console.log("less than 500");
    
    
// } else if (balance<750){
//     console.log("less than 500");
    
// } else if (balance<900){
//     console.log("less than 900");
    
// }else {
// console.log("less than 1200");

// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2==3 ) {
    console.log("Allow to buy courses");
    
}
if (loggedInFromGoogle|| loggedInFromEmail || guestUser) {
    console.log("Allow to log in");
    
}

// Nullish Coalescing Operator (??) : null ,  undefined

let val1;

//val1 = 5 ?? 10

//val1 =null ?? 10
//val1 = undefined ?? 5
val1 = null ?? 10 ?? 20



console.log(val1);


// terniary operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80"): console.log("less than 80");
;

