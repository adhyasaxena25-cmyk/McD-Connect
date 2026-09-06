const fs = require('fs');
const path = require('path');

const dir = 'src/widgets/components/mcd';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { search: /https:\/\/images\.unsplash\.com\/photo-1568901346375-23c9450c58cd[^']*'/g, replace: "'/assets/food-burger.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1573080496219-bb080dd4f877[^']*'/g, replace: "'/assets/food-fries-close.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1629203851122-3726ecdf080e[^']*'/g, replace: "'/assets/food-coke.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1625813506062-0aeb1d7a094b[^']*'/g, replace: "'/assets/food-chicken.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1562802378-063ec186a863[^']*'/g, replace: "'/assets/cat-deals.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1572490122747-3968b75cc699[^']*'/g, replace: "'/assets/food-mcflurry.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1517701550927-30cf4ba1dba5[^']*'/g, replace: "'/assets/food-icedcoffee.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1525351484163-7529414344d8[^']*'/g, replace: "'/assets/food-breakfast.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1586190848861-99aa4a171e90[^']*'/g, replace: "'/assets/food-mealcombo.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1562967914-608f82629710[^']*'/g, replace: "'/assets/food-nuggets.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1576107232684-1279f3908594[^']*'/g, replace: "'/assets/mcd_slide_fries.jpg'" },
  { search: /https:\/\/images\.unsplash\.com\/photo-1500382017468-9049fed747ef[^']*'/g, replace: "'/assets/hero-scene-full.png'" }
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  replacements.forEach(r => {
    content = content.replace(r.search, r.replace);
  });
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
});

// Also check app/page.tsx
const appPage = 'src/widgets/app/page.tsx';
if (fs.existsSync(appPage)) {
  let content = fs.readFileSync(appPage, 'utf8');
  let original = content;
  replacements.forEach(r => {
    content = content.replace(r.search, r.replace);
  });
  if (content !== original) {
    fs.writeFileSync(appPage, content);
    console.log('Updated page.tsx');
  }
}
