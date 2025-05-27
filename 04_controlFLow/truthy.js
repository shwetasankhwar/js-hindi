//const userEmail = "shweta@gmail.com"

//const userEmail=""
const userEmail=[]

if (userEmail) {
    console.log("Got User Email");
    
}
else {
    console.log("Dont have user email");
    
}

// falsy values 
// false, 0, -0, BigInt 0n,"", null, undefined,NaN


// truthy value
// "0",'false', " ", [],{},function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
    // to check empty array
}

const emptyObj = {}

    if (Object.keys(emptyObj).length=== 0) {
       console.log("Object is Empty");
        
    }
 
