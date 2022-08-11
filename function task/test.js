let cars = ["mazda", "Volvo", "BMW"];
cars[1] ="opel" // Changing an Array Element
console.log(cars) // calling all the array
console.log(cars[2]) //calling the index .no 2
let myCar = cars[0] //Accessing Array Elements
console.log(myCar)

const number = ["one", "two ", "three", "four"];
console.log(number)
console.log(number.length) // length Property for the array
console.log(number[0].length) //length Property inside the array
let four = number[number.length - 1];
console.log(four)
number.push("five");  //adding array by push
console.log(number)
number[number.length] = "six"; //adding array by length
console.log(number)
console.log(typeof(number))  //typeof array

var points = [40, 100, 1, 5, 25, 20];
var point = new Array(40, 100, 1, 5, 35, 10);
console.log(points)
console.log(point)
console.log(typeof (points))
console.log(typeof (point))



//operators
let x = 15;     
let y = 5;         
let z = x + y;   
console.log(x)
console.log(y)
console.log(z)
let l = x - y;   
console.log(l)
let v = x * y;
console.log(v)
let s = x / y;
console.log(s)

//date and time
const d = new Date();
console.log(d);

var today = new Date();
console.log(today.toLocaleDateString("en-US")); // how to change formate for date

var time = new Date();
console.log(time.toLocaleTimeString("en-US")); // how to change formate for time



//function
function myFunction(p1, p2) {
    return p1 * p2;  
  }
  console.log(myFunction(5 , 5))




  let o = myFunction(4, 3);  
function myFunction(a, b) {
  return a * b;        
}console.log(o)


// this function dose't take parameter 

function textExample(){
    var b="hello everyone";
    console.log(b);
}
textExample()


//new function

function double(x){
 var num = x*2;
console.log(num) 
} 

double(5)