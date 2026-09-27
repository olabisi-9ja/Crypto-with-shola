const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1920,height:1080}});
for(const f of process.argv.slice(2)){await p.goto('file:///home/user/Crypto-with-shola/'+f);await p.waitForTimeout(1500);await p.screenshot({path:f.replace(/\//g,'_')+'.png',fullPage:true});}
await b.close();})();
