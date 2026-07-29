const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

const imgDir = 'C:\\Users\\Abel ADIGUN\\Desktop\\repos\\Crypto with Shola\\frontend\\public\\images\\new_media';

async function extract() {
  const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
  console.log(`Found ${files.length} images.`);
  
  for (const file of files) {
    console.log(`Processing ${file}...`);
    try {
      const { data: { text } } = await Tesseract.recognize(
        path.join(imgDir, file),
        'eng'
      );
      console.log(`\n--- TEXT FROM ${file} ---`);
      console.log(text.trim());
      console.log(`---------------------------\n`);
    } catch (e) {
      console.error(`Error processing ${file}: ${e.message}`);
    }
  }
}

extract();
