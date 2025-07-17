// let myName = "shweta  "
// let myChannel = "chai  "

// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let HeroPower ={
    thor: "hammer",
    spiderman:"sling",
    
getSpiderPower: function(){
    console.log(`spidey power is ${this.spiderman}`);
    
}
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
    
}

Array.prototype.heyHitesh= function(){
    console.log(`Hitesh says Hello`);
    
}

//HeroPower.hitesh()

// myHeros.hitesh()

// myHeros.heyHitesh()
//HeroPower.heyHitesh()

// ----  Inheritance

const user ={
    username : "chai",
    email :"chai@googole.com"

}

const Teacher = {
    makeVideo: true,

}
const teachingSupport = {
    isAvailable: false
}

const TASupport = {
   makeAssignment: 'js assignment',
   fullTime: true,
   __proto__: teachingSupport
}
Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUserName = "ChaiAurCode  "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length} `);
    
    
}
anotherUserName.truelength()
"hitesh".truelength()
"IceTeaaaa".truelength()