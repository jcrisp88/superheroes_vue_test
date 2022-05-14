<template>
  <div class="home">
    <h1 class="page-banner">Hero Search</h1>
    <div class="hero-search">
      <div class="container">
        <div class="search-wrapper">
          <form class="search-box" @submit="submitSearch">
            <label for="search">
              <input
              id="search"
              v-model="searchValue" type="text" class="search-input" placeholder="Search.."
                autocomplete="off" />
            </label>
            <button class="search-button" @click="submitSearch">
              <img srcset="https://img.icons8.com/material-outlined/344/search--v1.png" alt="icon" loading="lazy"
                height="20">
            </button>
          </form>
          <transition :name="showOptions ? '' : 'slide-fade-out'">
            <div class="suggested-options" v-show="showOptions">
              <ul>
                <li v-for="(item, index) in suggestedResults" :key="index" class="suggested-item"
                  @click="setHeroNameSearch(index)"
                  @keydown.space="setHeroNameSearch(index)">
                  {{ item }}
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="container">
      <HeroCard
        v-if="heroIsChosen"
        :id="chosenOption.id"
        :name="chosenOption.name"
        :biography="chosenOption.biography"
        :image="chosenOption.image.url"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useHeroStore } from '../stores/heroStore';

import HeroCard from '../components/heroCard.vue'; // @ is an alias to /src

function partialMatch(arr: [], text: string) {
  return arr.filter((str: any) => str
    .toLowerCase()
    .startsWith(text.toLowerCase().slice(0, Math.max(str.length - 1, 1))));
}
interface Hero {
  id:number,
  name:string,
  powerstats:object,
  biography:object,
  appearance:object,
  work:object,
  connections:object,
  image:object,
}

export default defineComponent({
  name: 'HomeView',
  setup() {
    const store = useHeroStore();
    const { superHeros, allHeroNames } = storeToRefs(store);
    const { getHeroList, getHeroDetailsByName } = store;

    return {
      superHeros,
      allHeroNames,
      getHeroList,
      getHeroDetailsByName,
    };
  },
  components: {
    HeroCard,
  },
  data() {
    return {
      searchValue: '' as string,
      chosenOption: {} as Hero,
      heroIsChosen: false as boolean,
    };
  },
  computed: {
    showOptions(): boolean {
      return this.allHeroNames.length !== this.suggestedResults.length;
    },
    suggestedResults(): any {
      return partialMatch(this.allHeroNames, this.searchValue);
    },
  },
  methods: {
    reset() {
      this.searchValue = '';
    },
    async submitSearch(event: any) {
      event.preventDefault();
      this.setHeroNameSearch(0);
    },
    async setHeroNameSearch(index:number) {
      this.chosenOption = await this.getHeroDetailsByName(this.suggestedResults[index]);
      this.reset();
      this.heroIsChosen = true;
    },
  },
  mounted() {
    this.getHeroList();
  },
});
</script>

<style lang="scss">
.home{
  margin-bottom: 5vh;
}

.page-banner {
  background: burlywood;
  padding: 10vh 5vw;
}

.search-wrapper{
  width: 100%;
  position: relative;
  margin-top: -24px;
}

.search-box {
  width: 100%;
  position: relative;
  display: flex;
  background: #fff;
  z-index:10;
  border-radius: 10px;

  label {
    width: 100%;
    padding: 10px;
    border: 4px solid #111d5e;
    border-radius: 10px 0 0 10px;
    border-right: none;
    font-size: 20px;
    color: tomato;
    background: none;
  }

  .search-input {
    border: 0;
    outline: none;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .search-button {
    text-align: center;
    height: 52px;
    width: 40px;
    outline: none;
    cursor: pointer;
    border: 4px solid #111d5e;
    border-radius: 0 10px 10px 0;
    border-left: none;
    background: none;
    font-size: 20px;
    border-left: 4px solid #111d5e;

    img {
      vertical-align: middle;
    }
  }
}

.suggested-options {
  border: 4px solid #111d5e;
  width: 100%;
  max-height: 350px;
  overflow: auto;
  z-index:9;
  position: absolute;
  right: 0;
  box-sizing: border-box;
  background:#fff;

  ul {
    margin: 0;
    padding: 1em;
  }

  li {
    display: block;
    line-height: 30px;
    padding: 4px 8px;

    &:not(.suggested-options:hover):nth-child(1) {
      background: lemonchiffon;
    }
    &:hover {
      background: lemonchiffon;
      cursor: pointer;
    }
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding: 0 5vw;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .container {
    width: 500px;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .container {
    width: 700px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .container {
    width: 900px;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .container {
    width: 1000px;
  }
}

.slide-fade-out-enter-active {
  transition: all .1s ease;
}

.slide-fade-out-leave-active {
  transition: all .1s ease;
}

.slide-fade-out-enter {
  transform: translateY(50px);
  opacity: 0;
}

.slide-fade-out-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
