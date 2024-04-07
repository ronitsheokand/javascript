//array

const arr = [1,2,3,4,5]
const arr2 =["ronit","sheokand"]
const arr3 = new Array(1,2,3,4)
//console.log(arr[1]);

 
//array method

//arr.push(6,7,8,9)  // value dal deta hai array mai at last
//console.log(arr);

//arr.pop()  // last valur delete kr deta hai array se



//arr.unshift(0) // start mai add krta hai array mai
//arr.shift() //starting ki valur hata dega

//console.log(arr.includes(9));  // batyega included hai ya nahi
//console.log(arr.indexOf(2));  // knse index pe hai number 


//const newArr = arr.join()  // arr ko string mai convert krdeta hai

//console.log(typeof newArr);

//console.log(arr);


//++++  slice ,splice +++++++

console.log("A",arr);

const arr4 = arr.slice(1,3)  // index dekhta hai per last wala index print nhi krta
console.log(arr4);
console.log("B",arr); // original array mai koi change nahi ayega

const arr5 = arr.splice(1,3) // index dekhta hai or last wala index bhi print krta hai
console.log(arr5);
console.log("C",arr);   // original array mai bhi changes honge  ,, array mai se splice wale hata dega
























