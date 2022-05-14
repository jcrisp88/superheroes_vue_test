<template>
  <div class="home">
    <h1>Hero Search</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { APIS, clients } from '../core/client';

const client = clients[APIS.SUPER_HERO];

export default defineComponent({
  name: 'HomeView',
  components: {
  },
  methods: {
    getHero(id:number) {
      return client.get(`/${id}`)
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
    },
  },
  mounted() {
    this.getHero(1);
  },
});
</script>
