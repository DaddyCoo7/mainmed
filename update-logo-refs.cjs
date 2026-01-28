const fs = require('fs');
const path = require('path');

function updateLogoReferences(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      updateLogoReferences(fullPath);
    } else if (file.isFile() && (file.name.endsWith('.tsx') || file.name.endsWith('.ts'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;

      // Replace PNG references with SVG
      content = content.replace(/medtransic-logomark1\.png/g, 'medtransic-logomark1.svg');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

const srcDir = path.join(__dirname, 'src');
updateLogoReferences(srcDir);
console.log('All logo references updated to SVG!');
