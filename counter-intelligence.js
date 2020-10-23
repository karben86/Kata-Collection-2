// Please do not change the name of this function
const counterIntelligence = (str) => {
  
  // Here we set up a key that works out how much we need to subtract from the character code of each character.
  // The cipher is always based on the last character which is always X so we need to find the character code of the final character
  // and then subtract the character code for X which is 88.
  // Since we want to subtract the key value from the current character code later on in the cipher and also want to wrap this around
  // the upper case character codes it is advantage if we subtract an additional 13 positions at this stage such that we can use the
  // modulo operator later on to check whether the result is divisisble by 26 (the length of the alphabet).
  // I.e. the character A is 65 but for the purpose of this exercise it is easier to transform it to 52 by subtracting 13 which is
  // the closest multiple of 26 such that A corresponds to 0 (52 % 26), B corresponds to 1 (53 % 26) and so on.
  const key = str.charCodeAt(str.length - 1) - 101;

  // To work out the decrypted message we return the individual character codes converted back to a string. Since String.fromCharCode
  // can handle multiple arguments we can pass it the full array of character codes we calculate after spreading it to turn it into
  // comma separated values.
  // The actual calculation is done by taking the string and splitting it into separate characters which is then mapped to deal with
  // each character separately.
  return String.fromCharCode(...str.split("").map(

    // Since we only want to convert character that are letters but leave spaces and punctuations in their original format we first
    // need to check whether the current character is a valid letter.
    char => (/\w/.test(char)) ?

    // If so we check its position in the alphabet as explained above and add 65 (the starting point of upper case letters) to get
    // the final character code
    (char.charCodeAt(0) - key) % 26 + 65 :

    // If the character should be left unchanged then we return its character code without any manipulation. 
    char.charCodeAt(0)));
};

module.exports = { counterIntelligence };
