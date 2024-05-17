// 24. More Conditional Tests: 
// • Tests for equality and inequality with strings
var string1 = "Hello";
var string2 = "World";
console.log(string1 == string2); //false
console.log(string1 !== string2); //true
// • Tests using the lower case function
var uppercase = "HELLO";
var lowercase = "hello";
console.log(uppercase.toLowerCase() == lowercase); // true
console.log(uppercase === lowercase); // false
// •Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to
var a = 10;
var b = 20;
var c = 30;
console.log(a <= b); // true
console.log(c >= b); // true
console.log(b <= a); //false
// • Tests using "and" and "or" operators
console.log(a < b && c > b); // true
console.log(a < b || c < b); // true
console.log(a > b || b > c); // false
// • Test whether an item is in an array
var whether = [1, 2, 3, 4, 5, 6];
var w = 3;
console.log(whether.indexOf(w) === -1);
