const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  it(`counterIntelligence('Y') should return 'X'`, () => {
    expect(counterIntelligence('Y')).toBe('X');
  });
  it(`counterIntelligence('BCD Y') should return 'ABC X'`, () => {
    expect(counterIntelligence('BCD Y')).toBe('ABC X');
  });
  it(`counterIntelligence('NKRRU YCKKZNKGXZ D') should return 'HELLO SWEETHEART X'`, () => {
    expect(counterIntelligence('NKRRU YCKKZNKGXZ D')).toBe('HELLO SWEETHEART X');
  });
  it(`counterIntelligence('ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G') should return 'REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X'`, () => {
    expect(counterIntelligence('ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G')).toBe('REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X');
  });
  it(`counterIntelligence('FYBNQMF, XJUI; QVODUVBUJPO. Y') should return 'EXAMPLE, WITH; PUNCTUATION. X'`, () => {
    expect(counterIntelligence('FYBNQMF, XJUI; QVODUVBUJPO. Y')).toBe('EXAMPLE, WITH; PUNCTUATION. X');
  });
});
