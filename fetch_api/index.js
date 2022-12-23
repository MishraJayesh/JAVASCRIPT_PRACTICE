// Fetch APIs

// let p = fetch("https://goweather.herokuapp.com/weather/NewYork");
// p.then((response) => {
//     return response.json()
// }).then((json) => { console.log(json) });

// let p = fetch("https://goweather.herokuapp.com/weather/NewYork");
// p.then(res => res.json()).then(json=>console.log(json));

// let p = fetch("https://goweather.herokuapp.com/weather/NewYork");
// p.then((value1) => {
//     console.log(value1.status);
//     console.log(value1.ok);
//     return value1.json();
// }).then((json) => {
//     console.log(json);
// });
// console.log(p);


// POST Request


// const createPost = async () => {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             title: 'Jayesh',
//             body: 'Good',
//             userId: 02,
//         }),
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json();
//     return response;
// };
// const mainFunc = async () => {
//     let post = await createPost();
//     console.log(post);
// };
// mainFunc();

// const createTodo = async (todo) => {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(todo),
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json();
//     return response;
// };

// const getTodo = async (id) => {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1' + id);
//     let r = await response.json();
//     return r;
// };

// const mainFunc = async () => {
//     let todo = {
//         title: 'Jayesh',
//         body: 'Good',
//         userId: 02,
//     };
//     let post = await createTodo(todo);
//     console.log(post);
//     console.log(await getTodo(2));
// };

// mainFunc();


// JavaScript Cookies
// console.log(document.cookie);
// document.cookie = "name=Jayesh201602";
// document.cookie = "name2=Jay2016";
// document.cookie = "name3=Jayesh160220";
// let key = prompt("Enter your key");
// let value = prompt("Enter your value");
// // document.cookie = `${key}=${value}`;
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// console.log(document.cookie);


// LocalStorage

// localStorage.setItem("name", "Jayesh");
// console.log(localStorage.getItem("name"));
// console.log(localStorage.removeItem("name"));
// let key = prompt("Enter Your Key");
// let value = prompt("Enter Your Value");

// localStorage.setItem(key, value);

// console.log(`The Value At ${key} Is ${localStorage.getItem(key)}`);

// if (key == "red" || key == "blue") {
//     localStorage.removeItem(key);
// };

// if (key == 0) {
//     localStorage.clear();
// };

// console.log(localStorage.length);
// console.log(localStorage.key(0));


// Session Storage

// sessionStorage.setItem("name", "Jayesh");
// console.log(sessionStorage.getItem("name"));
// console.log(sessionStorage.removeItem("name"));
// let key = prompt("Enter Your Key");
// let value = prompt("Enter Your Value");

// sessionStorage.setItem(key, value);

// console.log(`The Value At ${key} Is ${sessionStorage.getItem(key)}`);

// if (key == "red" || key == "blue") {
//     sessionStorage.removeItem(key);
// };

// if (key == 0) {
//     sessionStorage.clear();
// };

// console.log(sessionStorage.length);
// console.log(sessionStorage.key(0));


// Storage Event

// window.onstorage = (e)=>{
//     alert("Changed");
//     console.log(e);
// }