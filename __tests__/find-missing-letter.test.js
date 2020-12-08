const { findMissingLetter } = require('../find-missing-letter')

describe('findMissingLetter()', () => {
  it(`findMissingLetter(['A', 'B', 'C', 'D', 'E']) should return ''`, () => {
    expect(findMissingLetter(['A', 'B', 'C', 'D', 'E'])).toBe('')
  })
  it(`findMissingLetter(['A', 'B', 'C', 'E']) should return D`, () => {
    expect(findMissingLetter(['A', 'B', 'C', 'E'])).toBe('D')
  })
  it(`findMissingLetter(['e', 'f', 'g', 'i']) should return 'h'`, () => {
    expect(findMissingLetter(['e', 'f', 'g', 'i'])).toBe('h')
  })
})
