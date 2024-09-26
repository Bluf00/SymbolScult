const { generateSvg } = require('./index');

describe('generateSvg', () => {
  it('should generate a circle SVG with the given text and colors', () => {
    const result = generateSvg({
      text: 'ABC',
      textColor: 'red',
      shape: 'circle',
      shapeColor: 'blue',
    });
    expect(result).toContain('<circle cx="150" cy="100" r="80" fill="blue" />');
    expect(result).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>');
  });

  it('should generate a square SVG with the given text and colors', () => {
    const result = generateSvg({
      text: 'XYZ',
      textColor: '#ffffff',
      shape: 'square',
      shapeColor: '#000000',
    });
    expect(result).toContain('<rect x="50" y="50" width="200" height="200" fill="#000000" />');
    expect(result).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="#ffffff">XYZ</text>');
  });

  it('should generate a triangle SVG with the given text and colors', () => {
    const result = generateSvg({
      text: 'TST',
      textColor: 'yellow',
      shape: 'triangle',
      shapeColor: 'green',
    });
    expect(result).toContain('<polygon points="150,20 280,180 20,180" fill="green" />');
    expect(result).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">TST</text>');
  });
});
