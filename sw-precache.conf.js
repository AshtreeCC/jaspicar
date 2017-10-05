module.exports = {
    navigateFallback: '/index.html',
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.css',
        'dist/assets/images/*',
        'dist/assets/touch/*'
    ],
    maximumFileSizeToCacheInBytes: 10097152,
    runtimeCaching: [{
        urlPattern: /\/__\//,
        handler: 'networkOnly'
    }, {
        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
        handler: 'networkFirst',
        options: {
            cache: {
                maxEntries: 10,
                name: 'google-apis'
            }
        }
    }]
};
