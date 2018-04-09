const path = require('path');

module.exports = {
    entry: './app.js',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    output: {
        mode: 'development'
    },
};