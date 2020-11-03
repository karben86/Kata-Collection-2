const { alphabetReplace } = require('../alphabet-replace')

describe('alphabetReplace()', () => {
  it('', () => {
    expect(alphabetReplace('code')).toBe('3 15 4 5')
  })
  it('', () => {
    expect(alphabetReplace('Northcoders')).toBe('14 15 18 20 8 3 15 4 5 18 19')
  })
  it('', () => {
    expect(alphabetReplace('expert programming')).toBe('5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7')
  })
})
