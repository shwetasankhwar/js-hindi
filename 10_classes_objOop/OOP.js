const user = {
    username: "shweta",
    logInCount: 8,
    signIn : true,

    getUserDetails : function(){
       // console.log("Got user details from database");
      // console.log(`username:${this.username}`);
       console.log(this);
       
        
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


//const promiseOne = new Promise()
//const date = new Date()

function User(username,logInCount,signIn){
    this.username = username;
    this.logInCount = logInCount;
    this.signIn = signIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this;
}
const userOne = new User("hitesh",12,true)
const userTwo = new User("chai",34,true)
console.log(userOne.constructor);
//console.log(userTwo);
