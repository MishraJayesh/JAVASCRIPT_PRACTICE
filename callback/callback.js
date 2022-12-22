// Synchronous Functions

// let a = prompt("What is your name ?");
// let b = prompt("What is your age ?");
// let c = prompt("What is your favorite ?");
// console.log(a + " Is " + b + " Years Old And His " + " Favorite Color Is " + c);

// Asynchronous Functions

// console.log("Hello, Good Morning");
// setTimeout(function () {
//     console.log(" Hey I Am Doing Well, What's About You ? ");
// }, 2000);
// console.log("Wait For An Asynchronous Function To Run");


// Callback Functions

function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log(" Your Script Is Loaded With SRC: " + src);
        callback;
    };
    document.body.appendChild(script);
};
function hello() {
    console.log(" Hello World! ");
    alert(" Hello World! ");
};
loadScript("https://cdn.jseeeeeeedelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", hello());

// Error Handling

// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         console.log(" Your Script Is Loaded With SRC: " + src);
//         callback(null, src);
//     };
//     script.onerror = function () {
//         console.log(" Error Loading Script With SRC: " + src);
//         callback(new Error(" Src Got Some Error "));
//     };
//     document.body.appendChild(script);
// };
// function hello(error, src) {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     console.log(" Hello World! ");
//     alert(" Hello World! ");
// };
// loadScript("https://cdn.jseeeeeeedelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", hello());
