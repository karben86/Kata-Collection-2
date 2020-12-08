const { passwordScore } = require('../password-score');

describe('passwordScore()', () => {
  it(`passwordScore('') should return 1`, () => {
    expect(passwordScore('')).toBe(1)
  });
  it(`passwordScore('bob') should return 1`, () => {
    expect(passwordScore('bob')).toBe(1)
  });
  it(`passwordScore('b1!2@3#') should return 2`, () => {
    expect(passwordScore('b1!2@3#')).toBe(2)
  });
  it(`passwordScore('bobbybob') should return 2`, () => {
    expect(passwordScore('bobbybob')).toBe(2)
  });
  it(`passwordScore('bobbobbob') should return 3`, () => {
    expect(passwordScore('bobbobbob')).toBe(3)
  });
  it(`passwordScore('bobbobbob1') should return 4`, () => {
    expect(passwordScore('bobbobbob1')).toBe(4)
  });
  it(`passwordScore('bobbob1#2$') should return 5`, () => {
    expect(passwordScore('bobbob1#2$')).toBe(5)
  });
  it(`passwordScore('bobbobbobbob123') should return 6`, () => {
    expect(passwordScore('bobbobbobbob123')).toBe(6)
  });
  it(`passwordScore('bobbobbob1!2@3#') should return 7`, () => {
    expect(passwordScore('bobbobbob1!2@3#')).toBe(7)
  });
});
