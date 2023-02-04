var obj = {};
obj.x = 10;
var key = "y";
obj.key = 20; //This expression wont add the value 20 against the key y. Instead it will add the value against "key"
console.log(obj);
obj[key] = 30; //This expression add the value against "y" which is the value for the "key" at line 3;
console.log(obj);

//if the expression does not evaluates to the object, then the assignment to the properties of the expression do not assign
var val = 10;
val.x = 20;
console.log(val.x); //Prints undefined since val is not object. 
console.log(val);

//Use strict-mode
//"use strict";
var val1 = 10;
val1.y = 30;
console.log(val1.y);

//Destucturing: Helps to extract the values from the array and object
var foo = ["one", "two", "three"];
var one = foo[0];
var two = foo[1];
var three = foo[3];
console.log("One : " + one + ", Two : " + two + ", Three : " + three);

//Using object destructuring
var[one, two, three] = foo;
console.log("One : " + one + ", Two : " + two + ", Three : " + three);


//Evaluation and Nesting
function f () {
    console.log('F!');
    return 2;
}
function g () {
    console.log('G!');
    return 3;
}
let x, y;

y = x = f();
console.log("Y : " + y);
y = [ f(), x = g() ];
console.log("Y : " + y);
x[f()] = g();
console.log("X : " + x);
console.log("X : " + x[0]); //Should be undefined. 
console.log("X : " + x instanceof Array);
console.log("X 2: " + x[2]);

//"use strict";
const z = y1 = x1 = f(); 
console.log("X1 : " + x1 + ", Y1 : " + y1 + ", Z : " + z);
x1 = 10; //Here the x1 and y1 would be created as variable but these are not the constant unlike z. Hence value of x could be updated. 
console.log("X1 : " + x1 + ", Y1 : " + y1 + ", Z : " + z);
//z = 30; //z is constant and hence its value can not be changed. 
console.log("X1 : " + x1 + ", Y1 : " + y1 + ", Z : " + z);

//Operators:
//Arithemetic operators like +, -, /, *, % etc. Also supports the Exponentiation operator
//example: 2 ^ 3;
console.log(2 ** 3);

//Bitwise operators: 
//A bit wise operator treats their operand as set of the 32 bits(zeroes and ones) rather than decimal, hexadecimal or octal etc. 
//for example
console.log(9 & 1); //1001 & 0001 => 0001

console.log('Cat' && 'Dog');

//delete object deletes a object property
delete obj.key;
console.log(obj);
delete obj["x"];
console.log(obj);
console.log(obj.key); //should return undefined as the value is already deleted. 

//Typeof
const myFun = new Function("5 + 2");
const shape = "round";
const size = 1;
foo = ["Apple", "Mango", "Orange"];
const today = new Date();
console.log(typeof myFun);
console.log(typeof shape);
console.log(typeof size);
console.log(typeof foo);
console.log(typeof today);

//In operator
//In operator returns true if the specified object is in the specified object. 
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees);
console.log(6 in trees);