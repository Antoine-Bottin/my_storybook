const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
    },

    target: 'web',
    devServer: {
        port: '3080',
        static: ['./public'],
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
}
