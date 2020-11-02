// Please do not change the name of this function
const sumConsecutiveDuplicates = (arr) => {
  let newArr = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(total + arr[i]);
      total = 0;
    } else {
      total += arr[i];
    }
  }
  return newArr;
}

const reduceConsecutives = (arr) => {
  return (new Set(arr).size !== arr.length) ? reduceConsecutives(sumConsecutiveDuplicates(arr)) : arr;
}

module.exports = { sumConsecutiveDuplicates, reduceConsecutives };
