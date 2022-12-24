//Advance JavaScript


//IIFE

// let a = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2016);
//         }, 4000);
//     });
// };

// let f = async () => {
//     let b = await a();
//     console.log(b);
//     let c = await a();
//     console.log(c);
//     let d = await a();
//     console.log(d);
// };
// f();

// let a = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2016);
//         }, 4000);
//     });
// };

// (async () => {
//     let b = await a();
//     console.log(b);
//     let c = await a();
//     console.log(c);
//     let d = await a();
//     console.log(d);
// })();


//Destructuring And Spread Operations


//Destructuring

// let arr = [2, 4];
// let [a, b] = arr;
// console.log(a, b);

// let arr = [2, 4, 6, 8, 10, 12, 14];
// let [a, b, c, d, ...rest] = arr;
// console.log(a, b, c, d, rest);

// let arr = [2, 4, 6, 8, 10, 12, 14];
// let [a, , , ...rest] = arr;
// console.log(a, rest);

// let { a, b } = { a: 2, b: 4 };
// console.log( a, b );


//Spread Operations

// let arr = [2, 4, 6, 8, 10, 12, 14, 16];
// let obj = { ...arr };
// console.log(obj);

// let arr = [2, 4, 6, 8, 10, 12, 14, 16];
// let obj = { ...arr };
// console.log(obj);

// function sum(v1, v2, v3) {
//     return v1 + v2 + v3;
// }
// console.log(sum(...arr));

// let a = "Good";
// let b = "Boy";
// let c = { a, b };
// console.log(c);

// let obj = {
//     name: "Jayesh",
//     age: "22",
//     hobbies: "Reading, Writing"
// }
// console.log({ ...obj });
// console.log({ ...obj, name: "Jay" });
