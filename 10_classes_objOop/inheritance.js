class User{
    constructor(username){
this.username = username
    }

logMe(){
    console.log(`USERNAME is ${this.username}`);  
}
}
class Teacher extends User{
    constructor(username,email,password){
super(username)
this.email = email
this.password= password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","chai@hmail.com","ertyui")
chai.addCourse()

const masalchai = new User("masalachai")
masalchai.logMe()

console.log(chai instanceof Teacher);
