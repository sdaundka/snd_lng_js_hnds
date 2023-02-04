class Stack {

    constructor() {
        this.count = 0;
        this.storage = {};
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
        console.log(this.count);
    };

    peek() {
        return this.storage[this.count - 1];
    };
    
}

var myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.peek());