const { textInDiv } = require('../text-in-div')

describe('textInDiv()', () => {
  const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.'

  it('', () => {
    expect(textInDiv('A', 1)).toBe('INVALID INPUT');
  })
  it('', () => {
    expect(textInDiv('Northcoders', 15)).toBe('Northcoders');
  })
  it('', () => {
    expect(textInDiv('Northcoders Coding Bootcamp', 15)).toBe('Northcoders\n Coding Bootcamp');
  })
  it('', () => {
    expect(textInDiv('Northcoders Coding Bootcamp', 20)).toBe('Northcoders Coding\n Bootcamp');
  })
  it('', () => {
    expect(textInDiv('Northcoders Coding Bootcamp', 30)).toBe('Northcoders Coding Bootcamp');
  })
  it('', () => {
    expect(textInDiv(str, 50)).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing\n elit. Aliquam nec consectetur risus. Cras vel urna\n a tellus dapibus consequat. Duis bibendum\n tincidunt viverra. Phasellus dictum efficitur sem\n quis porttitor. Mauris luctus auctor diam id\n ultrices. Praesent laoreet in enim ut placerat.\n Praesent a facilisis turpis.');
  })
  it('', () => {
    expect(textInDiv(str, 30)).toBe('Lorem ipsum dolor sit amet,\n consectetur adipiscing elit.\n Aliquam nec consectetur risus.\n Cras vel urna a tellus dapibus\n consequat. Duis bibendum\n tincidunt viverra. Phasellus\n dictum efficitur sem quis\n porttitor. Mauris luctus\n auctor diam id ultrices.\n Praesent laoreet in enim ut\n placerat. Praesent a facilisis\n turpis.');
  })
})
