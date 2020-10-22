const { secondsToTimeString } = require('../seconds-to-time-string');

describe('secondsToTimeString()', () => {
  it('', () => {
    expect(secondsToTimeString(1)).toBe('1 second')
  });
  it('', () => {
    expect(secondsToTimeString(2)).toBe('2 seconds')
  });
  it('', () => {
    expect(secondsToTimeString(60)).toBe('1 minute')
  });
  it('', () => {
    expect(secondsToTimeString(120)).toBe('2 minutes')
  });
  it('', () => {
    expect(secondsToTimeString(121)).toBe('2 minutes and 1 second')
  });
  it('', () => {
    expect(secondsToTimeString(3660)).toBe('1 hour and 1 minute')
  });
  it('', () => {
    expect(secondsToTimeString(3661)).toBe('1 hour, 1 minute and 1 second')
  });
  it('', () => {
    expect(secondsToTimeString(31626061)).toBe('1 year, 1 day, 1 hour, 1 minute and 1 second')
  });
  it('', () => {
    expect(secondsToTimeString(31572000)).toBe('1 year and 10 hours')
  });
  it('', () => {
    expect(secondsToTimeString(127702942)).toBe('4 years, 18 days, 1 hour, 2 minutes and 22 seconds')
  });
});
