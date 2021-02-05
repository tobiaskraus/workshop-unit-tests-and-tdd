function validateSerialnumber(serial) {
  const segments = serial.split('-');
  if (segments.length !== 3) return false;
  if (!segments[0].match(/[A-Z]{2}/)) return false;
  return segments.length === 3;
}

module.exports = validateSerialnumber;
