<template>

<header>
    <h1><span>:::</span><span> Vue.js with the CLI </span><span>:::</span></h1>
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
