<template lang="html">
  <section>
    <h3>Home</h3>
    <router-link :to="{ name: 'maps', params: {} }">Maps</router-link>
  </section>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style module scoped>
</style>
