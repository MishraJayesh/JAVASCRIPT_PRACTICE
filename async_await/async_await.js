//  Async_Await

// async function date() {
//     return 16
// };
// date().then((x) => {
//     alert(x);
// });
// async function Weather() {
//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(" 14 Deg Celsius ")
//         }, 2000);
//     });
//     let mumbaiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(" 28 Deg Celsius ")
//         }, 4000);
//     });
//     // delhiWeather.then(alert);
//     // mumbaiWeather.then(alert);
//     console.log(" Fetching Delhi Weather Please Wait... ");
//     let dw = await delhiWeather;
//     console.log(" Fetched Delhi Weather: " + dw);

//     console.log(" Fetching Mumbai Weather Please Wait... ");
//     let mw = await mumbaiWeather;
//     console.log(" Fetched Mumbai Weather: " + mw);

//     return [dw, mw];
// };
// console.log(" Here Is Our Weather Forecast ");
// let a = Weather();
// a.then((value) => {
//     console.log(value);
// });


// Try...Catch 

// let a = 10;
// try {
//     console.log("Value Of Variable b is : " + b);
// } catch (error) {
//     console.log("Error");
// }

// let b = 10;
// try {
//     console.log("Value Of Variable b is : " + b);
// } catch (error) {
//     console.log("Error");
// }

// setTimeout(() => {
//     console.log(" Hacking WiFi....Please Wait ");
// }, 1000);

// try {
//     console.log(Rahul);
// } catch (error) {
//     console.log(error);
// }

// setTimeout(() => {
//     console.log(" Fetching UserName And Password....Please Wait ");
//     // console.log(Rahul);
// }, 2000);

// setTimeout(() => {
//     console.log(" Hacking Rahul's FaceBook Id....Please Wait ");
// }, 3000);

// setTimeout(() => {
//     console.log(" UserName And Password Of Rahul Fetched....Please Wait ");
// }, 4000);


// Throwing Custom Error

// try {
//     jayesh
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// try {
//     throw new Error("Jayesh Is Not Good");
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// try {
//     throw new ReferenceError("Jayesh Is Not Good");
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// try {
//     let age = prompt(" Enter Your Age: ");
//     age = Number.parseInt(age);
//     if (age > 150) {
//         throw new ReferenceError("This Is Probably Not True");
//     }
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }
// console.log("The Script Is Still Running");


// Finally Clause

// try {
//     let a = 0;
//     // console.log(program);
//     console.log("Program Ran Successfully");
// } catch (error) {
//     console.log("This Is An Error");
//     console.log(p);
// }
// finally {
//     console.log(" I Am Good Boy ");
// };

const f = () => {
    try {
        let a = 0;
        // console.log(program);
        console.log("Program Ran Successfully");
        return
    } catch (error) {
        console.log("This Is An Error");
        console.log(p);
    }
    finally {
        console.log(" I Am Good Boy ");
    };
};
f();