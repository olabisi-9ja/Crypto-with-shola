const fs = require('fs');
const path = require('path');

// 1. Add CSS to styles
const cssToAdd = `
@keyframes cws-flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
.cws-logo {
  background: linear-gradient(90deg, #ff6339, #e8ff40, #ff6339);
  background-size: 200% auto;
  color: transparent !important;
  -webkit-background-clip: text;
  background-clip: text;
  animation: cws-flow 3s linear infinite;
  font-weight: 900;
  letter-spacing: -0.05em;
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
}
.wordmark.cws-logo {
  font-size: 24px;
}
`;

['assets/home.css', 'assets/styles.css'].forEach(file => {
  if (fs.existsSync(file)) {
    fs.appendFileSync(file, cssToAdd);
  }
});

// 2. Process all HTML files
function processHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['frontend', 'node_modules', '.git'].includes(file)) {
        processHtmlFiles(fullPath);
      }
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace <a class="wordmark"...><span>CRYPTO</span><span>WITH SHOLA</span></a>
      content = content.replace(/<a class="wordmark"([^>]*)>(?:.|\n)*?<\/a>/g, '<a class="wordmark cws-logo" $1>CWS</a>');
      // Replace nav-logo
      content = content.replace(/<a href="([^"]+)" class="nav-logo"\s*>[\s\S]*?Crypto With Shola<\/a\s*>/g, '<a href="$1" class="nav-logo cws-logo">CWS</a>');
      // Replace footer wordmark if different
      content = content.replace(/<a class="wordmark"([^>]*)>\s*<span>CRYPTO<\/span>\s*<span>WITH SHOLA<\/span>\s*<\/a>/g, '<a class="wordmark cws-logo" $1>CWS</a>');

      fs.writeFileSync(fullPath, content);
    }
  }
}

processHtmlFiles('.');
console.log('Logos updated in HTML files');
