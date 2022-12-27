// Array Practice Set_05

// Q.1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let a = prompt("Enter A Number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// Q.2

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let a;
// do {
//   a = prompt("Enter A Number");
//   a = Number.parseInt(a);
//   arr.push(a);
// } while (a != 0);
// console.log(arr);

// Q.3
// let arr1 = [1, 200, 3, 240, 50, 60, 7, 8, 900];
// let newArray = arr1.filter((x) => {
//   return x % 10 == 0;
// });
// console.log(newArray);

// Q.4
// let arr2 = arr1.map((x) => {
//   return x * x;
// });
// console.log(arr2);

// Q.5
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n);
