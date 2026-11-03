const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-375', width: 375, height: 812 }
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  const outDir = path.join(__dirname, '../QA/precision-pass-18/fixed');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3009/services/ai-automation', { waitUntil: 'networkidle' });

    const metrics = await page.evaluate(() => {
      const innerWidth = window.innerWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const bodyScrollWidth = document.body.scrollWidth;
      
      const overflowing = [];
      document.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > innerWidth + 2) {
          overflowing.push({
            tag: el.tagName,
            class: el.className,
            right: Math.round(r.right),
            width: Math.round(r.width)
          });
        }
      });

      return {
        innerWidth,
        scrollWidth,
        bodyScrollWidth,
        hasHorizontalScrollbar: scrollWidth > innerWidth,
        overflowingCount: overflowing.length,
        overflowing: overflowing.slice(0, 5)
      };
    });

    // Capture screenshot
    await page.screenshot({
      path: path.join(outDir, `${vp.name}-full.png`),
      fullPage: true
    });

    results.push({ viewport: vp.name, ...metrics });
    await page.close();
  }

  // Also check homepage at 1440 and 375
  const homePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await homePage.goto('http://localhost:3009/', { waitUntil: 'networkidle' });
  const homeMetrics = await homePage.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth
  }));
  await homePage.close();

  console.log('QA Verification Results:');
  console.log(JSON.stringify(results, null, 2));
  console.log('Homepage verification:', homeMetrics);

  await browser.close();
})();
