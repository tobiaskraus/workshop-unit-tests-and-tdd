const validateSerialnumber = require('./validate-serialnumber');

test('example serialnumber is correct', () => {
  expect(validateSerialnumber('DE-255-233ab34')).toBe(true);
});

test('only 3 segments are correct', () => {
  expect(validateSerialnumber('DE-255-233ab34-ab')).toBe(false);
  expect(validateSerialnumber('DE-255')).toBe(false);
});

test('1. segment has to be country code', () => {
  // non-capital
  expect(validateSerialnumber('de-255-233ab34')).toBe(false);
});
