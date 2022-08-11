console.log("task 1")

// // task 1
function tellFortune( N , Z , Y, X){
    // var N ="three";
    // var X ="programmer";
    // var Y ="amman";
    // var z ="someone";
console.log("You will be a "+ X + " in " + Y+ " and married to " + Z + " with " + N + " kids.")
} tellFortune( 3 ,"someone" , "amman" ,"programmer")

console.log("task 2")

// // task 2
function calculateDogAge(humanAge){
var dogAge = humanAge*7;
console.log("Your doggie is "+ dogAge +  " years old in dog years!")
}calculateDogAge(Math.abs(-5))

console.log("task 3")

// // task 3
function calculateSupply(age ,amount){
// var age = 27;
var maxAge =60;
// var amount =3;
var total =(amount*365)*(maxAge-age);
console.log("You will need "+ total+  " cups of tea to last you until the ripe old age of " + maxAge)
}calculateSupply(27 ,3)

console.log("task 4")

// // task 4
function greet(name){
    console.log ("Hello " +name )
} greet("Hala")

console.log("task 5")

//task 5
// what is the error:
function double(cat) {
    return 2 * cat;
  }
  
function double() {
  return 2 * 7;
}double()

function double(x) {
  return 2 * x;
}double(5)

console.log("task 6")

//task 6
// fix these functions:
function double1(x ){  // I fixed the function word and closed ) after x
  return 2 * x ;
}

function double2 (x){  //I give the function double2 aspace and cloased ) and add {}
return 2 * x;
}

function double3(x)  {  // I put the function name after the function and closed {}
  return 2 * x;
}

console.log("task 7")

// task 7 
function cube(num1) {
    // var num1= 5;
    var num = num1 * 3;
    console.log("multiply ( "+num1+ " * 3) = "  + num)
}cube(5)

console.log("task 8")

//task 8
function multiply(num2 , num3) {
    // var num2 =3;
    // var num3 = 6;
    var mult = num2 * num3;
    console.log("multiply ( "+num2+ " * " +num3 +") = "+ mult)
}multiply(3,6)

console.log("task 8 and 9 in one function")

// //this solution for task 4 in one function
function all(num1 ,num2){
    var num = num1 * 3;
    var mult = num2 * num1;
    console.log("multiply ( "+num2+ " * " +num1 +") = "+ mult)
 console.log("multiply ( "+num1+ " * 3) = "  + num)
}all(5,3)

console.log("task 9")
//task 9
function canIGetADrivingLicense(age){
    if (age>=20){
     
        console.log("yes you can")
    }else{
        var x= 20 - age;
        console.log("please come back after " +  x + " years to get one")
    }
}canIGetADrivingLicense(15)

console.log("task 10")

// task 10
function sameLength(o,p){
    if(o.length === p.length){
        console.log(true)
    }else{
        console.log(false)
    }
}sameLength("hala" , "hal")

console.log("task 11")

// task11
function largerNubmer(r,t){
    if(r>t){
    console.log(r)
}else{
    console.log(t)
}
}largerNubmer(10,50)

console.log("task 12")

// task 12
function smallerNubmer(q,w,e){
    if (q<w && q<e){
        console.log(q)
    }else if (w<q && w<e) {
        console.log(w)
    } else {
        console.log(e)
    }
}smallerNubmer(8,6,1)

console.log("task 13")
//task13
function shortString(a,b,c,d){
    if(a.length < b.length && a.length < c.length && a.length < d.length) {
        console.log(a)
    }else if(b.length < a.length && b.length < c.length && b.length < d.length){
        console.log(b)}
        else if(c.length > a.length && c.length < b.length && c.length < d.length){console.log(c)
        }else(console.log(d))
    }shortString("aaa","aaa","aaa","aa")

console.log("task 14")

//task 14
function longerString(a,b,c,d){
if(a.length > b.length && a.length > c.length && a.length> d.length) {
    console.log(a)
}else if(b.length > a.length && b.length > c.length && b.length> d.length){
    console.log(b)}
    else if(c.length > a.length && c.length > b.length && c.length> d.length){console.log(c)
    }else(console.log(d))
}longerString("aaaa","a","aaa","aa")

console.log("task 15")

//task 15
function isEven(num){
    if(num % 2 == 0){
        return "even"
    }else{
        return "odd";
    }
}console.log (isEven(13))
 

console.log("task 16")

//task 16
function isOdd(num){
    if(num % 2 == 0){
        return "false";
    }else{
        return "true";
    }
}console.log (isOdd(13))

console.log("task 17")
//task 17
function positive(number){
    console.log(Math.abs(number) );
}positive(-10)

console.log("task 18")
//task 18
function fullName(firstName , lastName ){
    // var firstName= "Hala ";
    // var lastName="Aldabbas";
    console.log(firstName + lastName )
}fullName( "Hala ","Aldabbas")

console.log("task 19")
// task 19
function avarge(n1,n2,n3,n4,n5) {
    // var n1=10;
    // var n2=10;
    // var n3=10;
    // var n4=10;
    // var n5=10;
    var ave=(n1+n2+n3+n4+n5)/5;
    console.log("The Avarge is "+ave)
}avarge(10,5,6,10,8)

console.log("task 20")
// task 20
function randomNumber(){
    console.log("randomNumber is "+Math.random());
}randomNumber()


console.log("task 21")
//task 21
function randomBetweenNumbers(max ,min){
    console.log(Math.random() * (max - min) + min);
}randomBetweenNumbers(2,5)

console.log("task 22 with if statment")
//task 22

function scoreInUniversty( score){
        if (score >= 95 && score <=100) {
    console.log("A")
        } else if (score >= 85 && score <=94) {
           console.log('B') ;
        } else if (score >= 70 && score <=84) {
            console.log("C")
        } else if (score >= 50 && score <=69) {
            console.log("D")
        } else {
            console.log("F")
        }
    }scoreInUniversty(90)


    console.log("task 22 with switch statment")
function scoreInUniversty1(score){
   
    switch(score > 0){
        case  score >= 95 && score <=100:
        console.log("A")
        break;
        case score >= 85 && score <=94:
      
        console.log("B")
        break;
        case  score >= 70 && score <=84:
        
        console.log("C")
        break;
        case  score >= 50 && score <=69:
      
        console.log("D")
        break;
        case  score >= 0 && score <=50:
        console.log("F")

    }
}scoreInUniversty1(70)

console.log("task 23")

//task 23
var x=0;
function counter(x){
x = x+1;
return console.log(x)
}counter(2)

console.log("task 24")

//task 24
function resetCounter(x){
if (x==0){
    console.log(x)
}else{
    x=0;
    console.log(x)
}
} resetCounter(5)