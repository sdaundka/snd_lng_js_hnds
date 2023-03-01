var mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(30);
console.log(mySet.values());
mySet.delete(20);
console.log(mySet.values());

var mySet2 = new Set();
mySet2.add(10);
mySet2.add(20);
mySet2.add(40);