const path = require('path');

module.exports = {
  entry: './src/prototype_demo.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
