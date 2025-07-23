// Copy of eqArrays function:
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};


// Copy of assertArraysEqual funtion:
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


// WITHOUT FUNCTION:
const without = function(source, itemsToRemove) {
  const result = [];

  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }

  return result;
};



// TEST CODE:
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["apple", "banana", "cherry"], ["banana"]), ["apple", "cherry"]);
assertArraysEqual(without([true, false, true], [false]), [true, true]);