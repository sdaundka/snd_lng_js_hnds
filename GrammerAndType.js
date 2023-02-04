const Früh = "foobar";
console.log(Früh);
var y;
function variableDeclarationDemo() {
    let x = 10;
    var y = 20;
    const Z = 30;

    console.log(x);
    console.log(y);
    console.log(Z);
}

variableDeclarationDemo();

//x is declared with let and its scoped within the method variableDeclarationDemo. Hence, here x is not defined.
//console.log(x);
console.log(y);
//Z is declared with const and its scoped within the method variableDeclarationDemo. Hence, here Z is not defined.
//console.log(Z);

//Declare a const without initialisation
//const A; //Here the constant should be always initialisation. Otherwise error: Missing initializer in const declaration.

const A = 20;
console.log(A);

if (true) {
    var x = 5; //var is used to declared the global scope. 
}
console.log(x);

//Variable Hoisting: var- declared variables are hoisted, meaning these variables can be referred anywhere in its scope even if the declaration isn't reached yet. 
console.log(b === undefined);
var b = 3;
console.log(b === undefined);

(function() {
    var b;
    console.log(b);
    b = "Local Value";
})();
console.log(b);

//Variable Hoisting: let and const can not be hoisted. Doing so results into 'Reference Error'
//Possible Error: Cannot access 'c' before initialization
//Example:
//console.log(c);
let c = 10;

//console.log(d);
const d = 20;

//Constant declaration: 
const PI = 3.14;
console.log(PI);

//constant is used to prevent the reassignment, but it doesn't prevent mutation. 
const MY_OBJ = {'key': 'val1'};
//MY_OBJ = null; //This is not allowed.
MY_OBJ.key = 'val2'; //This is possible. 
console.log(MY_OBJ);

//Data Types in the JavaScript
/*
1. Boolean: true/false
2. null: Keyword to denote the null value. null is not the same as Null, NULL or any other variant. 
3. undefined: A declared property whose value is not defined/initialised. 
4. Number: to represent int or double. 
5. BigInt: An integer with arbitary presion. 
6. String
7. Symbol
8. Object
*/

let ans = 42;
ans = "Hello"; //Its possible as JS is dynamically typed language. You dont have to specify the data types of the variable when you declared it. Which means Types can be auto-converted to other types as needed. 

//+ Operator:
x = 'The ans is : ' + 42;
y = 42 + ' is the answer'
z = '42' + 2;
console.log(x);
console.log(y);
console.log(z);

//But with all other operators (apart from +), JS does not convert numeric value to String
x = '37' - 7;
console.log(x);
console.log(typeof x);

x = '37' * 7;
console.log(x);
console.log(typeof x);

//Converting string to numbers: parseInt() or parseFloat()
console.log(parseInt('101'));
console.log(parseInt('101', 2)); //Here the radix 2 is used to denote the number system. 2 stands for binary
console.log(parseInt('101', 10));

//Literals: represent the values in JavaScript. These are fixed values and not the variables. 
const coffees = ['French Roast', 'Colombian', 'Kona'];
console.log(coffees);

const fish = ['Lion', , 'Angel']; //two commas in a row is used to represent the empty slot.
console.log(fish);
console.log(fish.length);

var fish1 = ['Lion', 'Angel', ]; //Here the last comma is ignored in the literal
console.log(fish1);
console.log(fish1.length);

var fish2 = [ , 'Lion', 'Angel']; //All commas except the last one is considered in the string literal
console.log(fish2);
console.log(fish2.length);

//String literals
var str1 = `In JavaScript '\n' is a line-feed.`;
console.log(str1);

var str2 = `In JavaScript, template strings can run
over multiple lines, but double and single
quoted strings cannot.`;
console.log(str2);


//String interpolation
const name = 'Lev', time = 'today';
var str3 = `Hello ${name}, how are you ${time}?`;
console.log(str3);
