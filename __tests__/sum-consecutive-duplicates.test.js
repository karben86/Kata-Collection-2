const { sumConsecutiveDuplicates, reduceConsecutives } = require('../sum-consecutive-duplicates');

describe('sumConsecutiveDuplicates()', () => {
  it('', () => {
    expect(sumConsecutiveDuplicates([1, 2, 3])).toEqual([1, 2, 3])
  });
  it('', () => {
    expect(sumConsecutiveDuplicates([1, 1, 2, 3])).toEqual([2, 2, 3])
  });
  it('', () => {
    expect(sumConsecutiveDuplicates([1, 1, 2, 2, 3, 3])).toEqual([2, 4, 6])
  });
  it('', () => {
    expect(sumConsecutiveDuplicates([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1])).toEqual([2, 2, 4, 2, 3])
  });
});

describe('reduceConsecutives()', () => {
  it('', () => {
    expect(reduceConsecutives([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1])).toEqual([8, 2, 3])
  });
});
