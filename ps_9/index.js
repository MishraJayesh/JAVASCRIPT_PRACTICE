//  Q.01
// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve(" Script Loaded: " + src);
//         }
//     })
// };
// let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
// p.then((value) => {
//     alert(" Script Loaded Successfully ");
//     console.log(value);
// });

//  Q.02
// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve(" Script Loaded:  " + src);
//         };
//     });
// };
// const lds = async () => {
//     let p = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
//     alert(p);
//     // console.log(p);
//     // p.then(() => {
//     //     alert(" Script Loaded Successfully ");
//     // });
// };
// lds();

// async function loadScript(src) {
//     let a = new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve(" Script Loaded ");
//         };
//     });
//     await a;
//     console.log(" Script Loaded Successfully ")
//     // console.log(a);
// };
// let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
// p.then(() => {
//     alert(" Script Loaded Successfully ");
// });


// Q.03
// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("I Am An Error"));
//         }, 3000);
//     });
// };

// let a = async () => {
//     try {
//         let c = await p();
//         console.log(c);
//     } catch (error) {
//         console.log(error);
//     }
// }
// a();


// Q.04
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(16);
        }, 1000);
    });
};
let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(32);
        }, 2000);
    });
};
let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(48);
        }, 3000);
    });
};
const run = async () => {
    console.time(" Run ");
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3 = await Promise.all([a1, a2, a3]);
    console.log(a1a2a3);
    // console.log(a1, a2, a3);
    console.timeEnd(" Run ");
};
run();