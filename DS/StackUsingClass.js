class Stack {
    count;
    storage;
    
    constructor() {
        this.count = 0;
        this.storage = [];
    }

    push(param) {
        this.storage[this.count] = param;
        this.count++;
    }

    pop() {
        if(this.count == 0)
            return undefined;

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    peek() {
        if(this.count == 0)
            return undefined;
        return this.storage[this.count - 1];
    }

    size() {
        return this.count;
    }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
myStack.push("hello");
console.log("Size : " + myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log("Size : " + myStack.size());