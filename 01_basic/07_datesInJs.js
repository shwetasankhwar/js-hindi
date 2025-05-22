//Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2025,8,3) //---count will start from 0 for month in single digit
//let myCreatedDate = new Date(2025,8,3,5,8)
//let myCreatedDate = new Date("2025-01-24")// -- count will start from 1 for month in double digit

let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${ newDate.getDate()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    
})
