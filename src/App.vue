<template>

  <div id="app">
    <HeaderComponent />
    <main>
      <HomeComponent />
    </main>
  </div>

</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue';
import HomeComponent from './components/HomeComponent.vue';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    HomeComponent
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

main {
  margin-top:40px;
}

</style>
