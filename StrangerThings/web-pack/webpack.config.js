const path = require('path');

module.exports = {
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname,'/web-pack'),
        filename: 'bundle.js'
    },
    mode: 'development'
}