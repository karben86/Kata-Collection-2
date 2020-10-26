// Please do not change the name of this function
const validateAndFormatPhone = (str) => {
  // converting numbers that start with 00 to numbers that start with +.
  if (str.slice(0,2) === "00") str = "+" + str.slice(2);
  
  // converting numbers that start with "0" to numberst that start with +44. 
  if (str[0] === "0") str = "+44" + str.slice(1);

  // returning the converted number if it is a valid UK number or an error message otherwise.
  return /^(\+447|\+442|\+441)\d{9}$/.test(str) ?  str : "Invalid phone number";
};

module.exports = { validateAndFormatPhone };
