<template lang="html">
  <section>
    <h3>{{ map.name }}</h3>
  </section>
</template>

<script>
  export default {
    name: 'map',
    data: function () {
      return {
        map: {}
      }
    },
    mounted: function () {
      const slug = this.$route.params.slug
      console.log('slug1:' + slug)
      this.map = this.$store.dispatch('GET_MAP_BY_SLUG', { slug: slug })
      console.log('map:' + this.map)
    }
  }
</script>

<style module scoped>
</style>
