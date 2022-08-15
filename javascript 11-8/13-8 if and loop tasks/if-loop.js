
console.log("Task 1");
// Correct the syntax error
//  [ 1,7 , 9 , 45 ]
//  ["Str", "alex","moh",'the','fox' ,'over' ,"lazy", 'dog']
console.log("Task 2");
// What the index of "Banana","Tomato"
var fruits = ["Tomato", "Banana", "Watermelon"];
console.log(fruits[0]); //Tomato
console.log(fruits[1]); //Banana
console.log("Task 3");
// Create an array represents your:
// 1- Favorite Food (5)
// 2- Favorite Sport (3)
// 3- Favorite Movie (4)
var food = ["pizza", "spagithe", "flafel", "burger", "khabseh"];
var sport = ["football", "basketball", "run"];
var movie = ["me befor you", "forrst gump", "cast away"];
console.log("Task 4");
function firstOfArray(arr) {
  var arr = [1, 2, 3];
  console.log(arr[0]);
  console.log(arr.shift());
}
firstOfArray();
console.log("Task 5");
function lastOfArray(arr) {
  var arr = [1, 2, 3, 4];
  console.log(arr[arr.length - 1]);
  console.log(arr.pop());
}
lastOfArray();
console.log("Task 6");
//[1,3,4,6,8,9,10]
var array = [0, 5, 7, 9];
array.shift(1);
array.shift(1);
array.unshift(4);
array.unshift(3);
array.unshift(1);
array.splice(3, 0, 6);
array.splice(4, 1, 8);
array.push(10);
console.log(array);
console.log("Task 7");
var array2 = [5, 9, -7, 3.5];
array2.shift(1);
array2.unshift(4);
array2.pop();
array2.push(10);
console.log(array2);
console.log("Task 8");
/*
 * Exercise 1:
 * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 *
 * Test Case:
 *    Test Case 1: doubleValues([1,2,3])
 *    Test Case 2: doubleValues([5,1,2,3,10])  */
function doubleValues(arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1[i] = arr[i] * 2;
  }
  return arr1;
}
console.log(doubleValues([1, 2, 3, 4, 5]));
console.log("Task 9");
/*
 * Exercise:
 * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 *
 * Test Cases:
 *   onlyEvenValues([1,2,3])
 *   onlyEvenValues([5,1,2,3,10])
 *
 * Result:
 *  Test Case 1:  [2]
 *  Test Case 2: [2,10]
 */
