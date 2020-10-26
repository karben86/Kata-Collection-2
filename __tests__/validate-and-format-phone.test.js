const { validateAndFormatPhone } = require('../validate-and-format-phone');

describe('validateAndFormatPhone()', () => {
  it('', () => {
    expect(validateAndFormatPhone("08559912983")).toBe("Invalid phone number")
  });
  it('', () => {
    expect(validateAndFormatPhone("Not a Number")).toBe("Invalid phone number")
  });
  it('', () => {
    expect(validateAndFormatPhone("+2082394891246")).toBe("Invalid phone number")
  });
  it('', () => {
    expect(validateAndFormatPhone("01616603202")).toBe("+441616603202")
  });
  it('', () => {
    expect(validateAndFormatPhone("00441616603202")).toBe("+441616603202")
  });
  it('', () => {
    expect(validateAndFormatPhone("07540706000")).toBe("+447540706000")
  });
  it('', () => {
    expect(validateAndFormatPhone("+447540706000")).toBe("+447540706000")
  });
});
