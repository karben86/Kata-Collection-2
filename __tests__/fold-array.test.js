const { foldArray } = require('../fold-array')

describe('foldArray()', () => {
  it('', () => {
    expect(foldArray([1, 2], 1)).toEqual([3]);
  })
  it('', () => {
    expect(foldArray([1, 2, 3], 1)).toEqual([4, 2]);
  })
  it('', () => {
    expect(foldArray([1,2,3,4,5], 1)).toEqual([6,6,3]);
  })
  it('', () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 1)).toEqual([101, 36, 13]);
  })
  it('', () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 2)).toEqual([114, 36]);
  })
  it('', () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 3)).toEqual([150]);
  })
  it('', () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 4)).toEqual([150]);
  })
  it('', () => {
    expect(foldArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([15, 20, 10]);
  })
})
