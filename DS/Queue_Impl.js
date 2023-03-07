function Queue() {
    
    collections = [];

    this.enqueue = function(element) {
        collections.push(element);
    }

    this.dequeue = function() {
        return collections.shift();
    }

    this.front = function() {
        if(!this.isEmpty())
            return collections[0];
        return -1;
    }

    this.size = function() {
        return collections.length;
    }

    this.isEmpty = function() {
        return collections.length == 0;
    }

}

var queue = new Queue();
queue.enqueue(10);
console.log(queue.isEmpty());
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.size());
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());