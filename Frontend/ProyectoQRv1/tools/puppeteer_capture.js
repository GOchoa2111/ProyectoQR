const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    const logs = [];

    page.on('console', (msg) => {
      try {
        logs.push({ type: msg.type(), text: msg.text() });
      } catch (e) {
        logs.push({ type: 'console', text: String(msg) });
      }
    });

    page.on('pageerror', (err) => {
      logs.push({ type: 'pageerror', text: err.stack || err.message || String(err) });
    });

    page.on('requestfailed', (req) => {
      const f = req.failure ? req.failure() : null;
      logs.push({ type: 'requestfailed', url: req.url(), errorText: f && f.errorText });
    });

    console.log('Navigating to http://localhost:4200 ...');
    const res = await page.goto('http://localhost:4200', { waitUntil: 'networkidle2', timeout: 20000 });
    console.log('Response status:', res && res.status());

  // wait a bit for any runtime errors to fire
  await new Promise((r) => setTimeout(r, 1500));

    const content = await page.content();
    fs.writeFileSync('puppeteer_dom.html', content, 'utf8');
    await page.screenshot({ path: 'puppeteer_screenshot.png', fullPage: true });

    console.log('\n---PUPPETEER LOGS START---');
    if (logs.length === 0) console.log('(no console logs captured)');
    logs.forEach((l, i) => {
      console.log(`[${i}] ${l.type}: ${l.text || JSON.stringify(l)}`);
    });
    console.log('---PUPPETEER LOGS END---\n');

    console.log('Saved puppeteer_dom.html and puppeteer_screenshot.png');
    await browser.close();
  } catch (err) {
    console.error('Puppeteer run error:', err && err.stack ? err.stack : err);
    if (browser) await browser.close();
    process.exit(1);
  }
})();
