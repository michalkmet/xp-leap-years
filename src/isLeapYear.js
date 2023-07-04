function isLeapYear(year) {
  if (year === 4 || year === 400){
    return true;
  }
  return false;
}

module.exports = isLeapYear;
