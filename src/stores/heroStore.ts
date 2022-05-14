import { defineStore } from 'pinia';
import axios from 'axios';
import { APIS, clients } from '../core/client';
import helper from '../core/helper';

// eslint-disable-next-line import/prefer-default-export
export const useHeroStore = defineStore({
  id: 'heroStore',
  state: () => ({
    superHeros: [] as any,
  }),
  getters: {
  },
  actions: {
    getHeroList() {
      this.superHeros = axios
        .get('/resources/heros.txt')
        .then((response) => helper.convertListToJson(response.data))
        .catch((error) => {
          throw error;
        });
    },
  },
});
