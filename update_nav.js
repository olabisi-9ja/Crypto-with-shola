const fs = require('fs');
const path = require('path');

const standardLinks = `
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="learn.html">Learn</a>
          <a href="membership.html">Membership</a>
          <a href="proof.html">Proof</a>
          <a href="web3.html">Web3</a>
          <a href="faq.html">FAQ</a>
          <a href="blog/index.html">Blog</a>
          <a href="contact.html" class="btn btn-sm btn-primary">Contact</a>
`;

const blogLinks = `
          <a href="../index.html">Home</a>
          <a href="../about.html">About</a>
          <a href="../learn.html">Learn</a>
          <a href="../membership.html">Membership</a>
          <a href="../proof.html">Proof</a>
          <a href="../web3.html">Web3</a>
          <a href="../faq.html">FAQ</a>
          <a href="index.html">Blog</a>
          <a href="../contact.html" class="btn btn-sm btn-primary">Contact</a>
`;

const indexLinks = `
        <a href="learn.html">Learn</a>
        <a href="about.html">About</a>
        <a href="membership.html">Membership</a>
        <a href="proof.html">Proof</a>
        <a href="web3.html">Web3</a>
        <a href="faq.html">FAQ</a>
        <a href="blog/index.html">Blog</a>
`;

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
      
      if (file === 'index.html' && dir === '.') {
        content = content.replace(/<nav aria-label="Main navigation">[\s\S]*?<\/nav>/, `<nav aria-label="Main navigation">\${indexLinks}      </nav>`);
      } else if (dir === 'blog') {
        content = content.replace(/<div class="nav-links">[\s\S]*?<\/div>/, `<div class="nav-links">\${blogLinks}        </div>`);
      } else if (file !== 'web3.html' && file !== 'index.html') {
        content = content.replace(/<div class="nav-links">[\s\S]*?<\/div>/, `<div class="nav-links">\${standardLinks}        </div>`);
      }
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processHtmlFiles('.');
console.log('Navigation updated!');
