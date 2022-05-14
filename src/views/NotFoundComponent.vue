<template>
      <div >
        <h1 >
          Oops
        </h1>
        <p >
          The page you are looking for does not exist.
        </p>
        <button
          @click="goBack"
        >
          <i class="fas fa-arrow-left mr-2" /> Go back
        </button>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFoundComponent',
  methods: {
    goBack() {
      window.history.back();
    },
  },
});
</script>
