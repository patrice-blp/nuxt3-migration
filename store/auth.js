import { defineStore } from 'pinia';
import Cookies from "js-cookie";
import { useFetch } from "nuxt/app";
import {AUTH_API_URL} from "@/constants/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({ data: null }),
  getters: {
    currentUser: (state) => state.data?.user,
    token: (state) => state.data?.token,
  },
  actions: {
    async register(context, { form }) {
      const { data } = await useFetch(AUTH_API_URL.REGISTER(), { method: "POST", body: form });
      context.commit('SET_AUTH', data);
      Cookies.set('auth', data);

      return data;
    },
    async login(context, { form }) {
      const { data } = await useFetch(AUTH_API_URL.LOGIN(), { body: form });
      context.commit('SET_AUTH', data);
      Cookies.set('auth', data);

      return data;
    },
    getAuth() {
      this.data = {
        ...this.data,
        user: {
          id: 1,
          firstName: "Terry",
          lastName: "Medhurst",
          avatar: "https://robohash.org/doloremquesintcorrupti.png",
        }
      };
    },
  }
});
