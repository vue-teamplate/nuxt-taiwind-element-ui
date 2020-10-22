import path from 'path'
import consola from 'consola'
import {
  ACCOUNT_ENDPOINT,
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
} from './constants/endpoint'

let ENV_FILE
if (process.env.NODE_ENV === 'production') {
  ENV_FILE = '.env.prod'
  consola.warn('Build for production')
} else if (process.env.NODE_ENV === 'staging') {
  ENV_FILE = '.env.staging'
  consola.warn('Build for staging')
} else {
  ENV_FILE = '.env'
  consola.warn('Build for development')
}

const ENV_PATH = path.resolve(__dirname, './' + ENV_FILE)

require('dotenv').config({ path: ENV_PATH })

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-element-taiwind',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/scss/global.scss'],

  loading: { color: '#3182ce' },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/logger',
    '@/plugins/scrollbar',
    '@/plugins/dayjs',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/router-extras',
    '@nuxtjs/svg-sprite',
  ],

  svgSprite: {
    // manipulate module options
    input: '~/assets/icons/svg',
    output: '~/assets/sprite/gen',
    elementClass: 'svg-icon',
  },

  tailwindcss: {
    important: true,
    config: {
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
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_ENDPOINT,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_ENDPOINT,
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    [
      '@nuxtjs/dotenv',
      {
        path: path.resolve(__dirname, './'),
        filename: ENV_FILE,
      },
    ],
  ],

  auth: {
    resetOnError: true,
    localStorage: false,
    cookie: {
      options: {
        expires: 30,
      },
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: process.env.API_ENDPOINT + LOGIN_ENDPOINT,
            method: 'post',
            propertyName: 'access_token',
          },
          user: {
            url: process.env.API_ENDPOINT + ACCOUNT_ENDPOINT,
            method: 'get',
            propertyName: 'user',
          },
          logout: {
            url: process.env.API_ENDPOINT + LOGOUT_ENDPOINT,
            method: 'post',
          },
        },
      },
    },
    plugins: ['@/plugins/mixin.global'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
