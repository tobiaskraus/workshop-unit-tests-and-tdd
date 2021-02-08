/**
 *
 * @param {string} serial
 */
function validateSerialnumber(serial) {
  const segments = serial.split('-');
  if (segments.length !== 3) return false;
  if (!segments[0].match(/^[A-Z]{2}$/)) return false;
  const s2 = segments[1];
  if (s2.length !== 3) return false;
  if (!s2.match(/^\d{3}$/)) return false;
  if (parseInt(s2) > 360) return false;
  if (!segments[2].match(/^([0-9]|[a-c]){6,8}$/)) return false;

  return true;
}

module.exports = validateSerialnumber;
