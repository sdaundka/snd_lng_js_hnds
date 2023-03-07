function PriorityQueue() {
    
    collections = [];

    this.enqueue = function(element) {
        if(this.isEmpty()) {
            collections.push(element);
            return;
        }

        var isAdded = false;
        for(var i = 0; i < collections.length; i++) {
            if(element[1] < collections[i][1]){
                collections.splice(i, 0, element);
                isAdded = true;
                break;
            }
        }

        if(!isAdded)
            collections.push(element);

    }

    this.dequeue = function() {
        var element = collections.shift();
        return element[0];
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

    this.printCollections = function() {
        console.log(collections);
    }

}

var queue = new PriorityQueue();
queue.enqueue(['10', 1]);
console.log(queue.isEmpty());
queue.enqueue(['20', 2]);
queue.enqueue(['100', 1]);
queue.printCollections();
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.isEmpty());
queue.printCollections();
queue.enqueue(['10000', 1]);
queue.printCollections();
queue.enqueue(['1000', 1]);
queue.printCollections();