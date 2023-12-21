const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
    app: './js/share.js',
    app: './js/start.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
    filename: './js/share.js',
    filename: './js/start.js'
  },
};
