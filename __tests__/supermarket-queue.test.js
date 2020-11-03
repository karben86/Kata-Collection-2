const { supermarketQueue } = require('../supermarket-queue')

describe('supermarketQueue()', () => {
  it('', () => {
    expect(supermarketQueue([2, 2, 2], 1)).toBe(6)
  })
  it('', () => {
    expect(supermarketQueue([2, 10], 2)).toBe(10)
  })
  it('', () => {
    expect(supermarketQueue([2, 2, 2], 2)).toBe(4)
  })
  it('', () => {
    expect(supermarketQueue([2, 3, 10], 2)).toBe(12)
  })
})
