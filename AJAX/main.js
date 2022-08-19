// Create a function called sum
// that takes a single parameter n,
// and return the sum of all integers up to n starting from 0

// Ex: sum(2); => 2 + 1 + 0 => 3
// Ex: sum(5); => 5 + 4 + 3 + 2 + 1 + 0 => 15

function sum(number)
{		
	if (number===0)
	{return 0;}

	else
	{return number+sum(number-1);}

}
// var num= prompt("Enter number ");
// sum(Number(num));
console.log(sum(Number(10)))

// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1

// Ex: factorial(3); =>3* 2 * 1 => 6
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24


function factorial(n){

    if( n == 0){
return 1;
    }else{
        return n*factorial(n-1)
    }
}console.log(factorial(5))



// Create a function called repeatStr
// that takes 2 parameters string and number,
// and return the string number time with space
// Important: the stop condition should be [somthing=== 0]
//  Think how we can return nothing ???
//  Important: You should dint have extra space at the end
// Ex: repeatStr("to",2); => "to to"
// Ex: repeatStr("to",4); => "to to to to"


function repeatStr(str ,num){
    if(num <= 0){
        return "";
    }else{
        return str+" "+repeatStr(str,num-1);
    }
}
console.log(repeatStr("to" ,3))




// Create a function called sum2
// that take two parameter
// and will return the sumation from the first number to the second number

// Ex: sum2(4, 5); => 4 + 5 => 9
// Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18

function sum2(x,y){
	if (x==y) 
			{return x;}
	if (x<y) {
		return x+sum2(x+1,y);
	}

	if (x>y) {
		return x+sum2(x-1,y);
	}
} console.log(sum2(7 ,4 ))
console.log(sum2(2 ,5 ))