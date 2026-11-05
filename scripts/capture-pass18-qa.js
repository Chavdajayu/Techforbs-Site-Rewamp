const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const outDir = 'C:/__TECHFORBS-web-Redesign/TechForbs-NextJS-Rewamp/QA/precision-pass-18';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log('Navigating to homepage...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000); // allow animations to settle

  // 01-global-homepage-sentence-case.png
  console.log('Capturing 01-global-homepage-sentence-case.png...');
  await page.screenshot({ path: path.join(outDir, '01-global-homepage-sentence-case.png') });

  // 03-blue-theme-homepage.png
  console.log('Capturing 03-blue-theme-homepage.png...');
  await page.screenshot({ path: path.join(outDir, '03-blue-theme-homepage.png') });

  // Navigate to Shopify Tech page
  console.log('Navigating to Shopify technology page...');
  await page.goto('http://localhost:3000/technologies/shopify', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // 02-technology-pages-sentence-case.png
  console.log('Capturing 02-technology-pages-sentence-case.png...');
  await page.screenshot({ path: path.join(outDir, '02-technology-pages-sentence-case.png') });

  // 04-blue-theme-technology-pages.png
  console.log('Capturing 04-blue-theme-technology-pages.png...');
  await page.screenshot({ path: path.join(outDir, '04-blue-theme-technology-pages.png') });

  // Navigate to AI & Automation page
  console.log('Navigating to AI & Automation page...');
  await page.goto('http://localhost:3000/services/ai-automation', { waitUntil: 'domcontentloaded' });
  // 05-ai-hero-initial-state.png
  console.log('Capturing 05-ai-hero-initial-state.png...');
  await page.screenshot({ path: path.join(outDir, '05-ai-hero-initial-state.png') });

  await page.waitForTimeout(2500); // wait for hero animation to complete
  // 06-ai-hero-final-state.png
  console.log('Capturing 06-ai-hero-final-state.png...');
  await page.screenshot({ path: path.join(outDir, '06-ai-hero-final-state.png') });

  // Scroll to Service Cards
  console.log('Capturing 07-ai-service-cards-blue-theme.png...');
  const solutions = await page.$('#solutions');
  if (solutions) await solutions.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '07-ai-service-cards-blue-theme.png') });

  // Scroll to Benefits Section
  console.log('Capturing 08-ai-benefits-reference-layout.png...');
  const benefitsSec = await page.evaluate(() => {
    const el = document.querySelectorAll('.tech-services')[0];
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '08-ai-benefits-reference-layout.png') });

  // Scroll to Case Studies
  console.log('Capturing 09-ai-case-studies-correct-images.png & 10-ai-case-study-carousel.png...');
  const caseSec = await page.$('#why-we');
  if (caseSec) await caseSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '09-ai-case-studies-correct-images.png') });
  await page.screenshot({ path: path.join(outDir, '10-ai-case-study-carousel.png') });

  // Scroll to Why Teams Choose
  console.log('Capturing 11-ai-why-teams-image-composition.png...');
  await page.evaluate(() => {
    const h2s = Array.from(document.querySelectorAll('h2'));
    const target = h2s.find(h => h.textContent.includes('Why teams choose'));
    if (target) target.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '11-ai-why-teams-image-composition.png') });

  // Scroll to Technology Carousel
  console.log('Capturing 12-ai-technology-horizontal-carousel.png...');
  const ecoSec = await page.$('#ecosystem');
  if (ecoSec) await ecoSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '12-ai-technology-horizontal-carousel.png') });

  // Scroll to Businesses We Serve
  console.log('Capturing 13-ai-business-cards-blue-theme.png...');
  await page.evaluate(() => {
    const h2s = Array.from(document.querySelectorAll('h2'));
    const target = h2s.find(h => h.textContent.includes('Businesses we serve'));
    if (target) target.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '13-ai-business-cards-blue-theme.png') });

  // Scroll to CTA Banner
  console.log('Capturing 14-ai-cta-blue-theme.png...');
  const ctaBanner = await page.$('.cta-banner');
  if (ctaBanner) await ctaBanner.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '14-ai-cta-blue-theme.png') });

  // Scroll to FAQ Section
  console.log('Capturing 15-ai-faq-section.png...');
  const faqSec = await page.$('#faq');
  if (faqSec) await faqSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '15-ai-faq-section.png') });

  // Scroll to Contact Section
  console.log('Capturing 16-ai-contact-section.png...');
  const contactSec = await page.$('#contact-section');
  if (contactSec) await contactSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '16-ai-contact-section.png') });

  // Full page desktop
  console.log('Capturing 17-ai-fullpage-desktop.png...');
  await page.screenshot({ path: path.join(outDir, '17-ai-fullpage-desktop.png'), fullPage: true });

  // Full page mobile
  console.log('Capturing 18-ai-fullpage-mobile.png...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/services/ai-automation', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(outDir, '18-ai-fullpage-mobile.png'), fullPage: true });

  await browser.close();
  console.log('All 18 QA screenshots captured successfully!');
}

run().catch(err => {
  console.error('Error during QA capture:', err);
  process.exit(1);
});
