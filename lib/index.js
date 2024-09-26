const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./shapes');

async function run() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text (up to 3 characters):',
      validate: (input) => input.length <= 3 || 'Text must be up to 3 characters.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  const svgContent = generateSvg(answers);

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

run();
