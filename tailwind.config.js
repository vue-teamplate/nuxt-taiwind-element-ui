console.log('purge enabled', process.env.NODE_ENV !== 'development')

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
        xxs: { max: '576px' },
        xs: '576px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1920px',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': ['4rem', '1.2'],
        '7xl': ['5rem', '1.5'],
      },
    },
  },
}
