//Array Map Method

/*const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
a.map((value) => {
  console.log(value);
});
console.log(a);*/

/*const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = a.map((value) => {
  console.log(value);
  return value + 1;
});
console.log(b);
// console.log(a);*/

/*const a = [1, 2, 3, 4];
a.map((value, index, array) => {
  console.log(value, index, array);
});*/


//Array Filter Method

/*const b = [1, 2, 3, 4, 5, 6];
let c = b.filter((a) => {
  return a <= 4;
});
console.log(c);*/


//Array Reduce Method
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newArray = arr.reduce((a, b) => {
  return a + b;
});
console.log(newArray);
