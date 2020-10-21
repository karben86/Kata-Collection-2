const { every, contains, some } = require('../every-contains-some');

describe('every()', () => {
  it('checks if the function returns false for an empty array.', () => {
    expect(every([], () => true)).toBe(false)
  });
  it('checks if the function returns true/false for an array with at least one value and a trivial predicate that alway returns true/false', () => {
    expect(every([1, 2, 3], () => true)).toBe(true)
    expect(every([1, 2, 3], () => false)).toBe(false)
  });
  it('checks if the function returns true/false for an array with at least one value and a non-trivial predicate', () => {
    expect(every([1, 3, 5], (x) => x % 2 === 1)).toBe(true)
    expect(every([2, 4, 6], (x) => x % 2 === 1)).toBe(false)
  });
  it('checks if the function returns true/false for a different predicate', () => {
    expect(every([2, 4, 6, 8], (x) => x < 10)).toBe(true)
    expect(every([2, 4, 6, 8], (x) => x > 10)).toBe(false)
  });
});

describe('contains()', () => {
  it('checks if the function returns false for an empty array and any value.', () => {
    expect(contains([], 5)).toBe(false)
  });
  it('checks if the function returns true/false for an array with one value which matches the second argument', () => {
    expect(contains([5], 5)).toBe(true)
    expect(contains([5], 6)).toBe(false)
  });
  it('checks if the function returns true/false for an array with at least one value and a non-trivial predicate', () => {
    expect(contains([1, 3, 5], 3)).toBe(true)
    expect(contains([1, 3, 5], 4)).toBe(false)
  });
  it('checks if the function returns true/false for a different predicate', () => {
    expect(contains(['hello', 'world'], 'hello')).toBe(true)
    expect(contains(['hello', 'world'], 'hi')).toBe(false)
  });
});

describe('some()', () => {
  it('checks if the function returns false for an empty array.', () => {
    expect(some([], () => true)).toBe(false)
  });
  it('checks if the function returns true/false for an array with at least one value and a trivial predicate that alway returns true/false', () => {
    expect(some([1, 2, 3], () => true)).toBe(true)
    expect(some([1, 2, 3], () => false)).toBe(false)
  });
  it('checks if the function returns true/false for an array with at least one value and a non-trivial predicate', () => {
    expect(some([2, 3, 4], (x) => x % 2 === 1)).toBe(true)
    expect(some([2, 4, 6], (x) => x % 2 === 1)).toBe(false)
  });
  it('checks if the function returns true/false for a different predicate', () => {
    expect(some([2, 4, 6, 11], (x) => x > 10)).toBe(true)
    expect(some([2, 4, 6, 8], (x) => x > 10)).toBe(false)
  });
});
