// 24. More Conditional Tests: 
// • Tests for equality and inequality with strings
let string1 : string = "Hello"
let string2 : string = "World"
console.log(string1 == string2); //false
console.log(string1 !== string2); //true

// • Tests using the lower case function
let uppercase : string = "HELLO"
let lowercase : string = "hello"
console.log(uppercase.toLowerCase()== lowercase); // true
console.log(uppercase === lowercase); // false

// •Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to
let a : number = 10
let b : number = 20
let c : number = 30
console.log(a <= b); // true
console.log(c >=  b); // true
console.log(b <= a); //false

// • Tests using "and" and "or" operators
console.log(a < b && c > b); // true
console.log(a < b || c < b); // true
console.log(a>b || b > c);  // false

// • Test whether an item is in an array
let whether : number [] = [1,2,3,4,5,6]
let w : number = 3
console.log(whether.indexOf(w)=== -1);

