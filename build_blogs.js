const fs = require('fs');

const posts = [
  {
    id: "absolute-beginners-roadmap",
    title: "The Absolute Beginner’s Roadmap to Crypto Trading",
    excerpt: "A step-by-step guide to setting up a wallet, choosing a reputable exchange, and placing your first spot trade without the overwhelm.",
    content: `<h2>1. Setting Up Your Security First</h2>
<p>Before you even think about buying a coin, you need to secure your digital life.</p>
<ul>
<li>Set up Two-Factor Authentication (2FA) using an app like Google Authenticator (avoid SMS 2FA).</li>
<li>Use strong, unique passwords for every crypto-related account.</li>
<li>Never, ever share your seed phrase or private keys with anyone. Not even support staff.</li>
</ul>
<h2>2. Choosing a Reputable Exchange</h2>
<p>As a beginner, you want an exchange that is easy to use, highly liquid, and secure. We recommend starting with established platforms like Bybit or Binance.</p>
<ul>
<li>Download the official app.</li>
<li>Complete the KYC (Know Your Customer) verification process.</li>
<li>Fund your account via P2P or direct bank transfer, depending on your region.</li>
</ul>
<h2>3. Placing Your First Spot Trade</h2>
<p>Spot trading simply means buying an asset and holding it. It is the safest way to start.</p>
<ul>
<li>Go to the 'Trade' tab.</li>
<li>Search for a high-volume pair, like BTC/USDT.</li>
<li>Choose 'Market Order' if you want to buy instantly at the current price, or 'Limit Order' if you want to buy at a specific lower price.</li>
<li>Enter the amount of USDT you want to spend and click 'Buy'.</li>
</ul>
<p>Congratulations! You are now a crypto holder. Remember, focus on capital preservation before profit generation.</p>`,
    date: "2026-07-20",
    category: "Trading Basics",
    readTime: "4 min read",
    img: "../assets/blog-chart.png"
  },
  {
    id: "mastering-your-mindset",
    title: "Mastering Your Mindset: The Psychology of a Profitable Trader",
    excerpt: "Why fear, greed, and FOMO are the biggest enemies of the new trader, and how to maintain emotional control.",
    content: `<h2>The Twin Enemies: Fear and Greed</h2>
<p>Every market movement is driven by human emotion.</p>
<ul>
<li><strong>FOMO (Fear Of Missing Out):</strong> This happens when you see a coin pumping 50% and you buy at the top, only to become exit liquidity for experienced traders.</li>
<li><strong>Panic Selling:</strong> This happens when the market dips and you sell at a loss out of fear, right before the market recovers.</li>
</ul>
<h2>How to Maintain Control</h2>
<ol>
<li><strong>Never trade with money you can't afford to lose.</strong> If you are stressed about a trade, your position size is too big.</li>
<li><strong>Accept losses as tuition.</strong> Every loss is a lesson. Write down why you lost in a trading journal. Did you ignore your stop-loss? Did you revenge trade?</li>
<li><strong>Stick to the plan.</strong> When we provide a signal in the VIP group, it comes with an entry, a target, and an invalidation point (stop-loss). Set these parameters the moment you enter the trade and step away from the charts.</li>
</ol>
<p>Discipline is what separates gamblers from professional traders. Level up your mindset, and the profits will follow.</p>`,
    date: "2026-07-22",
    category: "Mindset & Motivation",
    readTime: "5 min read",
    img: "../assets/proof-chart.png"
  },
  {
    id: "dyor-checklist",
    title: "The 'Do Your Own Research' (DYOR) Checklist",
    excerpt: "A practical guide on how to evaluate a crypto project's whitepaper, team, and community sentiment before investing.",
    content: `<h2>1. The Problem and The Solution</h2>
<p>Read the project's whitepaper or website. What real-world problem are they trying to solve? If the only use case is "the price will go up," it's a red flag. Look for projects with actual utility.</p>
<h2>2. The Team</h2>
<p>Are the founders public (doxxed) or anonymous? While anonymous founders have created great projects (like Bitcoin), it carries much higher risk. Check their LinkedIn profiles. Have they built successful tech companies before?</p>
<h2>3. Tokenomics</h2>
<p>Tokenomics refers to the supply and demand mechanics of the token.</p>
<ul>
<li>What is the maximum supply?</li>
<li>How many tokens are currently circulating?</li>
<li>How much is allocated to the team and insiders, and is there a vesting schedule preventing them from dumping on you?</li>
</ul>
<h2>4. Community Sentiment</h2>
<p>Check their Twitter and Discord. Is the community focused on building and using the technology, or is it just people spamming "wen moon"? A healthy community is crucial for long-term growth.</p>
<p>Always remember: Do not trust hype. Trust the research.</p>`,
    date: "2026-07-25",
    category: "Security & Research",
    readTime: "6 min read",
    img: "../assets/learn-hero.png"
  },
  {
    id: "risk-management-101",
    title: "Risk Management 101: Surviving the Crypto Markets",
    excerpt: "Learn how to calculate position sizes and why setting a stop-loss is non-negotiable for long-term success.",
    content: `<h2>The 1% Rule</h2>
<p>Professional traders rarely risk more than 1% to 2% of their total trading capital on a single trade. If you have a $1,000 portfolio, your maximum risk per trade should be $10 to $20. This means if the trade hits your stop-loss, you only lose $10. You would need to lose 100 times in a row to blow your account.</p>
<h2>Setting the Stop-Loss</h2>
<p>A stop-loss is an automatic order that sells your asset if the price drops to a certain level. It removes emotion from the equation.</p>
<ul>
<li>Never move your stop-loss down when a trade is going against you. Accept the small loss and move on.</li>
<li>When a trade is in profit, you can trail your stop-loss upwards to lock in gains.</li>
</ul>
<h2>Risk-to-Reward Ratio</h2>
<p>Always look for setups with a minimum 1:2 or 1:3 risk-to-reward ratio. This means you are risking $10 to make $30. With a 1:3 ratio, you can lose 7 out of 10 trades and still be profitable.</p>
<p>Structure, discipline, and risk management. That is the CryptoWithShola way.</p>`,
    date: "2026-07-27",
    category: "Trading Basics",
    readTime: "4 min read",
    img: "../assets/shola-portrait.png"
  }
];

