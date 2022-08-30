//for
for (let i = 0; i < 5; i++) {
    console.log( "The number is " + i )
  }

  const cars = ["BMW", "Volvo", "Saab", "Ford"];

  let i = 0;
  let len = cars.length;
  let text = "";
  
  for (; i < len; ) {
    text += cars[i] + "\n";
    i++;
  }
  console.log(text)
  

//while
  var a = 0;
  var text2="";
  while (a < 3) {
    text2 += "The number is " + a + "\n";
    a++;
    console.log(text2)
  }


//do while
 var text1 ="";
let x = 0;

do {
  text1 += "\n"+" The number is " + x;
  x++;
  console.log(text1)
}
while (x < 3);  



//array method

//pop
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log( fruits.pop())
fruits.pop()
console.log( fruits)
fruits.push("Kiwi"); //add elements to the end of the array
console.log(fruits)
fruits.shift();     // remove the first array element
console.log(fruits)
fruits.unshift("Lemon");  // adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(fruits)
fruits[1] = "Kiwi";  // changing elements 
console.log(fruits)
fruits[fruits.length] = "graps" // add new element to an array
console.log(fruits)
delete fruits[1];     // delete an element in the array and leaves empty hole 
console.log(fruits)





