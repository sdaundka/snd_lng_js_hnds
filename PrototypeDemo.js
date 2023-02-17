//Prototype is a mechanism by which JavaScript object inherits the features from one another. 
const myObject = {
    city: "Pune",
    greet() {
        console.log("Welcome to : " + this.city);
    }
};

myObject.greet();

//When we print the myObject in the browser console, we get below things in the output. Here along with the object properties, some additional properties like Prototype is also seen. 
/*
myObject
{city: 'Pune', greet: ƒ}
city"Pune"
greetƒ greet()
[[Prototype]]Object
constructorƒ Object()
hasOwnPropertyƒ hasOwnProperty()
isPrototypeOfƒ isPrototypeOf()
propertyIsEnumerableƒ propertyIsEnumerable()
toLocaleStringƒ toLocaleString()
toStringƒ toString()
valueOfƒ valueOf()
__defineGetter__ƒ __defineGetter__()
__defineSetter__ƒ __defineSetter__()
__lookupGetter__ƒ __lookupGetter__()
__lookupSetter__ƒ __lookupSetter__()
__proto__(...)
get __proto__ƒ __proto__()
set __proto__ƒ __proto__()
*/

// Accessing one of the property: 
myObject.toString(); //prints "[object Object]" => This comes from the prototype object.

//To get the prototype of the object. 
console.log(Object.getPrototypeOf(myObject));

//The prototype of the object may not be always Object.prototype
const myDate = new Date();
let object = myDate;
do{
    object = Object.getPrototypeOf(object);
    console.log(object);
} while(object);

//Shadowing the properties
const date = new Date(2005, 11, 17);
console.log(date.getFullYear());
date.getFullYear = function() {
    return "Weird Value";
}
console.log(date.getFullYear());

//Setting the Object prototype
//Approach 1: Using Object.create()
const personPrototype = {
    greet() {
        console.log("hello");
    },

    greetPerson() {
        console.log("hello : " + this.name);
    }
};
const person1 = Object.create(personPrototype);
person1.greet();
//Here we have created the personPrototype object. Using Object.create(), we are creating the new object whose prototype is personPrototype

//Approach 2: Using a constructor
function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personPrototype);
var person = new Person("Mac");
person.greet();
person.greetPerson();

//The other way to achieve same thing like Object.assign.
Person.prototype.greet = personPrototype.greet;
Person.prototype.greetPerson = personPrototype.greetPerson;
var person2 = new Person("Win");
person2.greet();
person2.greetPerson();

//Object could have the self properties or properties from the prototype
var person3 = new Person("Lin");
console.log(Object.hasOwn(person3, "greet"));
console.log(Object.hasOwn(person3, "name"));