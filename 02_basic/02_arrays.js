const marvel_heros =["thor","irnoman","spiderman"]
const dc_heros =["superman","batman","flash"]
 
// marvel_heros.push(dc_heros)// array inside array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heroes = marvel_heros.concat(dc_heros)
// console.log(all_heroes);

const all_New_heroes = [...marvel_heros, ...dc_heros] // spread all element
console.log(all_New_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_an_array = another_array.flat(Infinity)
console.log(real_an_array);

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))// converted into array
console.log(Array.from({name : "hitesh"}))//intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

