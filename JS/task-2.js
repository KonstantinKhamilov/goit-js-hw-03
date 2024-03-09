`use strict`;

function makeArray(firstArray, secondArray, maxLength) {
  /* const newFirstArray = firstArray.length;
  const newSecondArray = maxLength - firstArray.length;*/
  const newArray = firstArray
    .concat(secondArray)
    .slice(0, maxLength)
    .join(", ");

  if (maxLength === firstArray.length) {
    return firstArray.join(", ");
  } else if (maxLength > firstArray.length) {
    return newArray;
  }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
