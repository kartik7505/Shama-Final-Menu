const QRCode = require('qrcode');
const path = require('path');

const URL = 'https://shamadeluxemenu.vercel.app/';
const OUT = 'h:\\Final Shama Delux\\';

// 1) Plain QR — large 800x800
QRCode.toFile(
  path.join(OUT, 'QR-Plain-ShamaDeluxe.png'),
  URL,
  {
    errorCorrectionLevel: 'H',
    type: 'png',
    width: 800,
    margin: 3,
    color: { dark: '#1a1008', light: '#ffffff' }
  },
  err => {
    if (err) console.error('Plain QR error:', err);
    else console.log('✅ Plain QR saved: QR-Plain-ShamaDeluxe.png');
  }
);

// 2) Poster QR — medium 500x500 (embedded in poster)
QRCode.toFile(
  path.join(OUT, 'QR-Poster-Inner-ShamaDeluxe.png'),
  URL,
  {
    errorCorrectionLevel: 'H',
    type: 'png',
    width: 500,
    margin: 2,
    color: { dark: '#1a1008', light: '#ffffff' }
  },
  err => {
    if (err) console.error('Poster QR error:', err);
    else console.log('✅ Poster QR saved: QR-Poster-Inner-ShamaDeluxe.png');
  }
);
