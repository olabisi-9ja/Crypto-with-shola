const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1920,height:1080}});
await pg.goto('file://'+__dirname+'/video.html');await pg.evaluate(()=>window.ready);await pg.evaluate(()=>document.fonts.ready);await pg.waitForTimeout(500);
const args=process.argv.slice(2);
if(args[0]==='all'){fs.mkdirSync('frames',{recursive:true});for(let f=0;f<600;f++){await pg.evaluate(t=>render(t),f/30);await pg.screenshot({path:`frames/f${String(f).padStart(4,'0')}.jpg`,type:'jpeg',quality:94});}}
else{fs.mkdirSync('stills',{recursive:true});for(const t of args){await pg.evaluate(t=>render(t),+t);await pg.screenshot({path:`stills/t${t}.jpg`,type:'jpeg',quality:80});}}
await b.close();})();
