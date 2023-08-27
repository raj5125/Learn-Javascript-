const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // here dc_heros arrays whole is one new element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  //access array inside array

const allHeros = marvel_heros.concat(dc_heros)  //join two arrays by and return the new array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   // join all arrays with ...(spread operator is use to just spread the elements)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)   //flat method is used to spread all array and come in one single array and Infinity denotes the depth
console.log(real_another_array);


// isArray check available or not , from convert string into array, of makes array
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));