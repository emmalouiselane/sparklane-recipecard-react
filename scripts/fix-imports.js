const fs = require('fs');
const path = require('path');

// Fix index.js file to include .js extension in imports
const indexPath = path.join(__dirname, '../dist/index.js');
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  content = content.replace("from './RecipeCard'", "from './RecipeCard.js'");
  fs.writeFileSync(indexPath, content);
  console.log('Fixed import in index.js');
}
