
//Base class
function Shape(x, y) {
    this.x = x;
    this.y = y;
}

//Base Class method
Shape.prototype.move = function() {
    this.x += 1;
    this.y += 1;
}

//Child classs
function Circle(x, y, r) {
    //Call the constructor of the base class. 
    Shape.call(this, x, y);
    this.r = r;
}

//Circle derives from Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

//Add method to child class
Circle.prototype.circumference = function() {
    return this.r * 2 * Math.PI;
}

//Create the object of the base class
var shape = new Shape(1, 2);
console.log("x : " + shape.x + ", y : " + shape.y);
shape.move();
console.log("x : " + shape.x + ", y : " + shape.y);

//Create the object of the child class
var circle = new Circle(3, 4, 2);
console.log("x : " + circle.x + ", y : " + circle.y + ", r : " + circle.r);
circle.move();
console.log("x : " + circle.x + ", y : " + circle.y + ", r : " + circle.r);
console.log("Circumference : " + circle.circumference());

//Check the objects using instance of
console.log(shape instanceof Shape);
console.log(shape instanceof Circle);
console.log(circle instanceof Circle);
console.log(circle instanceof Shape);

//Check the prototype
console.log("Check prototype of....")
var shape_proto = Object.getPrototypeOf(shape);
var circle_proto = Object.getPrototypeOf(circle);
console.log(Object.getPrototypeOf(circle_proto) === shape_proto);