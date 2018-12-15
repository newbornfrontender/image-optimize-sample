const glob = require('glob');
const sharp = require('sharp');

glob('from/*.jpg', (err, files) =>
  files.map((file) =>
    sharp(file)
      .jpeg({ quality: 40 })
      .resize(320, 240)
      .toFile(file.replace('from', 'to').replace('jpg', 'min.jpg')),
  ),
);
