const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  it('', () => {
    expect(counterIntelligence('Y')).toBe('X');
  });
  it('', () => {
    expect(counterIntelligence('BCD Y')).toBe('ABC X');
  });
  it('', () => {
    expect(counterIntelligence('NKRRU YCKKZNKGXZ D')).toBe('HELLO SWEETHEART X');
  });
  it('', () => {
    expect(counterIntelligence('ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G')).toBe('REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X');
  });
  it('', () => {
    expect(counterIntelligence('FYBNQMF, XJUI; QVODUVBUJPO. Y')).toBe('EXAMPLE, WITH; PUNCTUATION. X');
  });
});
