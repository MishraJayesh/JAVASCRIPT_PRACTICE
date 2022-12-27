//Q.01
// let url = "https://kontests.net/api/v1/all";
// let response = fetch(url);
// response.then((v) => {
//     return v.json();
// }).then((contests) => {
//     console.log(contests);
//     ihtml = " "
//     for (item in contests) {
//         console.log(contests[item]);
//         ihtml += `
//         <div class="card mx-2 my-2" style="width: 25rem;">
//             <img src="https://cdn1.vectorstock.com/i/1000x1000/04/20/programming-coding-programmer-at-work-vector-22360420.jpg"
//                 class="card-img-top" alt="..." />
//                 <div class="card-body">
//                     <h5 class="card-title">${contests[item].name}</h5>
//                     <p class="card-text">Status Is: ${contests[item].status} And Site Is ${contests[item].site} </p>
//                     <p class="card-text">In 24 Hours: ${contests[item].in_24_hours}</p>
//                     <p>Starts At: ${contests[item].start_time}</p>
//                     <p>Ends At: ${contests[item].end_time}</p>
//                     <a href="${contests[item].url}" class="btn btn-primary">Visit Here</a>
//                 </div>
//         </div>
//         `
//     };
//     cardContainer.innerHTML = ihtml;
// });


/* --------------------------***********************NOTE APP (Remaining Question Of Our PS)***********************-------------------------- */
//Q.02 and Q.03
// let b = localStorage.getItem("Note");
// alert("Your Note Is Here : " + b);
// let a = prompt(" Enter Your Note ");
// if (a) {
//     localStorage.setItem("Note", a);
// };

//Q.04
// let b = localStorage.getItem("Note");
// alert("Your Note Is Here : " + b);
// let a = prompt(" Enter Your Note ");
// if (a) {
//     localStorage.setItem("Note", a);
// }
// let c = confirm(" Do You Want To Delete Your Note ? ");
// if (c) {
//     localStorage.removeItem("Note");
//     alert("Your Note Deleted Successfully !");
// };
