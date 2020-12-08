const { alphabetReplace } = require('../alphabet-replace')

describe('alphabetReplace()', () => {
  it(`alphabetReplace('code') should return '3 15 4 5'`, () => {
    expect(alphabetReplace('code')).toBe('3 15 4 5')
  })
  it(`alphabetReplace('Northcoders') should return '14 15 18 20 8 3 15 4 5 18 19'`, () => {
    expect(alphabetReplace('Northcoders')).toBe('14 15 18 20 8 3 15 4 5 18 19')
  })
  it(`alphabetReplace('expert programming') should return '5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7'`, () => {
    expect(alphabetReplace('expert programming')).toBe('5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7')
  })
})
