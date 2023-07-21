import webpack from 'webpack';
import { defineNuxtConfig } from "nuxt/config";

// require('dotenv').config();

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'Nuxt V3 migration',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/icons/style.css' },
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    },
  },

  dir: {
    layouts: 'core/layouts',
    middleware: 'core/middleware',
  },

  layoutTransition: {
    // Is "layout" by default
    name: 'fade',
    mode: 'out-in',
  },
  pageTransition: {
    // Is "page" by default
    name: 'slide-fade',
    mode: 'out-in',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/core/styles/css/all.css', '@/core/styles/scss/all.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '@/core/plugins/v-sanitize' },
    // { src: '@/core/plugins/moment' },
    { src: '@/core/plugins/i18n' },
    // { src: '@/core/utils' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    '@/components/',
    { path: '@/components/base/' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://windicss.org/guide/
    'nuxt-windicss',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    ['@nuxtjs/eslint-module', { fix: true }],
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/core/styles/scss/_colors.scss"; @import "@/core/styles/scss/_mixins.scss"; @import "@/core/styles/scss/_variables.scss";'
        }
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@element-plus/nuxt',
  ],

  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.js',
    vueI18nLoader: true,
  },

  watch: [
    'locales',
    'app.html',
    '*.config.js',
    '*.config.ts',
    '.env',
    '.nuxtignore',
  ],

  watchers: {
    webpack: {
      ignored: /node_modules/,
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  terser: {
    // https://github.com/webpack-contrib/terser-webpack-plugin#parallel
    parallel: true,
    cache: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-plus/],
    extractCSS: {
      ignoreOrder: true,
    },
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ })
    ],
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
      ],
    },
    loaders: {
      cssModules: {
        modules: {
          localIdentName:
            process.env.NODE_ENV === 'development'
              ? '[local]_[hash:base64:5]'
              : '[hash:base64:8]',
        },
      },
    },
    extend(config, { isDev, isClient }) {
      if (isDev) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map';
      }
      // Set up all the aliases we use in our app.
      Object.assign(config.resolve.alias, require('./aliases.config').webpack);
    },
  },

  /*
   ** Server Middleware
   */
  serverMiddleware: [{ path: '/api/v1', handler: '@/server' }],
});