function onlyEvenValues(arr) {
  const even = [];
  arr.forEach((number) => {
    if (number % 2 === 0) even.push(number);
  });
  return even;
}
console.log(onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("Task 10");
/*
 * Exercise:
 * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
 *
 * Test Case:
 *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])
 *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])
 *
 * Result:
 * Test Case 1: ["ct", "mt", "tm", "uy"]
 * Test Case 2: ['hi', 'ge', 'se']
 *
 */
function showFirstAndLast(arr) {
  var arr1 = [];
  arr.forEach(function (word) {
    arr1.push(word[0] + word[word.length - 1]);
  });
  return arr1;
}
console.log(showFirstAndLast(["cool", "matt", "tim", "udemy"]));
console.log("Task 11");
/*8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr) {
  if (!arr.length) return;
  let mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return arr[Math.floor(mid)];
  } else {
    return [arr[mid - 1], arr[mid]];
  }
}
console.log(middleOfArray([1, 4, 5]));
console.log(middleOfArray(["t", "u", "g", "x"]));
console.log("Task 12");
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
*/
var animals = ["cat", "ele", "bird"];
animals.push("elephant");
animals.unshift("zebra");
console.log(animals);
console.log("Task 13");
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/
function indexOfArray(nums) {
  console.log(nums.indexOf(3));
  console.log(nums.indexOf(9));
}
indexOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("Task 14");
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/
function arrayExceptLast(arr) {
  console.log(arr.slice(arr, length - 1));
}
arrayExceptLast([1, 2, 3, 4, 5, 6, 7]);
arrayExceptLast([1, 2, 3, 8, 9]);
console.log("Task 15");
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/
function addToEnd(arr) {
  arr.pop(arr, length - 1);
  arr.push(55);
  console.log(arr);
}
addToEnd([1, 2, 3, 8, 9]);
console.log("Task 16");
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("this exercises solved by for loop");
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log("this exercises solved by while loop");
function sumArray1() {
  let array = [1, 2, 3, 4, 5];
  let len = array.length - 1;
  let sum = 0;
  while (len >= 0) {
    sum += array[len--];
  }
  console.log(sum);
}
sumArray1();
console.log("Task 16 ");
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("this exercises solved by for loop");
console.log("this exercises solved by for loop");
var nums = [1, 2, 3, 8, 9, 0];
function minInArray(array) {
  var min = array[0];
  document.write("min " + min);
  for (var i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}
console.log(minInArray(nums));
console.log("this exercises solved by while loop");
var nums = [1, 2, 3, 8, 9, 0];
function minInArray(array) {
  var min = array[0];
  var i = 1;
  document.write("min " + min);
  while (i < array.length) {
    if (min > array[i]) {
      min = array[i];
    }
    i++;
  }
  return min;
}
console.log(minInArray(nums));
console.log("Task 17");
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/ 
// console.log("this exercises solved by for loop");
// function removeFromArray(nums , index){
// var nums = [1, 2, 3, 8, 9];
// var newArray=[];

// var index = newArray.indexOf(nums[3])
// if (index > -1){
//   newArray = newArray.splice(index, 1);
// }
// }console.log(removeFromArray(nums, 8));
var nums = [1, 2, 3, 8, 9];
function removeFromArray(array, element) {
  var arr = [];
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] != element) {
      arr[j] = array[i];
      j++;
    }
  }
  return arr;
}
console.log(removeFromArray(nums, 8));
console.log("this exercises solved by while loop");
var nums = [1, 2, 3, 8, 9];
function removeFromArray(array, element) {
  var arr = [];
  var j = 0;
  var i = 0;
  while (i < array.length) {
    if (array[i] != element) {
      arr[j] = array[i];
      j++;
    }
    i++;
  }
  return arr;
}
console.log(removeFromArray(nums, 8));
console.log("Task 18");
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/ console.log("this exercises solved by for loop");
function oddArray(array) {
  var arr = [];
  var j = 0;
  var i = 0;
  while (i < array.length) {
    if (array[i] % 2 != 0) {
      arr[j] = array[i];
      j++;
    }
    i++;
  }
  return arr;
}
console.log(oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("this exercises solved by while loop");
var nums = [1, 2, 3, 8, 9];
function oddArray(array) {
  var arr = [];
  var j = 0;
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      arr[j] = array[i];
      j++;
    }
  }
  return arr;
}
console.log(oddArray(nums));
console.log("Task 19");
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/ console.log("this exercises solved by for loop");
var nums = [1, 2, 3, 8, 9];
function aveArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
console.log(aveArray(nums));
console.log("this exercises solved by while loop");
var nums = [1, 2, 3, 8, 9];
function aveArray(array) {
  var sum = 0;
  var i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum / array.length;
}
console.log(aveArray(nums));
console.log("Task 20");
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("this exercises solved by for loop");
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function shorterInArray(array) {
  var len = strings[0].length;
  for (var i = 1; i < array.length; i++) {
    if (array[i].length < len) {
      len = array[i].length;
    }
  }
  return len;
}
console.log(shorterInArray(strings));
console.log("this exercises solved by while loop");
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function shorterInArray(array) {
  var len = strings[0].length;
  var i = 1;
  while (i < array.length) {
    if (array[i].length < len) {
      len = array[i].length;
    }
    i++;
  }
  return len;
}
console.log(shorterInArray(strings));
console.log("Task 21");
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("this exercises solved by for loop");
var string = "alex mercer madrasa rashed2 emad hala";
function repeatChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (char == str[i]) {
      count++;
    }
  }
  return count;
}
console.log(repeatChar(string, "a"));
console.log("this exercises solved by while loop");
var string = "alex mercer madrasa rashed2 emad hala";
function repeatChar(str, char) {
  var count = 0;
  var i = 0;
  while (i < str.length) {
    if (char == str[i]) {
      count++;
    }
    i++;
  }
  return count;
}
console.log(repeatChar(string, "a"));
console.log("Task 22");
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("this exercises solved by while loop");
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function evenIndexOddLength(strings) {
  var newArray = [];
  var j = 0;
  for (var i = 0; i < strings.length; i++) {
    if (i % 2 == 0) {
      if (strings[i].length % 2 != 0) {
        newArray[j] = strings[i];
        j++;
      }
    }
  }
  return newArray;
}
console.log(evenIndexOddLength(strings));
console.log("this exercises solved by while loop");
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function evenIndexOddLength(strings) {
  var newArray = [];
  var j = 0;
  var i = 0;
  while (i < strings.length) {
    if (i % 2 == 0) {
      if (strings[i].length % 2 != 0) {
        newArray[j] = strings[i];
        j++;
      }
    }
    i++;
  }
  return newArray;
}
console.log(evenIndexOddLength(strings));
console.log("Task 23");
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("this exercises solved by for loop");
var nums = [44, 5, 4, 3, 2, 10];
function powerElementIndex(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr[i] = array[i] ** i;
  }
  return arr;
}
console.log(powerElementIndex(nums));
console.log("this exercises solved by while loop");
var nums = [44, 5, 4, 3, 2, 10];
function powerElementIndex(array) {
  var arr = [];
  var i = 0;
  while (i < array.length) {
    arr[i] = array[i] ** i;
    i++;
  }
  return arr;
}
console.log(powerElementIndex(nums));
console.log("Task 24");
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("this exercises solved by for loop");
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
function evenNumberEvenIndex(array) {
  var arr = [];
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      if (array[i] % 2 == 0) {
        arr[j] = array[i];
        j++;
      }
    }
  }
  return arr;
}
console.log(evenNumberEvenIndex(nums));
console.log("this exercises solved by while loop");
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
function evenNumberEvenIndex(array) {
  var arr = [];
  var j = 0;
  var i = 0;
  while (i < array.length) {
    if (i % 2 == 0) {
      if (array[i] % 2 == 0) {
        arr[j] = array[i];
        j++;
      }
    }
    i++;
  }
  return arr;
}
console.log(evenNumberEvenIndex(nums));
console.log("While Exercises ");
console.log(" task1");
// Create a function called subtract
// that takes a single parameter n,
// and return the subtraction of all
// starting from n to 0
// Ex: subtract(2); => 2 - 1 - 0 => 1
// Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
// Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
// */
function subtract(n) {
  var sub = n;
  n--;
  while (n > 0) {
    sub = sub - n;
    n--;
  }
  return sub;
}
console.log(subtract(5));
console.log(" task2");
/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
function factorial(n) {
  var fact = 1;
  for (var i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));
