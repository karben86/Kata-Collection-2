const { insertNewValue } = require('../insert-new-value')

describe('insertNewValue()', () => {
  it('insertNewValue([1, 4, 5, 10], 2) should return [1, 2, 4, 5, 10]', () => {
    expect(insertNewValue([1, 4, 5, 10], 2)).toEqual([1, 2, 4, 5, 10])
  })
  it('insertNewValue([101, 444, 679, 1939, 1988], 2033) should return [101, 444, 679, 1939, 1988, 2033]', () => {
    expect(insertNewValue([101, 444, 679, 1939, 1988], 2033)).toEqual([101, 444, 679, 1939, 1988, 2033])
  })
})
