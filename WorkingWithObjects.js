//Creating new objects
//1. Using object initializers
let value1, value2, value3;
var obj = {
    property1: value1,
    2: value2,
    "property n": value3
}
console.log(obj);

//Creating the object based on some condition
let x;
let cond = true;
if (cond) {
  x = { greeting: "hi there" };
}
console.log(x);

//Nested objects
var myHonda = {
    color: "red",
    wheels: 4,
    engine: {"cylinders": 4, "size": 2.2}
};
console.log(myHonda);

//2. Using a constuctor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var honda = new Car("Honda", "City", 2021);
console.log(honda);

//3. Create the object using Object.create() method
//Animal properties and method encapsulation
var Animal = {
    type: "Invertebrates",
    displayType() {
        console.log(this.type);
    }
}

//Create a new animal object using Object
var animal = Object.create(Animal);
animal.displayType();

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();

//Object and Properties
var myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
};
//Accessing object properties:
//1. Using dot notation
console.log(myCar.make + ", " + myCar.model + ", " + myCar.year);
//2. Using bracket notation
console.log(myCar["make"] + ", " + myCar["model"] + ", " + myCar["year"]);

var str = "myString";
myObj = {};
myObj.str = "This key is in variable str";
console.log(myObj.str);
console.log(myObj[str]);
console.log(myObj.myString);
console.log(myObj);
myObj[str] = "This key is in variable str";
console.log(myObj);

//Iterating object properties
Object.keys(myObj).forEach(
    (i) => console.log(i + " : " +myObj[i])
)

//Deleting the object property
delete myObj.str;
console.log(myObj);

//Inheritance
var car1 = new Car("Suzuki", "Swift", 2023);
console.log(car1);
var car2 = new Car("Hundai", "Creta", 2022);
console.log(car2);

//Defining the property on the prototype object so that it would be available to all objects of the same type. 
Car.prototype.color = "red";
console.log(car1);
console.log(car2);
console.log(car1.color);
console.log(car2.color);

//List all the properties
var objectToInspect = Object.getPrototypeOf(car1);
var result = Object.getOwnPropertyNames(objectToInspect);
console.log(result);

//Defining the method: Here we defined the method on the prototype object which will be available to all the object of the same type. 
Car.prototype.displayCar = function() {
    var result = `Very nice ${this.year} ${this.make} ${this.model}`; //Here this is used for actual object reference. 
    console.log(result);
}

car1.displayCar();
car2.displayCar();

var Manager = {
    name: "Kristen",
    age: 27,
    job: "Software Engineer"
}

var Intern = {
    name: "Roh",
    age: 22,
    job: "Software Engineer Intern"
}

//Above the Manager and Intern are two distinct objects

function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
}

//Adding sayHi method in the both Manager and Intern object
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

//Calling sayHi method on the respective object
Manager.sayHi();
Intern.sayHi();

//Defining the getters and setters methods
//Approach 1: Defining the methods at the Object Initializers level
//In this approach, the getters and setters are added while creation of the object
myObj = {
    a: 7,
    
    get b() {
      return this.a + 1;
    },

    set c(x) {
      this.a = x / 2;
    },
};

console.log(myObj.a);
console.log(myObj.b); //Calling the getter method
myObj.c = 20; //Calling the setter method
console.log(myObj.a);


//Approach 2: Adding the methods after object initialisations. 
console.log("Adding the getter/setter methods after object initialisations");
myObj = {a : 10};
console.log(myObj.a);
Object.defineProperties(myObj, {
    
    b: {
        get() {
            return this.a + 1;
        }
    },

    c: {
        set(x) {
            this.a = x/2;
        }
    }
});

//Accessing the object property through getters
console.log(myObj.b);
console.log(myObj.c);

//Comparing the Objects
var fruit = { name: "apple" };
var fruitbear = { name: "apple" };
console.log(fruit === fruitbear);
console.log(fruit == fruitbear);

fruit = { name: "apple" };
fruitbear = fruit;
console.log(fruit === fruitbear);
console.log(fruit == fruitbear);

//Chaning the one of the objects value, reflects the change in the other object as well. 
fruit.name = "grape";
console.log(fruitbear.name);