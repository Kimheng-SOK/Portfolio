const fs = require('fs');
const path = require('path');

const srcReact = 'C:\\Users\\MSI\\Documents\\Portfolio\\JenoProfile\\react-portfolio\\src';
const destNext = 'C:\\Users\\MSI\\Documents\\Portfolio\\JenoProfile\\nextjs-portfolio\\src';

let indexCss = fs.readFileSync(path.join(srcReact, 'index.css'), 'utf8');
let compCss = fs.readFileSync(path.join(srcReact, 'styles', 'components.css'), 'utf8');

// The original index.css starts with:
// /* ============================================
//    GLOBAL STYLES - PURE MONOCHROME DARK THEME
//    ============================================ */
// 
// @import url('https://fonts.googleapis.com/css2?family=...');
// 
// :root { ... }

// Extract the import
const importMatch = indexCss.match(/@import url\('[^']+'\);/);
const importUrl = importMatch ? importMatch[0] : '';
indexCss = indexCss.replace(importUrl, '');

const lightTheme = `
[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f4f4f5;
  --bg-tertiary: #e4e4e7;
  --bg-elevated: #ffffff;

  --text-primary: #09090b;
  --text-secondary: #27272a;
  --text-tertiary: #52525b;
  --text-muted: #71717a;

  --accent-bright: #000000;
  --accent-light: #18181b;
  --accent-medium: #52525b;
  --accent-dark: #a1a1aa;
  --accent-darker: #d4d4d8;

  --glass-bg: rgba(0, 0, 0, 0.03);
  --glass-border: rgba(0, 0, 0, 0.08);
  --glass-hover: rgba(0, 0, 0, 0.06);
  --glass-active: rgba(0, 0, 0, 0.1);

  --gradient-primary: linear-gradient(135deg, #000000 0%, #666666 100%);
  --gradient-subtle: linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.02) 100%);
  --gradient-card: linear-gradient(145deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.01) 100%);
  --gradient-border: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 100%);

  --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 25px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 50px rgba(0, 0, 0, 0.07);
  --shadow-glow: 0 0 60px rgba(0, 0, 0, 0.05);
}

[data-theme="light"] .bg-grid {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
}
`;

// Insert the light theme immediately after the :root section ends
const rootEndIndex = indexCss.indexOf('}', indexCss.indexOf(':root {')) + 1;
indexCss = indexCss.slice(0, rootEndIndex) + '\n\n' + lightTheme + '\n\n' + indexCss.slice(rootEndIndex);

const finalCss = `
@import "tailwindcss";
${importUrl}

${indexCss}

/* COMPONENTS */
${compCss}
`;

fs.writeFileSync(path.join(destNext, 'app', 'globals.css'), finalCss);
console.log('Fixed globals.css successfully.');
