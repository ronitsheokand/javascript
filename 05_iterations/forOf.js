const arr=[1,2,3,4,5]

for(const i of arr){
   // console.log(i)
}

const str="hello r o n i t"

for(const a of str){
   
    if(a==" "){
        
        continue
    }
    console.log(a)
}



//////////map
const map=new Map()

map.set('in','india')
map.set('fr','france')

//console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
}