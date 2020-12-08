const { uniqueAndOrdered } = require('../unique-and-ordered')

describe('uniqueAndOrdered()', () => {
  it(`uniqueAndOrdered([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1]) should return [1, 2, 3, 1]`, () => {
    expect(uniqueAndOrdered([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1])).toEqual([1, 2, 3, 1]);
  })
  it(`uniqueAndOrdered('AaAAABBBCCCc') should return ['A', 'a', 'A', 'B', 'C', 'c']`, () => {
    expect(uniqueAndOrdered('AaAAABBBCCCc')).toEqual(['A', 'a', 'A', 'B', 'C', 'c']);
  })
  it(`uniqueAndOrdered('nnoorrtthhccooddeerrss') should return ['n', 'o', 'r', 't', 'h', 'c', 'o', 'd', 'e', 'r', 's']`, () => {
    expect(uniqueAndOrdered('nnoorrtthhccooddeerrss')).toEqual(['n', 'o', 'r', 't', 'h', 'c', 'o', 'd', 'e', 'r', 's']);
  })
})
