const { palindrome } = require('../palindrome')

describe('palindrome()', () => {
  it(`palindrome('cat') should return false`, () => {
    expect(palindrome('cat')).toBe(false)
  })
  it(`palindrome('Acrobats stab orca') should return true`, () => {
    expect(palindrome('Acrobats stab orca')).toBe(true)
  })
  it(`palindrome('Are we not drawn onward to new era') should return true`, () => {
    expect(palindrome('Are we not drawn onward to new era')).toBe(true)
  })
})
