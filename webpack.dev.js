const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: {
        main: './kcs.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    target: 'node',  // Set the target to Node.js
    externals: [nodeExternals()],  // Exclude node_modules from bundling
};
