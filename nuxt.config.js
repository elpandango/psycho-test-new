const cleanupIDs = require('svgo/plugins/cleanupIDs');
const removeAttrs = require('svgo/plugins/removeAttrs');
const removeDimensions = require('svgo/plugins/removeDimensions');
const removeViewBox = require('svgo/plugins/removeViewBox');
const inlineStyles = require('svgo/plugins/inlineStyles');
const inlineDefs = require('@nuxtjs/svg-sprite/lib/plugins/inlineDefs.js');

function defaultPlugins() {
  // Enable removeAttrs plugin
  // Remove id attribute to prevent conflict with our id
  removeAttrs.active = true;
  removeAttrs.params.attrs = 'svg:id';

  // Disable removeViewBox plugin and enable removeDimensions
  // Keep viewBox and remove width & height attribute
  removeViewBox.active = false;
  removeDimensions.active = true;

  // Make all styles inline
  // By definition, a defs sprite is not usable as a CSS sprite
  inlineStyles.active = true;
  inlineStyles.params.onlyMatchedOnce = false;

  return [
    removeDimensions,
    cleanupIDs,
    removeAttrs,
    removeViewBox,
    inlineStyles,
    {inlineDefs} // NOTE: it's important to pass custom plugins as object.
  ]
}

export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Психологические тесты',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap'
      }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://http.nuxtjs.org
    '@nuxt/http',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],
  svgSprite: {
    // manipulate module options
    input: '~/assets/svg/',
    elementClass: 'sprite-icon',
    spriteClassPrefix: '',
    svgoConfig() {
      return {
        plugins: defaultPlugins()
      }
    }
  },
  styleResources: {
    scss: [
      './assets/css/_variables.scss' // use underscore "_" & also file extension ".scss"
    ]
  },

  /*
  ** Server Middleware
  */
  serverMiddleware: {
    '/api': '~/api'
  },

  /*
  ** For deployment you might want to edit host and port
  */
  // server: {
  //  port: 8000, // default: 3000
  //  host: '0.0.0.0' // default: localhost
  // },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
