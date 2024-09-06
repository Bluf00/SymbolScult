function generateSvg({ text, textColor, shape, shapeColor }) {
  let shapeSvg;

  switch (shape) {
    case 'circle':
      shapeSvg = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      shapeSvg = `<polygon points="150,20 280,180 20,180" fill="${shapeColor}" />`;
      break;
    case 'square':
      shapeSvg = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
      break;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeSvg}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;
}

module.exports = { generateSvg };

