let list = document.getElementById("list");
let list2 = document.getElementById("list2");
console.log(list.firstElementChild.textContent);
console.log(list.firstElementChild);
console.log(list2.firstElementChild);
console.log(list2.firstElementChild.textContent);
console.log(list2.lastElementChild.textContent);
console.log(list2.lastElementChild);
console.log(list.lastElementChild);
console.log(list.lastElementChild.textContent);
//
//
console.log(list.firstChild);
console.log(list2.firstChild);
console.log(list2.lastChild);
console.log(list.lastChild);
//
//
document.getElementById("list");
list.style.backgroundColor = "red";
//
//
document.getElementById("list2");
list2.style.backgroundColor = "yellow";
list2.style.borderRadius = "20px";
//
//
let list3 = document.getElementById("list3");
list3.style.backgroundColor = "green";
//
//
document.getElementsByClassName("list");
list.style.border = "4px solid white";
//
//
document.getElementsByClassName("list");
list2.style.border = "4px solid black";
//
//
document.getElementsByClassName("list");
list3.style.border = "4px solid pink";
//
//
document.getElementsByTagName("span");
span.style.color = "red";
//
//
document.getElementsByTagName("span1");
span1.style.color = "red";
//
//
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
//
console.log(document.body.hasChildNodes());
//
//
let arr = Array.from(document.body.childNodes);
console.log(arr);