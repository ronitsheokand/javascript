// primitive

//7 types : String ,Number , Boolean, null ,undefined , Symbol , BigInt

const score = 100
const pointValue = 100.3

const loggedIn =false
const temp= null
let email;


const id = Symbol('123')
const anotherId = Symbol('123')
// symbol ka kaam hi yhi hai same value doge to bhi equal nhi hogi
// console.log(id === anotherId );


 //const BigNumber = 982420873n  this is bigInt




// reference (non- primitive)

//Array , Objects , Functions


const arr1=["ronit","sheokand","ok"];
let myObj={
    name:"name",
    age:20
}
//console.log(arr1)
//console.log(myObj)



const myFunction = function(){
    console.log("hello world")
}


// console.log(typeof BigNumber);
// console.log(typeof myFunction);



//***************************************************** */

//memory 
//stack (primitive) [isme copy milta hai] , heap (non primitive) [isme reference milte hai]

let nameOne = "nameone"

let nameTwo = nameOne
nameTwo = "nametwo"

// console.log(nameOne);
// console.log(nameTwo);

let userOne={
    email:"ronit@gmail.com",
    upi:"oksbi"
}

let userTwo = userOne

userTwo.email = "ronit"

console.log(userOne.email);
console.log(userTwo.email);





