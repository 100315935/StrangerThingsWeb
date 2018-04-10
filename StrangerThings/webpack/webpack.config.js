const path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: {
        app: ['../app/app.js']
    },
    output: {
        path: '../app/',
        filename: 'bundle.js'
    },
    mode: 'development',
}