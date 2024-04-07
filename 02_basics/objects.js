
const mySym = Symbol("key1")


const user = {
    name:"ronit",
    [mySym]:"mykey1",
    age:20,
    location:"haryana",
    email:"ronit@google.com",
    isLoggesIn:false,
    lastLoginDyas:["moday","sunday"]
}


// console.log(user.email);
// console.log(user["email"]);  // ese krna hai call object ko
// console.log(user[mySym]);


user.email="sheokand@google.com"
Object.freeze(user.email) //object ko freeze kr deta hai fir vo change nhi ho skta

console.log(user);

user.myFunc = function(){
    console.log(`hello user , ${this.name}`);
}


console.log(user.myFunc());










