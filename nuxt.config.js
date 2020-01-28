import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],

  router: {
    middleware: ["clearValidationErrors"]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/mixins/user.js',
    './plugins/axios.js',
    './plugins/mixins/validation.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "http://laranuxt-api.test/api"
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'meta.token' },
          logout: { url: 'logout', method: 'post' },
          user: { url: 'user', method: 'get', propertyName: 'data' }
        }
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#7D45C2',
          secondary: '#E6D1FF',
          accent: '#809CDB',
          softAccent: '#E5E8FA',
          softGrey: '#E5E8FA',
          medGrey: '#696969',
          darkest: '#333333',
          white: '#ffffff',
        },
        dark: {
          primary: '#7D45C2',
          secondary: '#E6D1FF',
          accent: '#809CDB',
          softAccent: '#E5E8FA',
          softGrey: '#E5E8FA',
          medGrey: '#696969',
          darkest: '#333333',
          white: '#ffffff',
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
        },
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
