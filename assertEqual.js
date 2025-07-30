// assertEqual function:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE:
assertEqual("hello", "hello");

assertEqual("Lighthouse Labs", "Bootcamp");

console.log("------------------");

assertEqual(100, 100);

assertEqual(42, 24);
