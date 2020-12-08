// Please do not change the name of this function
const secondsToTimeString = (seconds) => {
  // Setting up an object that converts seconds into the relevant time unit which can be used to look up each time building block.
  const secondsObj = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
  let resultStr = '';
  let calc = 0;

  // looping throug the secondsObj to look up whether each category is relevant to the current scenario
  for (let time in secondsObj) {
    // Only includes the current time unit if the amount of seconds left over is more than the time unit converted to seconds
    if (seconds >= secondsObj[time]) {
      // When we include a time unit we only want to show full units i.e. 3 days or 1 month etc. Therefore any amount leftover is truncated i.e. 4.12 hours becomes 4 hours.
      calc = Math.trunc(seconds / secondsObj[time]);
      // Each time unit in the end result is separated by a comma and a space i.e. 2 days, 1 hour so we concatenate this to the previous result as well as
      // the full unit of time calculated above (calc) as well as the name of that unit (time).
      // When we have more than one full unit of the current time than we add an s to the current time i.e. 2 year becomes 2 years
      resultStr += `, ${calc} ${time}${'s'.repeat(calc > 1)}`;

      // Since we have now dealt with all the full units of time that can be extracted from the current amount of seconds we want to move on to the next time unit.
      // This is done by looking at the remainder of the above calculation and passing this back to the seconds variable so that next time the for in loop runs we
      // will only look at the part of time that has not already been dealt with.
      seconds = seconds % secondsObj[time];
    }
  }

  // At this point we have constructed the result with all the correct time units and calculations, however, there are two issues we need to correct before returning the end result.
  // The first one is the fact that we added a comma and a space to every valid time unit including the very first time unit but we only want to have this between time units.
  // I.e. instead of , 3 hours, 2 minutes we want to show 3 hours, 2 minutes which is why we need to slice off the first two characters.
  // Moreover we want to show " and " instead of the final comma and space irrespective of what the final unit of time is to make it more readable, which is why we have to
  // replace the final comma and space accordingly.
  return resultStr.slice(2).replace(/,([^,]*)$/, ' and' + '$1');
};

module.exports = { secondsToTimeString };
