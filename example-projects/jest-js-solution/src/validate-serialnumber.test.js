const validateSerialnumber = require('./validate-serialnumber');

test('example serialnumber should be correct', () => {
  expect(validateSerialnumber('DE-255-233ab34')).toBe(true);
});

test('more or less than 3 segments should not work', () => {
  expect(validateSerialnumber('DE-255-233ab34-ab')).toBe(false);
  expect(validateSerialnumber('DE-255')).toBe(false);
});

test('1. segment should be country code', () => {
  expect(validateSerialnumber('12-255-233ab34')).toBe(false);
  expect(validateSerialnumber('ES-255-233ab34')).toBe(true);
});

test('2. segment should be 3 digits (000 - 360)', () => {
  expect(validateSerialnumber('DE-2552-233ab34')).toBe(false);
  expect(validateSerialnumber('DE-1ac-233ab34')).toBe(false);
  expect(validateSerialnumber('DE-399-233ab34')).toBe(false);
});

test('3. segment should be 6-8 chars (digits or "a", "b", "c")', () => {
  expect(validateSerialnumber('DE-255-123abc')).toBe(true);
  expect(validateSerialnumber('DE-255-cba54321')).toBe(true);
  expect(validateSerialnumber('DE-255-CBA54321')).toBe(false); // no capital letters allwowed
  expect(validateSerialnumber('DE-255-123def')).toBe(false); // wrong chars
  expect(validateSerialnumber('DE-255-12345')).toBe(false); // too short
  expect(validateSerialnumber('DE-255-123456789')).toBe(false); // too long
});
