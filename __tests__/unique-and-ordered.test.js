const { uniqueAndOrdered } = require('../unique-and-ordered')

describe('uniqueAndOrdered()', () => {
  it('', () => {
    expect(uniqueAndOrdered([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1])).toEqual([1, 2, 3, 1]);
  })
  it('', () => {
    expect(uniqueAndOrdered('AaAAABBBCCCc')).toEqual(['A', 'a', 'A', 'B', 'C', 'c']);
  })
  it('', () => {
    expect(uniqueAndOrdered('nnoorrtthhccooddeerrss')).toEqual(['n', 'o', 'r', 't', 'h', 'c', 'o', 'd', 'e', 'r', 's']);
  })
})
