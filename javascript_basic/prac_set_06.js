// Practice Set_06

// Q.1
// let age = prompt("Enter Your Age");
// age = Number.parseInt(age);

// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };
// if (canDrive(age)) {
//   alert("Yes You Can Drive");
// } else {
//   alert("No You Cannot Drive");
// }

// Q.2
// let runAgain = true;

// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };

// while (runAgain) {

//   let age = prompt("Enter Your Age");
//   age = Number.parseInt(age);

//   if (canDrive(age)) {
//     alert("Yes You Can Drive");
//   } else {
//     alert("No You Cannot Drive");
//   }

//   runAgain = confirm("Are you sure you want to drive?");

// }

// Q.3
// let runAgain = true;
// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };

// while (runAgain) {
//   let age = prompt("Enter Your Age");
//   age = Number.parseInt(age);
//   if (age < 0) {
//     console.error("Please enter a valid age");
//     break;
//   }
//   if (canDrive(age)) {
//     alert("Yes You Can Drive");
//   } else {
//     alert("No You Cannot Drive");
//   }
//   runAgain = confirm("Are you sure you want to drive?");
// }

// Q.4
// let number = prompt("Enter Number");
// number = Number.parseInt(number);

// if (number > 4) {
//   location.href = "http://google.com";
// }

// Q.5
let color = prompt("Enter The Page Background Color");
document.body.style.background = color;
