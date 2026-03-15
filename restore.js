const fs = require('fs');
const path = require('path');

const srcReact = 'C:\\Users\\MSI\\Documents\\Portfolio\\JenoProfile\\react-portfolio\\src';
const destNext = 'C:\\Users\\MSI\\Documents\\Portfolio\\JenoProfile\\nextjs-portfolio\\src';

function copyComponents(subDir) {
  const reactDir = path.join(srcReact, 'components', subDir);
  const nextDir = path.join(destNext, 'components', subDir);
  
  if (!fs.existsSync(reactDir)) return;
  const files = fs.readdirSync(reactDir);
  
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      const srcPath = path.join(reactDir, file);
      const destPath = path.join(nextDir, file.replace('.jsx', '.tsx'));
      
      let content = fs.readFileSync(srcPath, 'utf8');
      if (content.indexOf('use client') === -1) {
        content = `"use client";\n\n` + content;
      }
      
      fs.writeFileSync(destPath, content);
      console.log(`Restored ${subDir}/${file} to TSX.`);
    }
  });
}

// Restore all components
['sections', 'layout', 'ui'].forEach(copyComponents);

// Now for CSS
// We will replace globals.css entirely
let indexCss = fs.readFileSync(path.join(srcReact, 'index.css'), 'utf8');
let compCss = fs.readFileSync(path.join(srcReact, 'styles', 'components.css'), 'utf8');

// We need to support light mode, so we must add the Tailwind initialization AND the theme variable definitions.
// Let's create the root definitions for light/dark mode.

const globalCssReset = `
@import "tailwindcss";

${indexCss}

${compCss}
`;

fs.writeFileSync(path.join(destNext, 'app', 'globals.css'), globalCssReset);
console.log('Restored globals.css');
