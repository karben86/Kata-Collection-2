// Please do not change the name of this function
const findMissingLetter = (arr) => {
  // SOLUTION 1:

  // // This maps each letter of the array to it's character code and compares this code to the code of the previous character provided it is not the first character
  // // if we find a character code that is not exactly one point higher than the previous character code than we have found the first element after the gap
  // let result = arr.map(letter => letter.charCodeAt(0)).filter((code, index) => index && (code !== arr[index - 1].charCodeAt(0) + 1))

  // // if no gap exists then result will be empty so by converting it to a number we can turn it into a falsy value which the ternary operator uses to return an empty string
  // // if a gap exists then result will be the character code of the first element after the gap which will be one higher than the character we are looking for
  // // so we need to subtract 1 before converting it back to a character and returning the element we are looking for.
  // return +result ? String.fromCharCode(result - 1) : "";

  // SOLUTION 2:

  // We first build an array of all the characters we would be expecting if there was no gap in the array that is passed to this function
  // Therefore the size of the array we are building needs to be the same length as the array we passed into the function
  return Array.from({ length: arr.length }, (_, i) =>

  // The content of the array we are building will consist of sequential characters starting with the first character of the original array
  // This is done by adding the character code of the first character within the original code to the incremental sequence we generate with i
  // in the Array.from function and once we have the relevant character codes we then convert it back to a string.
    String.fromCharCode(i + arr[0].charCodeAt(0)))

  // Finally we compare the correct array that we constructed to the input array with the gap and the moment our constructed array contains an
  // element that is not present in the input array we know that we have found the missing element and can return it.
  // In the case where the input array does not have any gaps, the filter function will return an empty array but we want to return an empty
  // string in this case so by converting the result to a string we can deal with this without affecting the case where an element is returned
  // because the given elements are already in string format so converting them to a string will have no effect.
    .filter((character, index) => character !== arr[index]) + '';
}

module.exports = { findMissingLetter }
