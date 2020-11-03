const { findClosingParenthesis } = require('../find-closing-parenthesis')

describe('findClosingParenthesis()', () => {
  it('', () => {
    expect(findClosingParenthesis('')).toBe(-1);
  })
  it('', () => {
    expect(findClosingParenthesis('hello')).toBe(-1);
  })
  it('', () => {
    expect(findClosingParenthesis('(hello)', 1)).toBe(6);
  })
  it('', () => {
    expect(findClosingParenthesis('Hello, (world). (Something Else)', 2)).toBe(31);
  })
  it('', () => {
    expect(findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat', 3)).toBe(41);
  })
})
