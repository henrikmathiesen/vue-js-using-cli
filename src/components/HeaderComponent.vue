<template>

<header>
    <h1><span>:::</span><span> Vue.js with the CLI </span><span>:::</span></h1>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'Home' }">Home</router-link>
                <!-- Can reference the name of the route like this, or use the syntax bellow -->
                <!-- See GalleryComponent for navigating from code -->
            </li>
            <li>
                <router-link to="/gallery">Gallery</router-link>
            </li>
            <li>
                <router-link to="/communication">Communication</router-link>
            </li>
            <li>
                <router-link to="/directives-and-filters">Directives and Filters</router-link>
            </li>
        </ul>
    </nav>

    <!--
      Active link get CSS classes applied by Vue:
      'router-link-exact-active' and 'router-link-active'

      Can use <router-link active-class="foo"> to give active class a custom name
      Is there a matching for exact-active? If not, we can use the exact attribute
      on <router-link> to make the active class exact match.

      Apply CSS class to parent element:
      https://router.vuejs.org/api/#applying-active-class-to-outer-element
    -->

</header>

</template>

<script>

export default {
  name: 'HeaderComponent'
}

</script>

<style scoped>

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

nav {
  float:right;
  margin-top:10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-right: 15px;
}

</style>
