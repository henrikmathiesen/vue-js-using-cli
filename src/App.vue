<template>

  <div id="app">
    <HeaderComponent />
    <main>
      <router-view />
    </main>
  </div>

</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue'; // .vue is optional

export default {
  name: 'app',
  components: {
    HeaderComponent,
  }
}

</script>

<style>

html {
  box-sizing: border-box;
  height:100%;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background:linear-gradient(to bottom, #eee, #111);
  background-attachment:fixed;
  margin:0;
  padding:0;
  height:100%;
}

#app {
  font-family:Arial, sans-serif;
  background-color:white;
  max-width:1080px;
  margin-left:auto;
  margin-right:auto;
  padding: 60px;
  border-radius: 4px;
  min-height:100%;
}

h2 {
  margin-top:0;
}

</style>

<style scoped>

main {
  margin-top:40px;
}

/* 
  Apply styling to a child from a scoped parent
  - The first example will only effect GalleryComponent, allthough color is inherited by css rules
  - The second example uses the deep selector, we can then target selectors inside the GalleryComponent (it will also target its child components)
    - can also use /deep/ , if browsers or sass compilers have problems with >>>

  .GalleryComponent {
    color: pink
  }

  .GalleryComponent >>> h3 {
    color: pink
  }

*/

</style>