console.log(" task3");
/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
// function repeateStr(str, n) {
//   for (var i = 0; i < n; i++) {
//     console.log(str + " ");
//   }
// }
// repeateStr("to", 2);
function repeatStr(string,number){
var re="";
while(number>0){
    re+=string+" ";
    number--;
}
return re;
}
console.log(repeatStr("to",3));
// console.log(" task4");
/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
function sum2(n, m) {
  var sum = 0;
  for (n; n <= m; n++) {
    sum += n;
  }
  return sum;
}
console.log(sum2(4, 5));
console.log(" task5");
/*
5
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
function multiOf(x, y, z) {
  var result = x * y ** z;
  return result;
}
console.log(multiOf(4, 10, 3));
console.log(" task6");
/*
6
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function muti2(num1, num2) {
  var mult = 1;
  for (num1; num1 <= num2; num1++) {
    mult = mult * num1;
  }
  console.log(mult);
}
muti2(4, 5);
console.log(" task7");
/*
7
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
function numberBetweenUs(x, y) {
  var arr = [];
  var i = 0;
  x = x + 1;
  for (x; x < y; x++) {
    arr[i] = x;
    i++;
  }
  return arr;
}
console.log(numberBetweenUs(2, 8));
console.log(" task8");
/*
8
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function countDown(n) {
  var str = [];
  var i = 0;
  while (n >= 0) {
    if (n == 0) {
      str[i] = "done";
    } else {
      str[i] = n;
    }
    i++;
    n--;
  }
  return str;
}
console.log(countDown(5));

console.log(" For Exercises ");
 
console.log("Task 1");
function doubleValues(arr) {
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      arr1[i] = arr[i] * 2;
    }
    return arr1;
  }
  console.log(doubleValues([1, 2, 3, 4, 5]));
  
  console.log("Task 2");
  /*
   * Exercise:
   * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
   *
   * Test Cases:
   *   onlyEvenValues([1,2,3])
   *   onlyEvenValues([5,1,2,3,10])
   *
   * Result:
   *  Test Case 1:  [2]
   *  Test Case 2: [2,10]
   */ 
  function onlyEvenValues(arr) {
    const even = [];
  
    arr.forEach((number) => {
      if (number % 2 === 0) even.push(number);
    });
    return even;
  }
  console.log(onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
 
   
  console.log("Task 3");
  /*
   * Exercise:
   * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
   *
   * Test Case:
   *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])
   *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])
   *
   * Result:
   * Test Case 1: ["ct", "mt", "tm", "uy"]
   * Test Case 2: ['hi', 'ge', 'se']
   *
   */
  function showFirstAndLast(arr) {
    var arr1 = [];
    arr.forEach(function (word) {
      arr1.push(word[0] + word[word.length - 1]);
    });
    return arr1;
  }
  console.log(showFirstAndLast(["cool", "matt", "tim", "udemy"]));
   
  console.log("Task 4");
/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
let arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
const addKeyAndValue = (arr, key, value)=>{  
    for (let index = 0; index < arr.length; index++) {
      arr[index][key]=value 
    }
    return arr
}
console.log(addKeyAndValue(arr,"title","Instructor"))
console.log("Task 5");
/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/
const vowelCount = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let arrstr = str.toLowerCase().split("");
    let obj = {};
    for (let vowel of vowels) {
      for (let letter of arrstr) {
        if (vowel === letter) {
          obj[letter] = obj[letter] + 1 || 1;
          //obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
        }
      }
    }
    return obj;
  };
  console.log(vowelCount("hla"));
  console.log(vowelCount("I Am awesome and so are you"));
