// Practice Set_04
// Q.1
console.log('Jay"'.length);

// Q.2
let sentence = "He is a good boy";
let word = "good";
// let word = prompt("Enter The Word");
console.log(sentence.includes(word));
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
console.log(sentence.startsWith("He"));
console.log(sentence.startsWith("is", 2));
console.log(sentence.endsWith("boy"));
console.log(sentence.endsWith("best!"));

// Q.3
let str = "JAYESH";
console.log(str.toLowerCase(str));

// Q.4
// method-1
let strs = "Please give Rs 1000"
console.log(strs.slice(15));
// method-2
let amount = strs.slice("Please give Rs ".length);
console.log(amount);

// Q.5
str[3] = "P"
console.log(str)    //Strings Are Immutable