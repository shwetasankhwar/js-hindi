function calculateCartPrice(val1, val2, ...num1){
    return num1
// here ... means rest operator 
}
//console.log(calculateCartPrice(200, 400, 600, 500))

// const user = {
//     username : "shweta",
//     prices : 100
// }

function handleObject (anyObject){
console.log(`username is ${anyObject.username} and price is ${anyObject.price} `);

}
//handleObject(user)
handleObject({
    username : "shweta",
    price: 399
})

const myArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1]
    
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400,100, 600]));

