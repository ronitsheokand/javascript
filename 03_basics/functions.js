function saymyname(){
    console.log("r");
    console.log("o");
    console.log("n");
    console.log("i");
    console.log("t");
}


//saymyname()


// function addTwoNumber(number1,number2){
// console.log(number1 + number2);
// }

function addTwoNumber(number1,number2){
    let result=number1+number2
    return result //return krne se value ajati hai nahi to undefined dikhata hai
    }

const result=addTwoNumber(3,1)

console.log(result);


function loginUserName(username){
    if(username===undefined){
        console.log("please enter username");
        return 
    }
    return `${username} just logged in`
}


//console.log(loginUserName("ronit"))
// console.log(loginUserName());



function calculateCartPrice(...num1){       //... se jitni chaho utni value dal skte hai
    return num1
}



//console.log(calculateCartPrice(200,400,500));


const user={
    username:"ronit",
    price:199

}


function handleObject(anyobject){
    console.log(`username is${anyobject.username} and price is${anyobject.price}`);
}


handleObject(user)



const arr =[200,400,600,800]


function value(getarray){
    return getarray
}

console.log(value(arr));



