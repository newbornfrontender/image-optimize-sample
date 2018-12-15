const imagemin = require('imagemin');

// -----------------------------------------------------------------------------

// const imageminMozjpeg = require('imagemin-mozjpeg');

// imagemin(['from/*.jpg'], 'to', {
//   plugins: [imageminMozjpeg({ quality: '40' })],
// });

// -----------------------------------------------------------------------------

const mozjpeg = require('./plugins/mozjpeg');

imagemin(['from/*.jpg'], 'to', {
  plugins: [mozjpeg({ quality: '40' })],
});

// -----------------------------------------------------------------------------
