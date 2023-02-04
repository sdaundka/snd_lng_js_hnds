//Program to check the String palindrome
//Implement Stack using array
var source = "racecar";
var rword = "";
var letters = [];

function printIndividualLetterInArray() {
    for(var i in letters) {
        console.log(letters[i]);
    }
}

//Put/Push the letters on the stack
for(var i = 0; i < source.length; i++) {
    letters.push(source[i]);
}

//Pop the letters from the stack
for(var i = 0; i < source.length; i++) {
    rword += letters.pop();
}

if(rword === source) {
    console.log('Palindrome');
} else {
    console.log('Not Palindrome');
}