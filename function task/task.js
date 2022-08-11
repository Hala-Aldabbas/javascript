// task 1
function tellFortune( N , Z , Y, X){
    // var N ="three";
    // var X ="programmer";
    // var Y ="amman";
    // var z ="someone";
console.log("You will be a "+ X + " in " + Y+ " and married to " + Z + " with " + N + " kids.")
} tellFortune( 3 ,"someone" , "amman" ,"programmer")

// task 2
function calculateDogAge(humanAge){
var dogAge = humanAge*7;
console.log("Your doggie is "+ dogAge +  " years old in dog years!")
}calculateDogAge(Math.abs(-5))

// task 3
function calculateSupply(age ,amount){
// var age = 27;
var maxAge =60;
// var amount =3;
var total =(amount*365)*(maxAge-age);
console.log("You will need "+ total+  " cups of tea to last you until the ripe old age of " + maxAge)
}calculateSupply(27 ,3)

// task 4
function cube(num1) {
    // var num1= 5;
    var num = num1 * 3;
    console.log("multiply ( "+num1+ " * 3) = "  + num)
}cube(5)



function multiply(num2 , num3) {
    // var num2 =3;
    // var num3 = 6;
    var mult = num2 * num3;
    console.log("multiply ( "+num2+ " * " +num3 +") = "+ mult)
}multiply(3,6)

// //this solution for task 4 in one function
// function all(num1 ,num2){
//     var num = num1 * 3;
//     var mult = num2 * num1;
//     console.log("multiply ( "+num2+ " * " +num1 +") = "+ mult)
//  console.log("multiply ( "+num1+ " * 3) = "  + num)
// }all(5,3)


// task 5
function fullName(firstName , lastName ){
    // var firstName= "Hala ";
    // var lastName="Aldabbas";
    console.log(firstName + lastName )
}fullName( "Hala ","Aldabbas")


// task 6
function avarge(n1,n2,n3,n4,n5) {
    // var n1=10;
    // var n2=10;
    // var n3=10;
    // var n4=10;
    // var n5=10;
    var ave=(n1+n2+n3+n4+n5)/5;
    console.log("The Avarge is "+ave)

}avarge(10,5,6,10,8)

// task 7
function randomNumber(){
    console.log("randomNumber is "+Math.random());
}randomNumber()