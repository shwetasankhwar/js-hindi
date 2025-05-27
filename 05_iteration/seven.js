const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => { return num + 1})
// console.log(newNums);

// const newNums =[]
//  myNums.forEach((num)=> { 
//     if (num) {
//       return newNums.push( num+1)  
//     }
//    // console.log(newNums);
// });
// console.log(newNums);

const newNums = myNums
.map((num) => num * 10)
.map((num) => num + 1)
.filter((num)=> num>=40)

console.log(newNums);