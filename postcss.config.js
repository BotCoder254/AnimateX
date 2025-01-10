module.exports = (ctx) => ({
    plugins: [
        require('autoprefixer'),
        ctx.env === 'production' ? require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
                normalizeWhitespace: true,
                minifySelectors: true,
                minifyParams: true,
                reduceIdents: false,
                reduceTransforms: false
            }]
        }) : false
    ].filter(Boolean)
}); 