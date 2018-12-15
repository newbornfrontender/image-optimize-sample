const sharp = require('sharp');

// -----------------------------------------------------------------------------

// const glob = require('glob');

// glob('from/*.jpg', (err, files) =>
//   files.map((file) =>
//     sharp(file)
//       .jpeg({ quality: 40 })
//       .resize(320, 240)
//       .toFile(file.replace('from', 'to').replace('jpg', 'min.jpg')),
//   ),
// );

// -----------------------------------------------------------------------------

const name = ['narrow', 'wide']
const width = [320, 1280]
const height = [240, 720]

for (let i = 0; i < 2; i += 1) {
  sharp('from/sample.png')
    .resize(width[i], height[i])
    .toFile(`to/sample-${name[i]}.png`)
}

// -----------------------------------------------------------------------------
