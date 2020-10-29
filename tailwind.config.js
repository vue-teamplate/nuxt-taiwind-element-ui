module.exports = {
  important: true,
  config: {
    purge: {
      enabled: process.env.NODE_ENV !== 'development',
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
        // TypeScript
        'plugins/**/*.ts',
        'nuxt.config.ts',
      ],
    },
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
      defaultLineHeights: true,
      standardFontWeights: true,
    },
    theme: {
      // element break point
      screens: {
        xs: { max: '768px' },
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1920px',
      },
    },
  },
}
