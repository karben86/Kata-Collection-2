// Please do not change the name of this function
const uniqueAndOrdered = (input) => {
  if (typeof input === 'string') input = input.split('')
  return input.filter((element, index) => element !== input[index - 1]);
}

module.exports = { uniqueAndOrdered }
