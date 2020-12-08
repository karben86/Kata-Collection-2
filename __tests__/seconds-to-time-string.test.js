const { secondsToTimeString } = require('../seconds-to-time-string');

describe('secondsToTimeString()', () => {
  it('secondsToTimeString(1) should return 1 second', () => {
    expect(secondsToTimeString(1)).toBe('1 second')
  });
  it('secondsToTimeString(2) should return 2 seconds', () => {
    expect(secondsToTimeString(2)).toBe('2 seconds')
  });
  it('secondsToTimeString(60) should return 1 minute', () => {
    expect(secondsToTimeString(60)).toBe('1 minute')
  });
  it('secondsToTimeString(120) should return 2 minutes', () => {
    expect(secondsToTimeString(120)).toBe('2 minutes')
  });
  it('secondsToTimeString(121) should return 2 minutes and 1 second', () => {
    expect(secondsToTimeString(121)).toBe('2 minutes and 1 second')
  });
  it('secondsToTimeString(3660) should return 1 hour and 1 minute', () => {
    expect(secondsToTimeString(3660)).toBe('1 hour and 1 minute')
  });
  it('secondsToTimeString(3661) should return 1 hour, 1 minute and 1 second', () => {
    expect(secondsToTimeString(3661)).toBe('1 hour, 1 minute and 1 second')
  });
  it('secondsToTimeString(31626061) should return 1 year, 1 day, 1 hour, 1 minute and 1 second', () => {
    expect(secondsToTimeString(31626061)).toBe('1 year, 1 day, 1 hour, 1 minute and 1 second')
  });
  it('secondsToTimeString(31572000) should return 1 year and 10 hours', () => {
    expect(secondsToTimeString(31572000)).toBe('1 year and 10 hours')
  });
  it('secondsToTimeString(127702942) should return 4 years, 18 days, 1 hour, 2 minutes and 22 seconds', () => {
    expect(secondsToTimeString(127702942)).toBe('4 years, 18 days, 1 hour, 2 minutes and 22 seconds')
  });
});
