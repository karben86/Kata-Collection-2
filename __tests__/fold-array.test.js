const { foldArray } = require('../fold-array')

describe('foldArray()', () => {
  it('foldArray([1, 2], 1) should return [3]', () => {
    expect(foldArray([1, 2], 1)).toEqual([3]);
  })
  it('foldArray([1, 2, 3], 1) should return [4, 2]', () => {
    expect(foldArray([1, 2, 3], 1)).toEqual([4, 2]);
  })
  it('foldArray([1, 2, 3, 4, 5], 1) should return [6, 6, 3]', () => {
    expect(foldArray([1, 2, 3, 4, 5], 1)).toEqual([6, 6, 3]);
  })
  it('foldArray([1, 2, 3, 10, 34, 100], 1) should return [101, 36, 13]', () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 1)).toEqual([101, 36, 13]);
  })
  it('foldArray([1, 2, 3, 10, 34, 100], 2) should return [114, 36]', () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 2)).toEqual([114, 36]);
  })
  it('foldArray([1, 2, 3, 10, 34, 100], 3) should return [150]', () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 3)).toEqual([150]);
  })
  it('foldArray([1, 2, 3, 10, 34, 100], 4) should return [150]', () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 4)).toEqual([150]);
  })
  it('foldArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2) should return [15, 20, 10]', () => {
    expect(foldArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([15, 20, 10]);
  })
})
