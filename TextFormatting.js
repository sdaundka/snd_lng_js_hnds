var foo = new String("foo");
console.log(foo);
console.log(typeof foo); //Here the type of the foo is Object

var bar = "bar";
console.log(bar);
console.log(typeof bar); //Here the type of the String is - string(premitive)

var firstString = "2 + 2";
console.log(firstString);

var secondString = new String("4 + 4");
console.log(secondString);

var thirdString = "2" + "2";
console.log(thirdString);

var fourthString = "2" + 3 + 10;
console.log(fourthString);

//String objects are immutable
var hello = "Hello World!";
console.log(hello.length);
hello[0] = "E"; //String is immutable.
console.log(hello);

//Miscelleneous String methods. 
console.log(hello.toUpperCase());
console.log(hello.toLocaleLowerCase());
console.log(hello.charAt(6));
console.log(hello.split(" "));
var hello2;
console.log(hello2 = hello.replace("H", "O"));
console.log(hello2.startsWith("H"));

//String Template
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);

//Internationalisation.
//Date and Time Formatting
//Intl object is namespace for the ECMAScript Internationalization API
const july172014 = new Date("2014-07-17");
const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  };
console.log(Date(july172014));
var americanDateTime = new Intl.DateTimeFormat("en-US", options).format;
console.log(americanDateTime(july172014));

//Number Formatting
const gasPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259)); 

var names = ["Ram", "Shyam", "Kedar"];
var englishPhonebook = new Intl.Collator("en-US-u-co-phonebk");
console.log(names.sort(englishPhonebook.compare));
console.log(names.sort(englishPhonebook.compare).join(","));