// Practice Set_03
// Q.1
/*let marks = {
  jayesh: 90,
  shubham: 9,
  lovish: 50,
  monika: 4,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}*/

// Q.2
/*for (let a in marks) {
    console.log("Marks Of " + a + " Are " + marks[a]);
}

// Q.3
let cn = 4;
let i;
while (i != cn) {
  i = prompt("Enter a number");
  console.log("Try Again");
}
console.log("You have entered a correct number");*/

// Q.4
function Mean(p, q, r, s, t) {
  return (p + q + r + s + t) / 5;
}

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log("Mean of 5 number is ", Mean(a, b, c, d, e));
