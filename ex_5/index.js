let a = [
    "Initializing Hack Tool...",
    "Connecting To Facebook...",
    "Connecting To Server-01...",
    "Connecting Failed. Retrying...",
    "Connecting To Server-02...",
    "Connected Successfully...",
    "UserName I Am Jayesh...",
    "Trying Brute Force...",
    "200K Password Tried...",
    "Match Not Found...",
    "Another 200K Password Tried...",
    "Match Found...",
    "Accessing Account...",
    "Hack Successful...",
];

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve((true));
        }, seconds * 1000);
    });
};

const showHack = async (messages) => {
    await sleep(2);
    // console.log(messages);
    text.innerHTML = text.innerHTML + messages + "<br>";
};

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i]);
    }
})();