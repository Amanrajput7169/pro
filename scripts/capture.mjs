import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sites = [
  { url: 'https://www.krisawindia.com', name: 'krisawindia.png' },
  { url: 'https://www.palacejungashimla.com', name: 'palacejungashimla.png' },
  { url: 'https://www.shivnemgraphics.com', name: 'shivnemgraphics.png' }
];

async function captureScreenshots() {
  const publicDir = path.join(__dirname, '../public/projects');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: "new" });
  
  for (const site of sites) {
    console.log(`Navigating to ${site.url}...`);
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      const savePath = path.join(publicDir, site.name);
      await page.screenshot({ path: savePath });
      console.log(`Saved screenshot to ${savePath}`);
      await page.close();
    } catch (err) {
      console.error(`Failed to capture ${site.url}:`, err.message);
    }
  }

  await browser.close();
  console.log('Done!');
}

captureScreenshots();
