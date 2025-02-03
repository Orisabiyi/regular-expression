/*Here are the test cases you should consider for `pattern.js`:

1. Does the `text` variable contain a non-empty string?
2. Does the `text` variable contain the expected string "Hello, World!"?
4. Does the `text` variable contain a string with a length greater than 5 characters?
5. Does the `text` variable contain a string that includes the word "Hello"?

These questions will help you create meaningful tests for your `pattern.js` file. */

function testExpression(input) {
  // containing empty string
  const emptyPattern = / /g;
  const expectedPattern = /(H|h)ello, (W|w)orld!/g;

  console.log(emptyPattern.test(input));
  console.log(expectedPattern.test(input));
}

testExpression("Hello, world!");
