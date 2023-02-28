//JS Array provides methods similar to the Stack. Hence, array can be used as a stack. 
//String Reverse Program: Using an array as a stack. 
var letters = [];

//input word
//var word = "racecar";
var word = "hello";

function push(word) {
    for(var i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
}

function pop() {
    var reverese = "";
    for(var i = 0; i < word.length; i++) {
        reverese += letters.pop();
    }
    return reverese;
}


console.log(word);
push(word);
var reverese = pop();
console.log(reverese);