const coding=["javascript","js","py","pyhton"]

coding.forEach(function(val){
   // console.log(val);
    
})
coding.forEach((val)=>{
    //console.log(val);
    
})

function greet(val){
   // console.log(val);
    
}

coding.forEach(greet)


const arr=[
    {
        a:"ronit",
        b:"hardeep"
    },
    {
        a:"r",
        b:"h"
    },
    {
        a:"ron",
        b:"har"
    }
]

arr.forEach((abc)=>{
   // console.log(abc);
    
})

arr.forEach((abc)=>{
    //console.log(abc.b);
    
})


coding.forEach((abc,index,arr)=>{
    console.log(abc,index,arr);
    
})