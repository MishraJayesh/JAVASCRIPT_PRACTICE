//Q.01
let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((contests) => {
    console.log(contests);
    ihtml = " "
    for (item in contests) {
        console.log(contests[item]);
        ihtml += `
        <div class="card mx-2 my-2" style="width: 25rem;">
            <img src="https://cdn1.vectorstock.com/i/1000x1000/04/20/programming-coding-programmer-at-work-vector-22360420.jpg"
                class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${contests[item].name}</h5>
                    <p class="card-text"><a href="${contests[item].url}">Visit Here</a></p>
                    <p>Starts At: ${contests[item].start_time}</p>
                    <p>Ends At: ${contests[item].end_time}</p>
                    <a href="https://en.wikipedia.org/wiki/Garden_roses" class="btn btn-primary">Explore</a>
                </div>
        </div>
        `
    };
    cardContainer.innerHTML = ihtml;
});

