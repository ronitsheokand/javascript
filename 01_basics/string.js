const name = "ronit"
const age = 20

//console.log(`my name is ${name} and age is ${age}`);

const stringName = new String('ronit-sheokand')

//console.log(stringName[3]);
//console.log(stringName.__proto__); // to see protoype


//console.log(stringName.length);
//console.log(stringName.toUpperCase());
//console.log(stringName.charAt(10));
//console.log(stringName.indexOf('d'));

// substring,slice,trim,replace,includes,split


const string1 =  stringName.substring(2,9)
// console.log(string1);

const string2 = stringName.slice(-9,11)
// console.log(string2);   // index pe se value uthayega

const string3 = "     abcd     "
// console.log(string3.trim());
// console.log(string3); // spaces cut krdega

const string4 = "abcdefghikjlmnopqrstuvwxyz"
//console.log(string4.replace('lmnop', 'AAAA')); // word replace krdega


const string5 = "abcdefghijklmnopqrstuvwxyz"
//console.log(string5.includes('abcd'));  //word included hai ya nhi

const string6 = stringName
//console.log(string6.split('n'));  // jo bhi cheez doge us jagah se array mai split krdega




