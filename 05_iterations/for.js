for (let i = 0; i < 10; i++) {
   // console.log(`index of outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
     //   console.log(i + "*" + j + "="+ i*j);
        
        
    }
}


let n = 5; // Number of rows/columns
//let string = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //  string += "*";
    }
   // string += "\n"; // Newline after each row
}

//console.log(string);


for (let i = 0; i <10; i++) {
   if (i==5) {
    console.log("detected")
    break
   }
    console.log(i)
}
for (let i = 0; i <10; i++) {
   if (i==5) {
    console.log("detected")
    continue
   }
    console.log(i)
}
