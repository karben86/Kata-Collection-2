const { passwordScore } = require('../password-score');

describe('passwordScore()', () => {
  it('', () => {
    expect(passwordScore('')).toBe(1)
  });
  it('', () => {
    expect(passwordScore('bob')).toBe(1)
  });
  it('', () => {
    expect(passwordScore('b1!2@3#')).toBe(2)
  });
  it('', () => {
    expect(passwordScore('bobbybob')).toBe(2)
  });
  it('', () => {
    expect(passwordScore('bobbobbob')).toBe(3)
  });
  it('', () => {
    expect(passwordScore('bobbobbob1')).toBe(4)
  });
  it('', () => {
    expect(passwordScore('bobbob1#2$')).toBe(5)
  });
  it('', () => {
    expect(passwordScore('bobbobbobbob123')).toBe(6)
  });
  it('', () => {
    expect(passwordScore('bobbobbob1!2@3#')).toBe(7)
  });
});
