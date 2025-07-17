const fs = require('fs');
const path = require('path');

const directoryPath = './icons'; // change this to your SVG folder path

const result = [];

fs.readdirSync(directoryPath).forEach(file => {
  if (file.endsWith('.svg')) {
    const filePath = path.join(directoryPath, file);
    const svgContent = fs.readFileSync(filePath, 'utf-8');
    const name = file
      .replace('.svg', '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase()); // Title Case

    result.push({
      name: name,
      file: file,
      svg: {
        changingThisBreaksApplicationSecurity: svgContent
      }
    });
  }
});

fs.writeFileSync('manifest.json', JSON.stringify(result, null, 2));
console.log('✅ manifest.json created successfully.');
