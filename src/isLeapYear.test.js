const isLeapYear = require('./isLeapYear');

describe('isLeapYear', () => {
  it('should return false when given 2', () => {
    expect(isLeapYear(2)).toBe(false);
  });
  it('should return true when given 4', () => {
    expect(isLeapYear(4)).toBe(true);
  });
  it('should return false when given 100', () => {
    expect(isLeapYear(100)).toBe(false);
  });
  it('should return true when given 400', () => {
    expect(isLeapYear(400)).toBe(true);
  });
});
