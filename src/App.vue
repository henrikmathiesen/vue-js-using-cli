<template>
  <div id="app">
    <header>
      <h1>
        <span>|||</span><span> Robot builder </span><span>|||</span>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Foo</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <HomePage />
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'app',
  components: {
    HomePage
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

header::after {
  content: "";
  clear: both;
  display: table;
}

h1 {
  margin:0;
  text-transform:uppercase;
  float:left;
}

h1 span:first-child,
h1 span:last-child {
  position:relative;
  top: -3px;
}

main {
  margin-top:40px;
}

nav {
  float:right;
  margin-top:10px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 15px;
}


</style>
