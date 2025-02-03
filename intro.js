// starting out with regular expression - Academind youtube channel

// assume this to be an input from a user or client
const text = "Hello World!";

// first way of writing expression
const regex = new RegExp("ll");

// texting the regex against the text
console.log(regex.test(text));
