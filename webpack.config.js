const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.css$/i,

                // module loaders can be chained. A chain is executed in reverse order
                // this order of loaders should be mantained
                use: ['style-loader', 'css-loader'],
            },

            // new rule for images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};