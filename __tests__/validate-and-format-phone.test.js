const { validateAndFormatPhone } = require('../validate-and-format-phone');

describe('validateAndFormatPhone()', () => {
  it(`validateAndFormatPhone('08559912983') should return 'Invalid phone number'`, () => {
    expect(validateAndFormatPhone('08559912983')).toBe('Invalid phone number')
  });
  it(`validateAndFormatPhone('Not a Number') should return Invalid phone number`, () => {
    expect(validateAndFormatPhone('Not a Number')).toBe('Invalid phone number')
  });
  it(`validateAndFormatPhone('+2082394891246') should return 'Invalid phone number'`, () => {
    expect(validateAndFormatPhone('+2082394891246')).toBe('Invalid phone number')
  });
  it(`validateAndFormatPhone('01616603202') should return +441616603202`, () => {
    expect(validateAndFormatPhone('01616603202')).toBe('+441616603202')
  });
  it(`validateAndFormatPhone('00441616603202') should return '+441616603202'`, () => {
    expect(validateAndFormatPhone('00441616603202')).toBe('+441616603202')
  });
  it(`validateAndFormatPhone('07540706000') should return '+447540706000'`, () => {
    expect(validateAndFormatPhone('07540706000')).toBe('+447540706000')
  });
  it(`validateAndFormatPhone('+447540706000') should return '+447540706000'`, () => {
    expect(validateAndFormatPhone('+447540706000')).toBe('+447540706000')
  });
});
