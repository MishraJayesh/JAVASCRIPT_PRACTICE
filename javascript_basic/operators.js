// OPERATORS IN JAVASCRIPT


//Arithmetic Operators
//["+", "-", "*", "/", "%", "++", "--"]
let a = 10;
let b = 4;
console.log("a+b =", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a/b =", a / b);
console.log("a%b =", a % b);
console.log("++a =", ++a);
console.log("a++ =", a++);
console.log("--a =", --a);
console.log("a-- =", a--);


//Assignment Operators
//["=", "+=", "-=", "*=", "/=", "%=", "**=", "!="]
let c = 10;
let d = 4;
c += 2 ;  // same as c = c + 2
console.log(c);
c -= 2 ;  // same as c = c - 2
console.log(c);
c *= 2 ;  // same as c = c * 2
console.log(c);
c /= 2 ;  // same as c = c / 2
console.log(c);
c %= 2 ;  // same as c = c % 2
console.log(c);
// c **= 2;
// console.log("**=c");
// c != 2;
// console.log("!=c");


// Comparison Operators
//["==", "!=","===", "!==", ">", "<", ">=", "<=", "?"]
console.log("c == d", c == d);
console.log("c != d", c = d);
console.log("c !== d", c !== d);
console.log("c === d", c === d);
console.log("c > d", c > d);
console.log("c < d", c < d);
console.log("c >= d", c >= d);
console.log("c <= d", c <= d);


// Logical Operators
// ["&&", "||", "!"]
let x = 5;
let y = 6;
console.log(x < y && x==5);
console.log(x > y || x==5);
console.log(!false);