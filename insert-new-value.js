// Please do not change the name of this function
const insertNewValue = (arr, val) => {
  arr[arr.length - 1] < val ? arr.push(val) : arr.splice(arr.findIndex(element => val < element), 0, val);
  return arr;
}

module.exports = { insertNewValue }
