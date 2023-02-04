//Number
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Math Number
console.log(Math.PI);
console.log(Math.pow(10, 2));
console.log(Math.sin(30));
console.log(Math.floor(2.30));
console.log(Math.floor(2.99));
console.log(Math.ceil(3.3));

//BigInts.
//Useful when we want to represent the number beyond Number.MAX_SAFE_INTEGER(2^53 - 1)
//Big Int Declaration - Number followed by suffix n
var b1 = 123n;
var b2 = -1234567890987654321n;

//Big Int Declaration - Another way
b3 = BigInt(123);
b4 = BigInt("-1234567890987654321");
b5 = BigInt(-1234567890987654321);
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);

//BigInt can be used to reperesent the large integers, but it can not be used to represent the floating point numbers. 

//Dates
var date1 = new Date();
console.log(date1);

var date2 = Date(); //Calling Date without new returns the String representation of the date.
console.log(date2);

//Date has get and set methods. 
date1.setDate(3);
console.log(date1);
console.log(date1.getFullYear());

const date3 = new Date(1995, 11, 31, 23, 59, 59, 999); //Another Date constructor
console.log(date3);

//Date Parse method is used to convert the date string to existing date object
var date5 = Date.parse("Aug 9, 1995"); //Represents the number
console.log(date5);
var date4 = new Date();
date4.setTime(date5);
console.log(typeof date5);
console.log(typeof date3);
console.log(typeof date4);