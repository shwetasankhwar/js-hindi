//const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {

email : "some@gmail.com",
fullname : {
    UserFullname: {
        firstName: "shwera",
        lastName: "singh"
    }
}

}
console.log(regularUser.fullname.UserFullname.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"c",8:"d"}

//const obj3 = {obj1,obj2}
//const obj3= Object.assign({},obj1,obj2,obj4)//({traget},source)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const Users = [
{
    id :1,
    email:"s@gmail.com"
},
{
    id :2,
    email:"a@gmail.com"
},
{
    id :3,
    email:"h@gmail.com"
},
{
//taking value from database in array form
},
{
    //objects inside array
}
]

Users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(`isLoggedIn`));
console.log(tinderUser.hasOwnProperty('isLogged'));
