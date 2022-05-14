<template>
  <div class="home">
    <h1>Hero Search</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useHeroStore } from '../stores/heroStore';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const store = useHeroStore();
    const { superHeros } = storeToRefs(store);
    const { getHeroList } = store;

    return {
      superHeros,
      getHeroList,
    };
  },
  methods: {
  },
  mounted() {
    this.getHeroList();
  },
});
</script>
