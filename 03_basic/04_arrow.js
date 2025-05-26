// const user = {
//     username: "shweta",
//     price : "999",

//     welcomeMessage: function(){
// console.log(`${this.username}, welcome to website`);
// //console.log(this);

//     }
    
// }

// //console.log(this);user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

//console.log(this);

// function chai() 

// {
//     let username = "shweta"
//     console.log(this.username);

// }
// chai()

// const chai = function(){
//     let username = "shweta"
//     console.log(this.username);


// }
// const chai = ()=>{
//     let username = "shweta"
//     console.log(this);


// }

  //  chai()

//()=>{ arrow function}

// const addTwo= (num1,num2)=> {
    
// return num1+num2
// }


//const addTwo= (num1,num2)=> num1+num2

//const addTwo= (num1,num2)=>( num1+num2)
// const addTwo= (num1,num2)=>({username: "shweta"})

// console.log(addTwo(3,4));

// const myArray =[2,3,4,5]

// myArray.forEach(()=>{})

//IIFE(Immediately Invoked Function Expression)

(function chai (){
    //named IIFE
    console.log(`DB CONNECTED`);  
})();
//(function defination)(execution call)    ()()

((name)=>{ 
    // unnmaed IIFE
    console.log(`DB CONNECTED TWO ${ name}`);
    
})(`Shweta`)