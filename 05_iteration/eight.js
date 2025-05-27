const myNums =[1,2,3]

// const myTotal = myNums.reduce(function (acc,carVal){ 
//     console.log(`acc:${acc} and carval ${carVal}`);
    
//     return acc + carVal
    
// }, 0)
// console.log(myTotal);


// const myTotal= myNums.reduce((acc, carVal)=> acc+carVal,0)

// console.log(myTotal);
// console.log(`acc:${acc} and carval ${carVal}`);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python",
        price : 999
    },
    {
        itemName : "mobile course",
        price : 12999
    },
    {
        itemName : "c++ course",
        price : 1999
    },
    {
        itemName : "dataScience course",
        price : 13999
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
