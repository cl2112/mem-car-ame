const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./public/js/src/index.js",
    output:{
        path: path.resolve(__dirname, './public/js/dist'),
        filename: "main.js"
    } 
}