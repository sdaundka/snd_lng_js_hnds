class MySet {
    
    collections;

    constructor() {
        this.collections = [];
    }

    has(element) {
        return this.collections.indexOf(element) !== -1;
    }

    values() {
        return this.collections;
    }

    size() {
        return this.collections.size;
    }

    add(element) {
        if(!this.has(element)) {
            this.collections.push(element);
            return true;
        }
        return false;
    }

    remove(element) {
        if(this.has(element)) {
            var index = this.collections.indexOf(element);
            this.collections.splice(index, 1);
            return true;
        }
        return false;
    }

    union(otherSet) {
        var unionSet = new MySet();
        var firstSet = this.values();
        firstSet.forEach(function(element) {
            unionSet.add(element);
        });
        var secondSet = otherSet.values();
        secondSet.forEach(element => {
            unionSet.add(element);
        })
        return unionSet;
    }

    intersection(otherSet) {
        var interSectionSet = new MySet();
        var firstSet = this.values();
        firstSet.forEach(function(element) {
            if(otherSet.has(element))
                interSectionSet.add(element);
        });
        return interSectionSet;
    }
}

var mySet = new MySet();
mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(30);
console.log(mySet.values());
mySet.remove(20);
console.log(mySet.values());
console.log(mySet.has(10));

var mySet2 = new MySet();
mySet2.add(10);
mySet2.add(20);
mySet2.add(40);
var unionSet = mySet.union(mySet2);
console.log(unionSet.values());

var interSectionSet = mySet.intersection(mySet2);
console.log(interSectionSet.values());