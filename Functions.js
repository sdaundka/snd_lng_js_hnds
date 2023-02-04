function square(number) {
    return number * number;
}

console.log(square(10));

//Parameters are essentially passed to a funtion by value: 
//so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, the change is not reflected globally or in the code which called that function.
//When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function
function myFunc(car) {
    mycar.make = "Toyota";
}

const mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
};
console.log(mycar);
myFunc(mycar);
console.log("After calling myFunc : ");
console.log(mycar);

function changeArr(arr) {
    arr[0] = 30;
}
const arr = [45];
console.log(arr);
changeArr(arr);
console.log("After calling changeArr : ");
console.log(arr);

//Function Expression: 
//Function can be created using expression. Such a functions could be anonymous
const sqr = function(number) {
    return number * number;
}
const x = sqr(10);
console.log(x);

//Name can be also provided to function in function expression. 
const factorial = function fac(number) {
    if(number == 1)
        return 1;
    return number * fac(number - 1);
}
var y = factorial(5);
console.log("y : " + y);

//Function expression can be used to pass the function as an argument to another function. 
console.log("Passing function expression as an argument to another function.")
function map(f, a){
    const result = new Array(a.length);
    for(let i in a) {
        result[i] = f(a[i]);
    }
    return result;
}

const cube = function(number) {
    return number * number * number;
}

const numbers = [0, 1, 2, 3, 4];
var results = map(cube, numbers);
console.log(results);

//Defining the function based on the condition. 
let myFunc2;
//let num = 10; //In such a case, the condition is not met and returns error: myFunc2 is not a function
let num = 0;
if (num === 0) {
  myFunc2 = function (theObject) {
    theObject.make = 'Toyota';
  }
}
const mycar1 = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
};
myFunc2(mycar1);
console.log(mycar1);

//Function Hoisting: hoisting meanse function can be called even before its declared. Function should be present in the same scope. 
console.log("IsPrime: " + isPrime(2));
function isPrime(number) {
    if(number == 2 || number == 3)
        return true;
    return false;
}

//Note: Function hoisting only works with function declarations. It does not work with the function expressions. 

//Nested function:
//Inner function is closure and can access properties/variables in the outer functions. 
function addSquares(a, b) {

    function square(x) {
        return x * x;
    }

    return square(a) + square(b);
}

const a = addSquares(2, 3);
console.log(a);
const b = addSquares(4, 3);
console.log(b);
const c = addSquares(4, 5);
console.log(c);

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1);

//Closure provides a sort of encapsulation for the variables of the inner function

//Function parameters:
//Default Params: 
function multiply(a, b) {
    b = (typeof b !== 'undefined') ? b : 1;
    return a * b;
}

ans = multiply(5);
console.log("Multiplication ans : " + ans);

//The above thinkg could be achieved using default params value as below
function multiply1(a, b = 2) {
    return a * b;
}

ans = multiply1(5);
console.log("Multiplication1 ans : " + ans);

//Rest parameters allows us to represent an indefinite number of the arguments as an array
function multiply(multiplier, ...args){
    return args.map(x => multiplier * x);
}
var arr1 = multiply(1, 2, 6, 4);
console.log(arr1);

function multiply(a, b, c) {
    return a * b * c;
}
console.log("Multiplication ans : " + multiply(10, 20, 30));

//Arrow function:
//Arrow function expression is a shorter syntax compared to the function expression. 
var a1 = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
a2 = a1.map(function(s) { return s.length; });
console.log(a2);
//With arraow function.
a3 = a1.map(s => s.length);
console.log(a3);
