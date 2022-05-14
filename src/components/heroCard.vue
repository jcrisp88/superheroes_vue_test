<template>
    <div class="hero-card">
      <div class="image">
        <img :src="image" :alt="`${name}-profile`"/>
      </div>
      <div class="text">
          <h2>{{name}}</h2>
          <dl v-for="(item, index) in biography" :key="index" >
              <dt>{{formatTitle(index)}}</dt>
              <dd>{{item}}</dd>
          </dl>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroCard',
  props: {
    id: Number,
    name: String,
    biography: Object,
    image: String,
  },
  methods: {
    formatTitle(index:string) {
      const title = index.replace('-', ' ');
      return title.charAt(0).toUpperCase() + title.slice(1);
    },
  },
});
</script>
<style lang="scss">
.hero-card {
  margin-top:30px;
  display: flex;
  width: 100%;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;

  h2{
    margin-bottom: 2vh;
  }

  dl {
    display: flex;
    flex-wrap: wrap;
  }
  dt {
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
    padding: 3vw;
  }
}
</style>
