//PRACTICE SET_02

//Q.01
/*
let age = prompt("What Is Your Age?");
if (age>10 && age<20) {
    console.log("Your Age Lies Between 10 and 20");
}
else{
    console.log("Your Age Does Not Lies Between 10 and 20");
}
*/

//Q.02
/*let age = prompt("What Is Your Age?");
switch (age) {
    case '12':
        console.log("Your Age Is 12");
        break
    case '13':
        console.log("Your Age Is 13");
        break
    case '14':
        console.log("Your Age Is 14");
        break
    case '15':
        console.log("Your Age Is 15");
        break
    default:
        console.log("Your Age Is Not Special");
}*/

//Q.03
/*let num = prompt("Enter your number");
num = Number.parseInt(num);
if (num%2==0 && num%3==0) {
    console.log("Your Number Is Divisible By 2 And 3");
}
else{
    console.log("Your Number Is Not Divisible By 2 And 3");
}*/

//Q.04
/*let num = prompt("Enter your number");
num = Number.parseInt(num);
if (num % 2 == 0) {
  console.log("Your Number Is Divisible By 2");
} else if (num % 3 == 0) {
  console.log("Your Number Is Divisible By 3");
} else {
  console.log("Your Number Is Not Divisible By 2 Or Either By 3");
}*/

//Q.05
/*let age = prompt("What Is Your Age?");
age = Number.parseInt(age);
let a = age > 18 ? "You Can Drive" : "You Cannot Drive";
console.log(a);*/

/*let age = prompt("What Is Your Age?");
alert(age > 18 ? "You Can Drive" : "You Cannot Drive");*/

let age = prompt("What Is Your Age?");
console.log(age > 18 ? "You Can Drive" : "You Cannot Drive");