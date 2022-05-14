import { defineStore } from 'pinia';
import axios from 'axios';
import { APIS, clients } from '../core/client';
import helper from '../core/helper';

const client = clients[APIS.SUPER_HERO];
// eslint-disable-next-line import/prefer-default-export
export const useHeroStore = defineStore({
  id: 'heroStore',
  state: () => ({
    superHeros: [] as any,
    favourites: [] as any,
  }),
  getters: {
    allHeroNames(state) {
      return state.superHeros.map((hero:any) => hero.name);
    },
  },
  actions: {
    getHeroList() {
      axios
        .get('/resources/heros.txt')
        .then((response) => {
          this.superHeros = helper.convertListToJson(response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    getHeroDetailsByName(name:string): any {
      return client.get(`/search/${name}`)
        .then((response:any) => response.data.results[0])
        .catch((error) => {
          throw error;
        });
    },
    getHeroDetailsById(id:number): any {
      return client.get(`/${id}`)
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
    },
    toggleFavouriteHero(hero:any) {
      const heroIndex = this.favourites
        .findIndex((item:any) => item.id === hero.id);
      if (heroIndex !== -1) {
        this.favourites
          .splice(heroIndex, 1);
        return;
      }
      this.favourites.push(hero);
    },
  },
});
