// Please do not change the name of this function
const passwordScore = (password) => {
  // initalise variables for code that is repeated
  const passLen = password.length;
  const inclDigit = /\d/.test(password);
  const inclSpChar = /[!@£#$%^&*]/.test(password);
  let result = '';

  // Makes 1 the default score and adds an extra point if password is longer than 3 or 8 characters.
  result = 1 + (passLen > 3) + (passLen > 8);

  // Adds an extra point if password is above 8 characters and includes a digit.
  result += inclDigit * (passLen > 8);

  // Adds an extra point if all previous conditions have been met and password includes a special character
  result += inclSpChar * (result > 3);

  // Gives result the score 6 if the password is above 12 characters and includes a digit
  if (passLen > 12 && inclDigit) result = 6;

  // Gives result the score 7 if password is above 12 characters and includes a digit and a special character
  result += inclSpChar * (result === 6);

  return result;
};

module.exports = { passwordScore };
