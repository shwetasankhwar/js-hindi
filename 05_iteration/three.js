// for of

["","","",""]// string in array
[{},{},{},{}] //object in array

const arr = [1,2,3,4,5]

    
for (const num of arr) {
    //console.log(num);
    
}

const greetings = "hello world !"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India" )
map.set('USA', "United state of america" )
map.set('FR', "France" )
map.set('IN', "India" )

//console.log(map);

for (const [key, value] of map) {
   // console.log(key , ':-', value);
    
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key , ':-', value);
    
// }
