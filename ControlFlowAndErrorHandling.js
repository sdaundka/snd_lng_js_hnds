//Block Statements
//if..else
var x = 10;
if(x <= 10)
    console.log('Smaller');
else
    console.log('Larger');

//if..elseif..else
var stateCode = "TN";
if(stateCode === "MH")
    console.log("Maharashtra");
else if(stateCode === "GJ")
    console.log("Gujrat");
else if(stateCode == "WB")
    console.log("West Bengal");
else if(stateCode === "TN")
    console.log("Tamilnadu");
else
    console.log("Other state");

//False Values
//Values evaluating to false: false, undefined, null, 0, NaN, the empty string ""
var a;
if(!a)
    console.log("False");
else
    console.log("True");


var b = false;
if(!b)
    console.log("False b");
else
    console.log("True b");

var c = null;
if(!c)
    console.log("False c");
else
    console.log("True c");

var d = NaN;
if(!d)
    console.log("False d");
else
    console.log("True d");

var e = "";
if(!e)
    console.log("False e");
else
    console.log("True e");

//Switch Statement
var state;
switch(stateCode) {
    case "MH":
        state = "Maharashtra"
        break;
    
    case "GJ":
        state = "Gujrat";
        break;

    case "TN":
        state = "Tamilnadu";
        break;

    case "WB":
        state = "West Bengal";
        break;

    default:
        state = "Other state";
}
console.log(state);

//try-catch-finally demo
const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

function getMonth(num) {
    num--;
    if(months[num])
        return months[num];
    else
        throw new Error("Invalid month number");
}

var monthName;

try{
    monthName = getMonth(12);
    return;
} catch(err) {
    console.log(err.message);
    monthName = "Unknown";
} finally {
    console.log("Finally");
    return; //
}
console.log(monthName);
