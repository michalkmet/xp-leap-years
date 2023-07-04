const isLeapYear = require('./isLeapYear');

describe('isLeapYear', () => {
  it('should return false when given 2', () => {
    expect(isLeapYear(2)).toBe(false);
  });
});
