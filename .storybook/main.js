module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config) => {
        // config.resolve.alias = {
        //     ...config.resolve.alias,
        //     '~/assets': path.resolve(__dirname, '../src/assets'),
        //     '~/const': path.resolve(__dirname, '../src/const'),
        //     '~/components': path.resolve(__dirname, '../src/components'),
        //     '~/data': path.resolve(__dirname, '../data'),
        //     '~/hooks': path.resolve(__dirname, '../src/hooks'),
        //     '~/mocks': path.resolve(__dirname, '../__mocks__'),
        //     '~/styles': path.resolve(__dirname, '../src/css'),
        //     '~/types': path.resolve(__dirname, '../src/types'),
        //     '~/utils': path.resolve(__dirname, '../src/utils'),
        // }

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        })

        config.resolve.extensions.push(
            '.js',
            '.jsx',
            'ts',
            'tsx',
            '.css',
            '.scss'
        )

        return config
    },
}
