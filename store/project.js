import { defineStore } from 'pinia';
import { useFetch } from "nuxt/app";
import { PROJECT_API_URL } from '@/constants/project';

export const useProjectStore = defineStore('project', {
  state: () => ({ count: 0, list: [] }),
  getters: {},
  actions: {
    async getMany() {
      const data = await fetch(PROJECT_API_URL.GET_MANY(), {}).then(response => response.json());
      this.count = data?.length || 0;
      this.list = data;
    },
    async getOne({ id }) {
      const { data } = await useFetch(PROJECT_API_URL.GET_ONE(id));

      return data;
    },
    async createOne({ body }) {
      const { data } = await useFetch(PROJECT_API_URL.CREATE_ONE(), { body });

      return data;
    },
    async updateOne(_, { body, id }) {
      const { data } = await useFetch(PROJECT_API_URL.UPDATE_ONE(id), { body });

      return data;
    },
    async deleteOne({ id }) {
      const { data } = await useFetch(PROJECT_API_URL.DELETE_ONE(id));

      return data;
    },
  },
});
