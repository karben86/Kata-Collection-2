const { supermarketQueue } = require('../supermarket-queue')

describe('supermarketQueue()', () => {
  it('supermarketQueue([2, 2, 2], 1) should return 6', () => {
    expect(supermarketQueue([2, 2, 2], 1)).toBe(6)
  })
  it('supermarketQueue([2, 10], 2) should return 10', () => {
    expect(supermarketQueue([2, 10], 2)).toBe(10)
  })
  it('supermarketQueue([2, 2, 2], 2) should return 4', () => {
    expect(supermarketQueue([2, 2, 2], 2)).toBe(4)
  })
  it('supermarketQueue([2, 3, 10], 2) should return 12', () => {
    expect(supermarketQueue([2, 3, 10], 2)).toBe(12)
  })
})
