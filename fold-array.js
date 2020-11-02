// Please do not change the name of this function
const foldArray = (arr, depth) => {
  let newArr = []; 
  
  for (j = 0; j < depth; j++){
    for (let i = 0; i < arr.length/2; i++){
      newArr.push(arr[i] + arr[arr.length - i - 1] * (i + 0.5 !== arr.length/2));
    }
    arr = newArr;
    newArr = [];
  }
  return arr;
}

module.exports = { foldArray }
