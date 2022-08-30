// Instructions: 
//  - You should solve all these questions using .map() function 
// */


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
console.log("Exercise 1: ")
let doubles = [2, 5, 100].map((arr)=>{
    return arr * 2 ;
});
console.log(doubles);

/* Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/
console.log("Exercise 2: ")
let arr = [2, 5, 100].map((arr)=>{
    return arr.toString();
});
console.log(arr);

 /* Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/
console.log("Exercise 3: ")
 let names=["john", "JACOB", "jinGleHeimer", "schmidt"].map((names)=>{
return names.toUpperCase()
 });console.log(names)

/*
 * Exercise 4:  
 * 
 * Make an array of strings of the names
 *
 * Test Case: 
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ])); 
 * 
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/
console.log("Exercise 4: ")
function namesOnly(arr){
    var stringsArr = arr.map(function(names){
        return names.name;
    })
    return stringsArr;
} console.log(namesOnly([{ name: "Angelina Jolie", age: 80 },{name: "Eric Jones",age: 2},{name: "Paris Hilton", age: 5},{ name: "Kayne West",age: 16},{ name: "Bob Ziroll",age: 100} ])); 


/*
 * Exercise 5:  
 * 
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 * 
 */
console.log("Exercise 5: ")

function makeStrings(arr){
    var names = arr.map(function(name){
        if(name.age < 18){
            return name.name + " is under age!" ;
         
        } else {
            return name.name + " can go to the matrix";
        }
    })
    return names;
}console.log(makeStrings([{ name: "Angelina Jolie", age: 80 },{name: "Eric Jones",age: 2},{name: "Paris Hilton", age: 5},{ name: "Kayne West",age: 16},{ name: "Bob Ziroll",age: 100} ])); 
/* Exercise 6:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */
console.log("Exercise 6: ")
let readyToPutInTheDOM=[{ name: "Angelina Jolie", age: 80 },{name: "Eric Jones",age: 2},{name: "Paris Hilton", age: 5},{ name: "Kayne West",age: 16},{ name: "Bob Ziroll",age: 100} ].map((readyToPutInTheDOM)=>{
    return  "<h1>" + readyToPutInTheDOM.name + "</h1>" + "<h2>" +  readyToPutInTheDOM.age + "</h2>";
     });console.log(readyToPutInTheDOM)

/* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/
console.log("Exercise 7: ")
function doubleValues(arr){
    return arr.map(a=>a*2)
}console.log(doubleValues([1, 2, 3]));

/* Exercise 8:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]
  */
console.log("Exercise 8: ")
function valTimesIndex(arr){
    return arr.map((a ,i) => a*i)
}
console.log(valTimesIndex([1, 2, 3]));


  /* Exercise 9:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */
  console.log("Exercise 9: ")
  function extractKey(arr, key) {
    return arr.map(a => a[key]);
  } console.log(extractKey([{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],"name"));

  /* Exercise 10:
  * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  */

  console.log("Exercise 10: ")
  function extractFullName(obj) {
    return obj.map(a => a["first"] + " " + a["last"]);
  }
  console.log(
    extractFullName([
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia" },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele" }
    ])
  );

//Filter 10 - 15 you should use Array.prototype.filter
/*
10
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
console.log("Exercises on Array.prototype.filter") 
console.log("Exercise 10: ") 
function evenOnly(arr){

let even = num => {
    if (num % 2 == 0) {
      return num;
    }
  };
  return arr.filter(even);
}console.log(evenOnly([1,8,6,4]))

/*
11
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
console.log("Exercise 11: ") 
function multiFour( arr){
   var multi = num =>{
    if (num %4 ==0){
       return num
    }
   };
 return arr.filter(multi);
} console.log(multiFour([1,8,6,4]))

/*
12
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
console.log("Exercise 12: ") 
function containChar(arr, str) {
    return arr.filter(a => {
      if (a[0] == str) {
        return a;
      }
    });
  } console.log(containChar(["hello","world"],"w"));
//   console.log(containChar(["hello","world"],"l"));

/*
13
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
console.log("Exercise 13: ") 
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function evenIndexOddLength(arr){
    return arr.filter((a, i)=>{
   if (a.length % 2 == 1 && i % 2 ==0){
   return a;}
    } )    
}console.log(evenIndexOddLength(strings))


/*
14
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
console.log("Exercise 14: ") 
var persons = [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 35 }]
function olderThan(arr, num){
return arr.filter(a =>{
if(a.age >num){
    return a;
}
})
}console.log(olderThan(persons, 56));

/*
15
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log("Exercise 15: ") 
function shorterThan(arr, num) {
    return arr.filter(a => {
      if (a.length < num) {
        return a;
      }
    });
  }console.log(shorterThan(strings, 5));



  function LargestTwo(arr) {
    let one = null;
    let two = null;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > one ) {
        two = one;
        one = arr[i];
      }else if (arr[i] > two ) {
            two = arr[i];
      }
    }
  
    return [ two, one];
  } console.log(LargestTwo([10,2,5,90,12,55,0,7]));