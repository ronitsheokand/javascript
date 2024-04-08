const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="samay"
tinderUser.isLoggedIn=false



const objectInObject={
    email :"gmail@gmail.com",
    fullname:{
        userFullName:{
            fistname:"ronit",
            lastname:"sheokand"
        }
    }
}

//console.log(objectInObject.fullname.userFullName.lastname);

 const obj1 = {1:"a" , 2:"b"}
 const obj2 = {3:"a" , 4:"b"}
 const obj3 = {5:"a" , 6:"b"}


 //const obj4 =  Object.assign(obj1,obj2,obj3) // merge objects

const obj4 ={...obj1,...obj2,...obj3} //merge objects
 
// console.log(obj4);



 const user = [
    {
        id:123,
        email:"ronit@gmail"
    },
    {
        id:123,
        email:"ronit@gmail"
    },{
        id:123,
        email:"ronit@gmail"
    },{
        id:123,
        email:"ronit@gmail"
    },

 ]


user[1].email

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"ronit"

}

const {courseInstructor:instructor}=course

//console.log(courseInstructor);
console.log(instructor);







