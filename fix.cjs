const fs = require('fs');
const path = require('path');

const dir = 'src/widgets/components/mcd';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  content = content.replace(/''\/assets\/([^']*)',/g, "'/assets/',");
  content = content.replace(/"'\/assets\/hero-scene-full\.png'100%', height: '100%', objectFit: 'cover' }}"/g, '"/assets/hero-scene-full.png" style={{ width: "100%", height: "100%", objectFit: "cover" }}');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed ' + file);
  }
});
