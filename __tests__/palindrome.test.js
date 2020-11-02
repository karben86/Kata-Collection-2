const { palindrome } = require('../palindrome')

describe('palindrome()', () => {
  it('', () => {
    expect(palindrome('cat')).toBe(false)
  })
  it('', () => {
    expect(palindrome('Acrobats stab orca')).toBe(true)
  })
  it('', () => {
    expect(palindrome('Are we not drawn onward to new era')).toBe(true)
  })
})
