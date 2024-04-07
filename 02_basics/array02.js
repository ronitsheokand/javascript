//concat,spread ,flat,isArray,from,array.of

const arr = ["ronit","sagar","hardeep"]
const arr2 = ["sheokand","garg","dhull"]

const concatArray = arr.concat(arr2)
//console.log(concatArray );   // 2 array ko mila deta hai


const spreadArray = [...arr,...arr2]
//console.log(spreadArray);

const flatArray = [1,2,3,[4,5,6],7,7,[2,[1,2,3]]]
//console.log(flatArray.flat(Infinity));  // brackets mai depth deni hoti hai 1,2,3, Infintiy


console.log(Array.isArray("ronit")); // array hai ya nahi
console.log(Array.from("ronit")); // to make array

console.log(Array.from({name: "ronit"})); // interesting,,, jab array nahi bana payega toh empty dega 


let  num1=100
let num2 =200
let num3=300

console.log(Array.of(num1,num2,num3)); // to make array from values












