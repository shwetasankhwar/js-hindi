// singleton 
//object.create
// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Shweta" , // key(string) : "value"(string ,number, boolean ....)
     
    "full name" : "shweta singh",
    [mySym]: "mykey1",
    age : 18,
    location : "kanpur",
    email : "shweta@gmail.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "saturday"]

 }
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"]);
console.log(typeof jsUser.mySym);
console.log(jsUser[mySym]);
console.log(jsUser["mySym"]);


jsUser.email ="shweta@chat.com"
 //Object.freeze(jsUser)
// jsUser.email ="shweta@mycrosoft.com"
// console.log(jsUser);
// console.log(jsUser.email);

jsUser.greetings = function(){
    console.log("hello js useer");
    

}
jsUser.greetings2 = function(){
    console.log(`hello js useer , ${this.name}`);
    

}
console.log(jsUser.greetings());
console.log(jsUser.greetings);
console.log(jsUser.greetings2());

