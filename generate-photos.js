const fs = require('fs');
const path = require('path');

// Helper function to generate imports and exports for a given category
function generateCategoryExports(category) {
    const dirPath = path.join(__dirname, `src/assets/Photo_Portfolio/${category}`);
    const files = fs.readdirSync(dirPath).filter(file => /\.(jpe?g|png|gif|bmp)$/i.test(file));

    const importStatements = files.map((file, index) => `import ${category.toLowerCase()}${index} from './Photo_Portfolio/${category}/${file}';`).join('\n');
    const exportArray = files.map((_, index) => `${category.toLowerCase()}${index}`).join(', ');

    return { importStatements, exportArray };
}

// Categories
const categories = ['Portrait', 'Landscape', 'Commercial'];

let allImports = '';
let allExports = '';

// Generate imports and exports for each category
categories.forEach(category => {
    const { importStatements, exportArray } = generateCategoryExports(category);
    allImports += importStatements + '\n';
    allExports += `export const ${category.toLowerCase()}Photos = [${exportArray}];\n`;
});

const outputPath = path.join(__dirname, 'src/assets/photoCategories.js');
const content = `${allImports}\n${allExports}`;

fs.writeFileSync(outputPath, content);
