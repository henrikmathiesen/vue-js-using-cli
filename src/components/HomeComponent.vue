<template>

  <div class="HomePage">
    <h2>An image here for now</h2>
    <img src="../assets/logo.png" />
    <p>
      Prefer the assets folder, instead of public folder for static files.
      Can also place images in a feature folder in src (it doesnt has to be assets folder).
    </p>
  </div>
  
</template>

<script>

export default {
  name: 'HomeComponent'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2 {
  margin-top:0;
}

img {
  max-width: 100%;
  height: auto;
}

</style>
