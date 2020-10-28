const { findMissingLetter } = require('../find-missing-letter')

describe('findMissingLetter()', () => {
  it('', () => {
    expect(findMissingLetter(['A', 'B', 'C', 'D', 'E'])).toBe('')
  })
  it('', () => {
    expect(findMissingLetter(['A', 'B', 'C', 'E'])).toBe('D')
  })
  it('', () => {
    expect(findMissingLetter(['e', 'f', 'g', 'i'])).toBe('h')
  })
})
