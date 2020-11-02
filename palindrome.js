// Please do not change the name of this function
const palindrome = (str) => {
  let newStr = str.replace(/ /g, '').toUpperCase()
  return newStr === newStr.split('').reverse().join('');
}

module.exports = { palindrome }
