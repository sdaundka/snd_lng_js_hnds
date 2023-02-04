//Creating an array:
//1. Using new Array
var arr = new Array(10, 20, 30, 40, 50);
console.log(arr);

//Using array literal/initializer []
arr = [40, 50, 60, 70, 80];
console.log(arr);

//To create an array of non-zero length
//1. Using an Array
arr = new Array(4); //Here the length is 4. 
console.log(arr);
console.log(arr.length);

arr = Array(6); //The array can be created without even using the new keyword
console.log(arr.length);

//2. Literal approack
arr = [];
arr.length = 3;
console.log(arr);
console.log(arr.length);

//Array(N) -> Here N should be a whole number. Fractional number would give - RangeError: Invalid array length
//arr  = Array(9.3);
console.log(arr);

//Referring to array element
arr = ["one", "two", "three"];
console.log(arr[2]);
console.log(arr[3]); //Should give undefined

//Populating an array
//Array can be populated with the data as mentioned below
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
console.log(emp);

//Another way of array population
arr = [];
arr[3.4] = "Oranges"; //Here if we pass non interger value to the indedx, then it would be created as a property in the array instead of the array element.
console.log(arr.length); //This will print 0
console.log(Object.hasOwn(arr, 3.4)); //This should print true as the array has an element 3.4

//Understanding an array length:
arr = [];
arr[30] = 20;
console.log(arr.length); //Arr length is calculated as highest index + 1

var cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats); //Should print all 3 values
cats.length = 2;
console.log(cats); //Should print initial 2 values

var colors = ["red", "green", "blue"];
//Iterating over array
for(var color of colors) {
    console.log(color);
}

//Iterating using foreach
console.log("==== Iterating over an array using forEach loop.");
colors.forEach(color => console.log(color));

//Array methods:
let myArray = ["1", "2", "3"];
let chars = ["A", "B", "C"];
myArray = myArray.concat(chars); // concat method joins two or more arrays and returns a new array
console.log(myArray);

myArray = ["Wind", "Rain", "Fire"];
//Join the array element seperated by symbol -
var list = myArray.join("-");
console.log(list);

//push method: to add a new element on the array
myArray.push("Soil");
console.log(myArray);

//pop method: to remove the element from the array
var element = myArray.pop();
console.log("Popped element is : " + element);
console.log(myArray);

//Remove the first element of the array - using shift method
element = myArray.shift();
console.log("Shift Element : " + element);
console.log(myArray);

//Insert the element at the front or on the 0th index
myArray.unshift("Wind");
console.log(myArray);


//Extract the specific range element of the array
myArray = ["a", "b", "c", "d", "e"];
var sliceArr = myArray.slice(1, 4); //extracts the element from one till 4-1
console.log(sliceArr);
console.log(myArray);

//Access the element at specific index
console.log(myArray.at(1)); //Access the element at index 1 from 0 -> Should print the "b"
console.log(myArray.at(-1)); //Access the element 1st element from the end. -> Should print the "e"

//Remove the element from the array for given range. 
var splicedArray = myArray.splice(1, 3);
//var splicedArray = myArray.splice(1, 3); splice can even optionally replace the element at specified index
console.log(splicedArray);
console.log(myArray);

//Reverse the array;
myArray = ["a", "b", "c", "d", "e"];
console.log(myArray.reverse());

//flat() method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
console.log(myArray);

//Sort the array element
myArray = ["Wind", "Rain", "Fire"];
console.log(myArray.sort());
//Sort method also accepts the callback function which determines the order of the sorted elements.


arr = ["a", "b", "a", "b", "a"];
//Check if specific element exists in the array
console.log(arr.indexOf("a"));
console.log(arr.indexOf("a", 1)); //Check the index of the specied element from the given array index
//Checking the index from the last
console.log(arr.lastIndexOf("a"));
console.log(arr.lastIndexOf("b", 2));

//map method: returns the new array by executing the callback function on the each of the array elements
a1 = ["a", "b", "c"];
console.log(a1);
a1 = a1.map(element => element.toUpperCase());
console.log(a1);

//flatmap method: flatMap() method runs map() followed by a flat() of depth 1.
a1 = ["a", "b", "c"];
a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2);

//filter method: filters the array element based on the callback and returns as a new array
a1 = ["a", 10, "b", 20, "c", 30];
a2 = a1.filter(element => typeof element === "number");
console.log(a2);

//find method: finds the first element of the array based on the callback
var val = a1.find(element => typeof element === "number");
console.log(val);

//findlast: 
var val = a1.findLast(element => typeof element === "number");
console.log(val);//Should return 30;

console.log(a1.indexOf(10));
console.log(a1.lastIndexOf(30));

a1 = [1, 2, 3];
function isNumber(value) {
    return typeof value === "number";
}

console.log(a1.every(isNumber));
console.log(a1.some(isNumber));

a3 = ["1", "2", "3"];
console.log(a3.some(isNumber));//Should return false as the elements of the array are string

a = [10, 20, 30];
var total = a.reduce((accumulator, currentValue) => accumulator + currentValue,
0);
console.log(total);

//Working with Array liked objects
Array.prototype.forEach.call("a string", (chr) => {
    console.log(chr);
  });