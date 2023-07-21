import Cookies from 'js-cookie';
import {defineNuxtPlugin} from "nuxt/app";
import dev from '@/core/utils/functions/dev';
import { useLocaleStore } from '@/store/locale';

export default defineNuxtPlugin(async (nuxtApp) => {
  const localeStore = useLocaleStore();

  // set default locale from store (Cookie)
  if (localeStore.locale) {
    await nuxtApp.$i18n.setLocale(localeStore.locale);
  }

  nuxtApp.$i18n.onBeforeLanguageSwitch = (oldLocale, newLocale) => {
    dev.log(oldLocale, newLocale);
  };

  nuxtApp.$i18n.onLanguageSwitched = (_, newLocale) => {
    localeStore.setLocale(newLocale);
    Cookies.set('lang', newLocale);
  };
});
