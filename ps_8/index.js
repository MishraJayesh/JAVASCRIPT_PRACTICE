// Q.02 and Q.03
// document.getElementById("google").addEventListener("click", function () {
//     let url = "https://www.google.com";
//     let win = window.open(url, "width=500,height=500,scrollbars=yes,resizable=yes");
//     win.focus();
// });
// document.getElementById("facebook").addEventListener("click", function () {
//     let url = "https://www.fb.com";
//     let win = window.open(url, "width=500,height=500,scrollbars=yes,resizable=yes");
//     win.focus();
// });
// document.getElementById("twitter").addEventListener("click", function () {
//     let url = "https://www.twitter.com";
//     let win = window.open(url, "width=500,height=500,scrollbars=yes,resizable=yes");
//     win.focus();
// });


// Q.04

// setInterval(function () {
//     let a = fetch("https://goweather.herokuapp.com/weather/NewYork");
//     a.then(res => res.json()).then(json => console.log(json));
// }, 2000);

// const fetchContent = async (url) => {
//     con = await fetch(url);
//     let a = await con.json();
//     return a;
// }
// setInterval(async function () {
//     let url = "https://goweather.herokuapp.com/weather/NewYork";
//     console.log(await fetchContent(url));
// }, 2000);


// Q.05
// setInterval(async function () {
//     document.querySelector("#bulb").classList.toggle("bulb");
// }, 2000);