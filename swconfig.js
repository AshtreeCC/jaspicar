module.exports = {
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [
        /^(?!\/__)/
    ],
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.css',
        'dist/assets/images/*',
        'dist/assets/touch/*'
    ],
    runtimeCaching: [{
        urlPattern: /\/__\//,
        handler: 'networkOnly'
    }]
};
