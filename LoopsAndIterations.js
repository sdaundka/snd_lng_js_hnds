//For statement
console.log("For statement");
for(let i = 0; i < 5; i++){
    console.log("Walking east one step.");
}

//do...while statement
var i = 0;
console.log("do...while statement");
do{
    console.log("i : " + i);
    i++;
} while(i<5);

//while statement
var count = 0;
while(count < 5) {
    console.log("Count : " + count);
    count++;
}

//break;
while(count < 10) {
    if(count == 7)
        break;
    console.log("Count : " + count);
    count++;
}

//for..in statement
console.log("for..in statement");
let arr = [1, 2, 3, 4, 5, 6];
for(let i in arr) 
    console.log("i : " + i + ", arr[i] : " + arr[i]);

//for...of statement
console.log("for...of statement")
for(let i of arr)
    console.log(i);

//for... and or for...in statement can be used with destructuring. 
console.log("for... and or for...in statement can be used with destructuring");
let obj = {foo: 1, bar: 2};
for(let[key, val] of Object.entries(obj))
    console.log(key + " : " + val);

