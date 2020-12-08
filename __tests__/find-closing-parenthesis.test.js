const { findClosingParenthesis } = require('../find-closing-parenthesis')

describe('findClosingParenthesis()', () => {
  it(`findClosingParenthesis('') should return -1`, () => {
    expect(findClosingParenthesis('')).toBe(-1);
  })
  it(`findClosingParenthesis('hello') should return -1`, () => {
    expect(findClosingParenthesis('hello')).toBe(-1);
  })
  it(`findClosingParenthesis('(hello)', 1) should return 6`, () => {
    expect(findClosingParenthesis('(hello)', 1)).toBe(6);
  })
  it(`findClosingParenthesis('Hello, (world). (Something Else)', 2)`, () => {
    expect(findClosingParenthesis('Hello, (world). (Something Else)', 2)).toBe(31);
  })
  it(`findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat', 3)`, () => {
    expect(findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat', 3)).toBe(41);
  })
})
