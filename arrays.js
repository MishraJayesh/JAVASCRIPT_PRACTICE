// Array


/*let marks = [91, 82, 63, 85, false, "Not Present"];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log("The length of marks is", marks.length);
marks[6] = 89;
marks[0] = 98;
console.log("The length of marks is", marks.length);
console.log(marks);*/


// Array Methods
/*let num = [1, 2, 3, 34, 4];
let b = num.toString();
console.log(b, typeof b);
let c = num.join(" and ");
console.log(c, typeof c);
let d = num.pop(); // Pop returns the popped element.
console.log(num, d);
let e = num.push(16); // Push returns the new array length.
console.log(num, e);
let f = num.shift(); // Removes an element from the start of an array.
console.log(num, f);
let g = num.unshift(20); // Add a new element to the beginning of an array.
console.log(num, g);*/


//
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
delete arr[0];
console.log(arr);
console.log(arr.length);
console.log(arr);
let a = arr.reverse();
console.log(a);
let newArray = arr.concat(num);
console.log(newArray);
console.log(arr, num);*/


// Sort Array Method
/*let arr = [14, 3, 98, 7, 6, 2, 22, 16, 20, 1, 11];
let newArray = arr.sort();
console.log(newArray);

let compare = (a, b) => {
  return a - b;
};
let arr = [
  14, 3, 98, 7, 6, 2, 22, 16, 20, 1, 11, 5, 4, 8, 10, 13, 9, 12, 18, 15,
];
let newArray = arr.sort(compare);
console.log(newArray);*/


// Splice and Slice Array Methods
/*let arr = [14, 3, 98, 7, 6, 2, 22, 16, 20, 1, 11];
let deletedValues = arr.splice(2, 3, 1999, 1962, 1947, 1945, 1000);
console.log(arr);
console.log(deletedValues, typeof deletedValues);


let newArray = arr.slice(2);
console.log(newArray);
let newNumArray = arr.slice(2, 6);
console.log(newNumArray);*/



// Looping In Array
let num = [3, 5, 1, 2, 4];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}


// ForEach Loop
num.forEach((element) => {
  console.log(element * element);
});


// Array.from
let names = "Jayesh";
let arr = Array.from(names);
console.log(arr);


// For...of
for (let item of num) {
  console.log(item);
}


// For...if
for (let i in num) {
  console.log(i);
}