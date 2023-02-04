//Map Object
//Map object is simple key value map and iterate its element in the insertion order
var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot"); //Put the key value in the map
console.log(sayings.size); //Prints the size of the map
console.log(sayings); //Prints the map key value pairs
console.log(sayings.get("dog")); //Get the value for the key
console.log(sayings.get("cat"));
console.log(sayings.has("elephant")); //Checks if the given key is present or not
console.log(sayings.delete("dog")); //Deletes the key value pair
console.log(sayings);

//Iterate over the map
for(var [key, value] of sayings) {
    console.log("Key : " + key + ", Value : " + value);
}

//Clears the map
sayings.clear();

console.log(sayings.size);

//Traditionally objects has been used to map the strings to values.
//Tips to decide whether to use a Map or an Object
/*
Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
Use maps if there is a need to store primitive values as keys because object treats each key as a string whether it's a number value, boolean value or any other primitive value.
Use objects when there is logic that operates on individual elements.
*/

//Set
//Set object is collections of unique values. You can iterate its elements in the insertion order. A value in a set may only occur once as its unique in the Set's collection
var set = new Set();
set.add(1);
set.add("some text");
set.add("foo");
console.log(set); //prints the set
console.log(set.size);
console.log(set.has("foo"));
console.log(set.has("foo1"));
console.log(set.delete("foo1"));
console.log(set.delete("foo"));
console.log(set);

//Converting between set and array
//Creating array from Set. 
var arr = Array.from(set);
console.log("Array is : " + arr);

var arr1 = [...set];
console.log("Array cretaed using spread : "+ arr1);

//Creating the set from the array
var set1 = new Set([1, 2, 3, 4]);
console.log("Set1 : " + set1);

//Array vs Set
/*
Deleting Array elements by value (arr.splice(arr.indexOf(val), 1)) is very slow.
Set objects let you delete elements by their value. With an array, you would have to splice based on an element's index.
*/