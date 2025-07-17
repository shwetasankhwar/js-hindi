class User{
    constructor(username){
        this.username = username
    }
    logMe (){
        console.log(`Username: ${this.username}`);
        
    }
   static createId(){
        return `123`
    }
}
const shweta = new User("shweta")
//console.log(shweta.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone","ghj@ghjk.com")
iphone.logMe()
console.log(iphone.createId);

