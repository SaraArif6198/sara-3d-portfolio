const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'tech');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('width=') && content.includes('<svg')) {
    content = content.replace('<svg', '<svg width="256" height="256"');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  } else if (content.includes('width=') && content.includes('<svg')) {
    // some might have width="100%" which also breaks threejs. Let's force 256
    // Actually just replacing isn't safe if we just blindly do it. Let's check.
    console.log(`Already has width: ${file}`);
  }
});
