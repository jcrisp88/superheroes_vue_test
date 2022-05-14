<template>
  <div class="hero-card">
    <div class="image">
      <img :src="image" :alt="`${name}-profile`"/>
    </div>
    <div class="text">
        <h2>{{name}}</h2>
        <div>
          <dl v-for="(item, index) in biography" :key="index" >
              <dt>{{formatTitle(index)}}</dt>
              <dd>{{item}}</dd>
          </dl>
        </div>
        <button class="button">Show more</button>
    </div>
    <span class="favourite">
    <img :src="isFavourite?'https://img.icons8.com/ios-glyphs/452/like--v1.png'
    :'https://img.icons8.com/material-outlined/344/like--v1.png'"
      alt="icon"
      height="24"
      @click="toggleFavourite"
      @keydown.space="toggleFavourite"
      ></span>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRaw } from 'vue';
import { storeToRefs } from 'pinia';
import { useHeroStore } from '../stores/heroStore';

export default defineComponent({
  name: 'HeroCard',
  setup() {
    const store = useHeroStore();
    const { favourites } = storeToRefs(store);
    const { toggleFavouriteHero } = store;

    return {
      favourites,
      toggleFavouriteHero,
    };
  },
  props: {
    id: Number,
    name: String,
    biography: Object,
    image: String,
    heroObject: Object,
  },
  data() {
    return {
      isFavourite: false as boolean,
    };
  },
  methods: {
    formatTitle(index:string) {
      const title = index.replace('-', ' ');
      return title.charAt(0).toUpperCase() + title.slice(1);
    },
    toggleFavourite() {
      this.toggleFavouriteHero(this.heroObject);
      this.setFavourite();
    },
    setFavourite() {
      this.isFavourite = (toRaw(this.favourites)
        .findIndex((item:any) => item.id === this.id) !== -1);
    },
  },
  mounted() {
    this.setFavourite();
  },
});
</script>
<style lang="scss">
.hero-card {
  margin-top:30px;
  display: flex;
  width: 100%;
  min-height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
  position: relative;

  h2{
  }

  dl {
    display: flex;
    flex-wrap: wrap;
  }
  dt {
    font-weight: 700;
    flex: 1 0 0%;
  }
  dd {
    margin-left: auto;
    flex: 2 0 0%;
  }

  & > .image {
    flex: 1 0 0%;
    position: relative;
    overflow: hidden;

    & img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px 0 0 10px;
      transition: all .5s ease;
    }
  }
  &:hover img {
    transform: scale(1.25);
  }

  & > .text {
    flex: 2 0 0%;
    padding: 4vh 3vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & > *{
      margin: 2vh 0;
    }
  }
  .favourite{
    margin: 50px;
    position: absolute;
    top: 0;
    right: 0;

    & img{
      height: 24px;
      cursor: pointer;
    }
  }
  .button {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 20px;
    text-align: center;
    font-weight: 700;
    background-color: #fa8176;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    color: white;
    border: 0;
    cursor: pointer;
  }
}
</style>
