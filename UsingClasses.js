//Class and Object example:
var bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());

/*
Typically class has following 3 features
Constructor
Instance methods and instance fields
Static methods and static fields
*/

//Declaring a class: Post ES6
class MyClass {
    
    myField = "foo";

    constructor() {
    
    }

    method1() {
        console.log("Method1...");
    }

    method2 = function() {
        console.log("Method2...");
    }

    static className = "MyClass"; //Static variable

    //Static Method
    static getClassNameWithRandomNumber() {
        let randomNumber = Math.floor(Math.random() * 20);
        return MyClass.className + ":" + randomNumber;
    }
 
    //Static Block
    static {
        MyClass.classId = "ClassIdMyClass";
    }
}

var myClass = new MyClass();
myClass.method1(); //Calling method
myClass.method2();

/*
Trying to access the static fields with object reference does not work
console.log(myClass.className); //Calling Static Variable
console.log(myClass.classId);
console.log(myClass.getClassNameWithRandomNumber()); //Calling ClasName with Random Numbers
*/
console.log(MyClass.className);
console.log(MyClass.classId);
console.log(MyClass.getClassNameWithRandomNumber()); //Calling ClasName with Random Numbers


//var myInstance = MyClass(); //Creating an object without new keyword: Class constructor MyClass cannot be invoked without 'new'

//Class declaration can be hoisted

//Class can be created using another approach: Class expressions: Similar to function
var MyClass1 = class {
    
    method1() {
        console.log("Class Expression: Method1");
    }

    method2() {
        console.log("Class Expression: Method2");
    }

}

var myClass1 = new MyClass1();
myClass1.method1();
myClass1.method2();

//Constructor
class Color {
    constructor(r, g, b) {
      // Assign the RGB values as a property of `this`.
      this.values = [r, g, b];
    }

    //Define instance methods:
    getRed() {
        return this.values[0];
    }

    //Define setInstance method
    setRed(value) {
        this.values[0] = value;
    }

    toString() {
        return this.values.join(", ");
    }
}

const red = new Color(255, 0, 0);
console.log(red);
console.log(red.getRed());
red.setRed(0);
console.log("After setting the red value : "+red.getRed());

//Private fields in the class:
//Private fields can be declared with the prefix #
class Color1 {
    #values1;
    constructor(r, g, b) {
      // Assign the RGB values as a property of `this`.
      this.values = [r, g, b];
      this.#values1 = [r, g, b];
    }

    //Define instance methods:
    getRed() {
        return this.values[0];
    }

    getPrivateFieldValues() {
        return this.#values1;
    }

    //Define setInstance method
    setRed(value) {
        this.values[0] = value;
    }
}
var color1_1 = new Color1(200, 0, 0);
console.log("Non-Private Field : " + color1_1.values);
console.log(color1_1.getRed());
//console.log("Private Fields : " + color1_1.#values1); //Error: Property is not accessible outside the class Color1
console.log("Private Fields : " + color1_1.getPrivateFieldValues());

//Extends and Inheritance
class AlphaColor extends Color {
    
    #alpha;

    constructor(r, g, b, a) {
        console.log("In the constructor AlphaColor");
        super(r, g, b);
        this.#alpha = a;
    }

    toString() {
        return `${super.toString()}, Alpha : ${this.#alpha}`;
    }
}

var alpha = new AlphaColor(255, 0, 0, 10);
console.log(alpha.toString());

//Tried class hands on. 
//Done