const template = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{TITLE}} — Crypto With Shola</title>
    <link rel="stylesheet" href="../assets/styles.css" />
    <link rel="stylesheet" href="../assets/site-refresh.css" />
    <link rel="stylesheet" href="../assets/home.css" />
  </head>
  <body>
    <nav class="site-nav" aria-label="Main">
      <div class="nav-inner">
        <a href="../index.html" class="nav-logo cws-logo">CWS</a>
        <div class="nav-links">
          <a href="../index.html">Home</a>
          <a href="../about.html">About</a>
          <a href="../learn.html">Learn</a>
          <a href="index.html">Blog</a>
          <a href="../contact.html" class="btn btn-sm btn-primary">Join Telegram</a>
        </div>
      </div>
    </nav>

    <header class="hero" style="padding: 100px 24px 40px; text-align: left;">
      <div class="container section-center" style="max-width: 800px; margin: 0 auto;">
        <span class="section-label">{{CATEGORY}} • {{DATE}} • {{READ_TIME}}</span>
        <h1>{{TITLE}}</h1>
      </div>
    </header>

    <section class="section" style="padding-top: 0;">
      <div class="container" style="max-width: 800px; margin: 0 auto; line-height: 1.8; font-size: 1.1rem;">
        <img src="{{IMG}}" style="width: 100%; border-radius: 12px; margin-bottom: 40px;" />
        {{CONTENT}}
      </div>
    </section>

    <section class="section" aria-label="Internal links" style="background: var(--surface); border-top: 1px solid var(--border)">
      <div class="container section-center">
        <h3>Keep learning</h3>
        <a href="../learn.html" class="btn btn-outline btn-sm">Learn Crypto</a>
        <a href="../membership.html" class="btn btn-outline btn-sm">Membership</a>
        <a href="../contact.html" class="btn btn-primary btn-sm">Join Telegram</a>
      </div>
    </section>

    <footer class="site-footer">
      <div class="footer-inner" style="max-width: 1000px; grid-template-columns: 2fr 1fr 1fr">
        <div>
          <div class="logo-row">
            <a class="wordmark cws-logo" href="../index.html">CWS</a>
          </div>
          <p style="color: rgba(255, 255, 255, 0.5); font-size: 0.88rem">Education, not hype.</p>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="../learn.html">Learn Crypto</a><a href="../resources.html">Resources</a>
        </div>
        <div>
          <h4>Social</h4>
          <a href="#">X</a><a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  </body>
</html>`;

// 1. Generate Blog Pages
posts.forEach(post => {
  let html = template
    .replace(/{{TITLE}}/g, post.title)
    .replace('{{CATEGORY}}', post.category)
    .replace('{{DATE}}', post.date)
    .replace('{{READ_TIME}}', post.readTime)
    .replace('{{IMG}}', post.img)
    .replace('{{CONTENT}}', post.content);
    
  fs.writeFileSync(`blog/${post.id}.html`, html);
});

// 2. Update blog/index.html with new articles
let indexHtml = fs.readFileSync('blog/index.html', 'utf8');

const newGridHtml = posts.map(post => `
          <article class="blog-card">
            <img src="\${post.img}" alt="" loading="lazy" />
            <div class="blog-body">
              <div class="tag">\${post.category}</div>
              <h3>\${post.title}</h3>
              <p>\${post.excerpt}</p>
              <a href="\${post.id}.html">Read more →</a>
            </div>
          </article>
`).join('');

indexHtml = indexHtml.replace(/<div class="blog-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, `<div class="blog-grid">${newGridHtml}</div></div></section>`);
fs.writeFileSync('blog/index.html', indexHtml);

// 3. Update main index.html with new articles in the notes section
let mainHtml = fs.readFileSync('index.html', 'utf8');

const mainNotesHtml = posts.slice(0,3).map((post, index) => `
          <a href="blog/\${post.id}.html" class="note \${index === 1 ? 'note-invert' : ''}">
            <span>0\${index + 1} / \${post.category}</span>
            <h3>\${post.title}</h3>
            <p>\${post.excerpt}</p>
            <b>Read note →</b>
          </a>
`).join('');

mainHtml = mainHtml.replace(/<div class="notes-grid">[\s\S]*?<\/div>\s*<\/section>/, `<div class="notes-grid">${mainNotesHtml}</div></section>`);
fs.writeFileSync('index.html', mainHtml);

console.log('Blog successfully updated!');
