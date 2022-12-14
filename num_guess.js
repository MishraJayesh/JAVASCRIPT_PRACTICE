let number = Math.random() * 100;
number = Number.parseInt(number);
let inp;
let score = 100;

while (inp != number) {
  score = score - 1;
  inp = prompt("Enter The Number : ");
  if (inp == number) {
    console.log("Congratulation! You Guess The Correct Number.");
    console.log(`You Guess The Correct Number In ${100 - score} Chances.`);
  } else if (inp > number && inp < 100) {
    console.log("Your Number Is Greater Than Actual Number");
  } else if (inp < number && inp > 100) {
    console.log("Your Number Is Smaller Than Actual Number");
  } else {
    console.log("Enter Number Between 1 To 100");
  }
}
