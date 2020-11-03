// Please do not change the name of this function
const alphabetReplace = (str) => {
  return str.replace(' ', '').toLowerCase().replace(/./g, char => char.charCodeAt(0) - 96 + ' ').trim();
}

module.exports = { alphabetReplace }
