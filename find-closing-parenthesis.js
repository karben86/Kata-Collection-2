// Please do not change the name of this function
const findClosingParenthesis = (str, n) => {
  for (let i = 0; i < n - 1; i++) str = str.replace(')', '}')
  return str.indexOf(')')
}

module.exports = { findClosingParenthesis }
