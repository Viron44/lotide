// eqArrays function:
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};


// assertArraysEqual funtion:
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


// flatten function:
const flatten = function(arr) {
  const result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};


// TEST CODE:
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["a", ["b", "c"], "d"]), ["a", "b", "c", "d"]);
assertArraysEqual(flatten([[1, 2], 3, 4]), [1, 2, 3, 4]);
assertArraysEqual(flatten([1, [2], [3, 4], 5]), [1, 2, 3, 4, 5]);
