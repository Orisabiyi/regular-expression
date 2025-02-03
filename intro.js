// starting out with regular expression - Academind youtube channel

// assume this to be an input from a user or client
const text = "Hello World!";

// first way of writing expression
const regex = new RegExp("ll");

// texting the regex against the text

console.log(regex.test(text)); // returns a boolean value
console.log(regex.exec(text)); // returns an array containing the searched pattern, index and input or null

// texting the text against the test

console.log(text.search(regex)); // returns the starting index matching the expression pattern
console.log(text.match(regex)); // returns an array containing the searched pattern, index and input or null
