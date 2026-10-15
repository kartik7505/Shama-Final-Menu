// test_production_integrity.js
// Production integrity and readiness verification suite for Shama Deluxe Restaurant Menu

const fs = require('fs');
const path = require('path');

let failures = 0;
let passes = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    passes++;
    console.log(`  ✓ PASS: ${testName}`);
  } else {
    failures++;
    console.error(`  ✗ FAIL: ${testName} ${details ? '- ' + details : ''}`);
  }
}

console.log('====================================================');
console.log('SHAMA DELUXE PRODUCTION INTEGRITY AUDIT SUITE');
console.log('====================================================\n');

// 1. Audit vercel.json
console.log('1. Auditing Hosting Configuration (vercel.json)...');
try {
  const vercelRaw = fs.readFileSync('vercel.json', 'utf8');
  const vercelConfig = JSON.parse(vercelRaw);
  assert(Array.isArray(vercelConfig.headers), 'vercel.json has headers array');
  
  const hasSecurityHeaders = vercelConfig.headers.some(h => 
    h.headers && h.headers.some(item => item.key === 'X-Content-Type-Options')
  );
  assert(hasSecurityHeaders, 'Security headers configured (X-Content-Type-Options, etc.)');

  const hasImageCache = vercelConfig.headers.some(h => 
    h.source && h.source.includes('Shama-Deluxe-Menu-Images')
  );
  assert(hasImageCache, 'Image immutable edge caching configured');
} catch (err) {
  assert(false, 'vercel.json is valid JSON', err.message);
}

// 2. Audit .vercelignore
console.log('\n2. Auditing Deployment Footprint (.vercelignore)...');
try {
  const vIgnore = fs.readFileSync('.vercelignore', 'utf8');
  assert(vIgnore.includes('left seprated videos'), '.vercelignore excludes left seprated videos');
  assert(vIgnore.includes('videos'), '.vercelignore excludes unused videos directory');
} catch (err) {
  assert(false, 'Reading .vercelignore', err.message);
}

// 3. Audit menu-app.js catalog data
console.log('\n3. Auditing Catalog Data & Dish Records (menu-app.js)...');
const menuAppRaw = fs.readFileSync('menu-app.js', 'utf8');

// Extract DISH_CATALOG via eval in sandbox
let dishCatalog = null;
try {
  const match = menuAppRaw.match(/const DISH_CATALOG = (\[[\s\S]*?\]);\r?\n\r?\n\/\/ Fallback SVG/);
  if (match) {
    dishCatalog = eval(match[1]);
  }
} catch (e) {
  console.error('Failed to parse DISH_CATALOG:', e);
}

assert(Array.isArray(dishCatalog), `DISH_CATALOG parsed successfully (${dishCatalog ? dishCatalog.length : 0} dishes)`);
assert(dishCatalog && dishCatalog.length === 143, 'Catalog has exactly 143 physical menu dishes');

if (dishCatalog) {
  // Check critical item 1: Fish Fry blank rate
  const fishFry = dishCatalog.find(d => d.id === 'fish-fry');
  assert(fishFry !== undefined, 'Fish Fry (only Winter) exists in catalog');
  if (fishFry) {
    const hasBlankPrice = fishFry.portions && fishFry.portions[0] && fishFry.portions[0].price === null;
    assert(hasBlankPrice, 'Fish Fry (only Winter) price is explicitly blank/null');
  }

  // Check critical item 2: Fish Fry Boneless is 600 per kg
  const fishFryBoneless = dishCatalog.find(d => d.id === 'fish-fry-boneless');
  assert(fishFryBoneless !== undefined, 'Fish Fry Boneless exists in catalog');
  if (fishFryBoneless) {
    const is600 = fishFryBoneless.portions && fishFryBoneless.portions[0] && fishFryBoneless.portions[0].price === 600;
    assert(is600, 'Fish Fry Boneless price is exactly 600 per kg');
  }

  // Check critical item 3: Chicken Mala Roasted has correct video
  const chickenMala = dishCatalog.find(d => d.id === 'chicken-malai-roasted');
  assert(chickenMala !== undefined, 'Chicken Mala Roasted exists in catalog');
  if (chickenMala) {
    assert(chickenMala.video === 'seperate videos/chicken mala roasted.mp4', 'Chicken Mala Roasted video points to seperate videos/chicken mala roasted.mp4');
    assert(fs.existsSync(chickenMala.video), 'Chicken Mala Roasted video file exists on disk');
  }

  // Check media integrity for all dishes
  console.log('\n4. Auditing Dish Media Assets (WebP & MP4)...');
  let missingPngs = 0;
  let missingWebps = 0;
  let missingVideos = 0;
  let oversizedWebps = 0;

  dishCatalog.forEach(dish => {
    if (dish.image) {
      if (!fs.existsSync(dish.image)) missingPngs++;
      const webpPath = dish.image.replace(/\.png$/i, '.webp');
      if (!fs.existsSync(webpPath)) {
        missingWebps++;
      } else {
        const sz = fs.statSync(webpPath).size;
        if (sz > 200 * 1024) oversizedWebps++; // Should be under 200KB
      }
    }
    if (dish.video) {
      if (!fs.existsSync(dish.video)) missingVideos++;
    }
  });

  assert(missingPngs === 0, `All dish master PNGs present (missing: ${missingPngs})`);
  assert(missingWebps === 0, `All 143 dish WebP files generated (missing: ${missingWebps})`);
  assert(oversizedWebps === 0, `All WebP images are lean (< 200 KB) (oversized: ${oversizedWebps})`);
  assert(missingVideos === 0, `All dish videos point to existing files (missing: ${missingVideos})`);
}

// 5. CSS Audit for Watermark Masking & Layout Performance
console.log('\n5. Auditing Stylesheet Performance & Watermark Masking (menu-styles.css)...');
const cssRaw = fs.readFileSync('menu-styles.css', 'utf8');

assert(cssRaw.includes('content-visibility: auto'), 'CSS containment enabled for dish cards (content-visibility: auto)');
assert(cssRaw.includes('.modal-video-replay-btn'), 'Modal video replay button styled');
assert(cssRaw.includes('margin-bottom: 58px'), 'Replay button elevated (margin-bottom: 58px) to cover Gemini watermark');
assert(cssRaw.includes('inset: -10px -14px') || cssRaw.includes('radial-gradient'), 'Watermark eclipse aura styled behind replay button');

console.log('\n====================================================');
console.log(`AUDIT RESULTS: ${passes} Passed, ${failures} Failed`);
console.log('====================================================');

process.exit(failures > 0 ? 1 : 0);
