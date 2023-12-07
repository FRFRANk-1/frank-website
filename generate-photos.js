// generate-photos.js
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src/assets/Photo_Portfolio');
const files = fs.readdirSync(dirPath).filter(file => /\.(jpe?g|png|gif|bmp)$/i.test(file));

let importStatements = files.map((file, index) => `import photo${index} from './Photo_Portfolio/${file}';`).join('\n');
let pathsArray = files.map((_, index) => `photo${index}`).join(', ');

const outputPath = path.join(__dirname, 'src/assets/photoImports.js');
const content = `${importStatements}\n\nexport const photoPaths = [${pathsArray}];\n`;

fs.writeFileSync(outputPath, content);
