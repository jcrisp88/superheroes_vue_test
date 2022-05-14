<template>
<div class="page">
  <nav>
    <router-link :to="{ name: 'home', }">Home</router-link> |
    <router-link :to="{ name: 'superhero', }">SuperHero</router-link>
  </nav>
  <router-view/>
</div>
</template>

<style lang="scss">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.page{
  margin-bottom: 5vh;
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding: 0 5vw;
}

nav{
  position: absolute;
  right: 0;
  margin:30px;

  a {
    font-size: 1.2em;
    font-weight: 700;
    color: #000;
    text-decoration: none;
  }
  .router-link-active{
    color: firebrick;
    text-decoration: underline;
  }
}
</style>
