// Please do not change the name of this function
const textInDiv = (str, lengthOfLine) => {
  // assign lineCounter to -3 to account for the fact that the start of the text is not preceded
  // by a space (one character) and a line break (two characters)
  let lineCounter = -3;
  let position = 0;

  // split the text by spaces to look at words individually
  str.split(' ').forEach(word => {
    // Only create a line break if the running total of characters in the current row (lineCounter)
    // plus 1 character to account for the space between this word and the next word plus the current
    // row exceeds the length of the line.
    if (lineCounter + 1 + word.length > lengthOfLine) {
      // if a line break needs to be inserted then this needs to be done at the relevant point in the current row
      // as measured by lineCounter. To measure this relative to the total text we need to add the position of the
      // previous line break plus 2 to account for the two characters that were attached after the previous position.
      position = lineCounter + position + 2

      // Once we have worked out the correct position as per above we slice the text accordingly, insert a line break
      // save the result overall in the position variable which becomes the previous position in the next calculation.
      str = str.slice(0, position) + '\n' + str.slice(position)

      // Once we have used up lineCounter on the current row we reset it to be used for the next row.
      // Rather than setting it to 0 we set it to -1 to account for the fact that the line break from the previous row
      // is inserted before the space so we still have to deal with the space from the last word before
      // starting the same process again on a new line.
      lineCounter = -1;
    }
    lineCounter += 1 + word.length;
  })

  // We return the string result in the end unless the length of the line is a value smaller than 15 in which
  // case we print out INVALID INPUT.
  return lengthOfLine < 15 ? 'INVALID INPUT' : str;
}

module.exports = { textInDiv }
