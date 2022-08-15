
document.getElementById("h").innerHTML = "My First JavaScript";


let l = 16;                              
console.log(typeof(l));                 // Number
let name = "Hala";      
console.log(typeof(name));                // String
let x = {firstName:"John", lastName:"Doe"};  
console.log(x);  
console.log(typeof(x));                   // Object
let k = 16 + "Volvo";
console.log(typeof(k));              // String
let q;
console.log(typeof(q));     //undefined
let i=(x==q);
console.log(typeof e-5);           //boolean
let s = Symbol("$");
console.log(typeof(s));          //symbol

console.log('hala ${hala+hala} hala');

//     var a = 10
//     var a = 5
//     a=3
//        console.log(a)






//     let a = 10
//  let a = 5
//  a=3
//     console.log(a)




//     const a = 10
//  const a = 5
//      a=3
//     console.log(a)



function g() {let m = 10;
    let b = 9
    console.log(b);
    console.log(m);
}
g();

let text =

`The quick
brown fox
jumps over
the lazy dog`;

document.getElementById("demo").innerHTML = text;

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text1.length;
console.log(text1.length);
document.getElementById("text").innerHTML =length;




const d = new Date();
console.log(d);

// var lab ={
//     name: "hala",
//     age:28,
//     size:[5,1,6]
// }
// console.log(lab.size[1])


//nested array
var lab ={
    name: "hala",
    age:28,
    size:[5,[2,4,7,9],6]
}
console.log(lab.size[1][3])