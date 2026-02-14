const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy CSS files
const cssFiles = ['RecipeCard.css'];
cssFiles.forEach(file => {
  const srcPath = path.join(__dirname, '../src', file);
  const destPath = path.join(__dirname, '../dist', file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to dist/`);
  } else {
    console.warn(`Warning: ${file} not found in src/`);
  }
});

// Copy fallback image
const imageSrc = path.join(__dirname, '../public/no-image.jpg');
const imageDest = path.join(__dirname, '../dist/no-image.jpg');

if (fs.existsSync(imageSrc)) {
  fs.copyFileSync(imageSrc, imageDest);
  console.log('Copied no-image.jpg to dist/');
} else {
  console.warn('Warning: no-image.jpg not found in public/');
}

console.log('Asset copying completed!');
