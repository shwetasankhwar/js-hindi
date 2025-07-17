class User {
    constructor(email,password){
this.email = email
this.password = password
    }

get email(){
    return this._email.toUpperCase()
}    
set email(value){
     this._email = value
}

get password(){
return `${this._password}hitesh`
}

set password(value){
this._password =value

}

}

const shweta = new User ("hitesh@ai","abc")
console.log(shweta.password);
console.log(shweta.email);

