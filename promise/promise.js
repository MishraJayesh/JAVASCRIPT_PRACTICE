//Promise
//
// let promise = new Promise((resolve, reject) => {
//     console.log("Alert In Promise");
//     resolve(56);
// });
//
// console.log("Hello World");
//
// setTimeout(function () {
//     console.log("setTimeout");
// }, 2000);
//
// console.log("Good AfterNoon");
//
// console.log(promise);
//

// .then and .catch

// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise Is Pending");
//     setTimeout(() => {
//         // console.log("Promise Is Resolved");
//         resolve(true);
//     }, 3000);
// });

// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise Is Pending");
//     setTimeout(() => {
//         // console.log("Promise Is Rejected");
//         reject(new Error("I Am An Error"));
//     }, 3000);
// });
// console.log(p1, p2);

// p1.then((value) => {
//     console.log(value);
// });

// p2.catch((error) => {
//     console.log("Some Error Occurred In p2");
// });

// p2.then((value) => {
//     console.log(value);
// }, (error) => {
//     console.log(error);
// });

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolved After A Seconds");
//         resolve(16);
//     }, 1000);
// });

// p1.then((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(02);
//         }, 2000);
//     });
//     return p2;
// }).then((value) => {
//     console.log(value);
//     setTimeout(() => {
//         console.log("We Are Done");
//     }, 3000);
//     return 02;
// }).then((value) => {
//     setTimeout(() => {
//         console.log("We Are Literally Done");
//     }, 4000);
// });

// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve("Script Loaded Successfully");
//         },
//             script.onerror = () => {
//                 reject(00);
//             }
//     });
// };

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
// p1.then((value) => {
//     console.log(value);
//     return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
// }).then((value) => {
//     console.log("Second Script Is Ready");
// }).catch((error) => {
//     console.log(" Some Error Occurred ");
// });


// Multiples Handlers


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise resolved");
//         resolve(16);
//     }, 2000);
// });
// p1.then(() => {
//     console.log(" Hurray ");
// });
// p1.then(() => {
//      setTimeout(() => {
//        console.log(" Congratulations Promise Is Resolved Successfully ");
//   }, 1000);
//     console.log(" Congratulations Promise Is Resolved Successfully ");
// });




// Promise APIs

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("I Am Promise --> 01");
        resolve(" Promise --> 01 ");
    }, 1000);
});
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log("I Am Promise --> 02");
//         reject(new Error("Error"));
//     }, 2000);
// });
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("I Am Promise --> 02");
        resolve(" Promise --> 02 ");
    }, 2000);
});
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log("I Am Promise --> 02");
//         reject(new Error("Error"));
//     }, 2000);
// });
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("I Am Promise --> 03");
        resolve(" Promise --> 03 ");
    }, 3000);
});
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("I Am Promise --> 04");
        resolve(" Promise --> 04 ");
    }, 4000);
});

// p1.then((value) => {
//     console.log(value);
// });

// p2.then((value) => {
//     console.log(value);
// });

// p3.then((value) => {
//     console.log(value);
// });

// p4.then((value) => {
//     console.log(value);
// });

// let promise_all = Promise.all([p1, p2, p3, p4]);
// promise_all.then((value) => {
//     console.log(value);
// });
// let promise_allSettled = Promise.allSettled([p1, p2, p3, p4]);
// promise_allSettled.then((value) => {
//     console.log(value);
// });
// let promise_race = Promise.race([p1, p2, p3, p4]);
// promise_race.then((value) => {
//     console.log(value);
// });
// let promise_any = Promise.any([p1, p2, p3, p4]);
// promise_any.then((value) => {
//     console.log(value);
// });
// let promise_resolve = Promise.resolve([p1, p2, p3, p4]);
// promise_resolve.then((value) => {
//     console.log(value);
// });
// let promise_reject = Promise.reject([p1, p2, p3, p4]);
// promise_reject.then((value) => {
//     console.log(value);
// });
// console.log(promise_all);
// console.log(p1, p2, p3, p4);
