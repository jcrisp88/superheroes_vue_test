<template>
  <div>
    <h1 class="page-banner">Favourite Hero</h1>
    <div class="container">
      <HeroCard v-for="(item, index) in favourites" :key="index"
        :id="item.id"
        :name="item.name"
        :biography="item.biography"
        :image="item.image.url"
        :heroObject="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useHeroStore } from '../stores/heroStore';

import HeroCard from '../components/heroCard.vue';

export default defineComponent({
  name: 'FavouritesView',
  setup() {
    const store = useHeroStore();
    const { favourites } = storeToRefs(store);

    return {
      favourites,
    };
  },
  components: {
    HeroCard,
  },
  data() {
    return {
    };
  },
  methods: {
  },
});
</script>

<style lang="scss">
.page-banner {
  background: burlywood;
  padding: 10vh 5vw;
}

</style>
