<template>
    <div>
        <h2>name</h2>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroCard',
  props: {
    id: Number,
    name: String,
  },
});
</script>
