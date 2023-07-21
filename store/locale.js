import { defineStore } from 'pinia';

const cookieParser = process.server ? require('cookieparser') : undefined;

export const useLocaleStore = defineStore("localeStore", {
  state: () => ({ locale: 'en' }),
  getters: {
    getLocale: state => state.locale || 'en',
  },
  actions: {
    setLocale(locale) {
      this.locale = locale;
    },
    nuxtServerInit({ commit }, { req }) {
      const cookie = cookieParser.parse(req?.headers?.cookie || '');

      if (cookie) {
        commit('SET_LOCALE', cookie.lang || 'en');
      }

      commit('auth/SET_AUTH', {
        user: {
          email: 'contact@thecodeorigin.com',
          fullName: 'thecodeorigin',
          avatar: 'https://avatars.githubusercontent.com/u/60340907?s=200&v=4',
        },
        token: 'ultraSecretToken',
      });
    },
  }
});
