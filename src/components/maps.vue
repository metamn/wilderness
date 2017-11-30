<template lang="html">
  <section>
    <h3>Maps</h3>
    <router-link
      v-for="map in maps.maps"
      :key="map.id"
      :to="{
        name: 'map',
        params: {
          slug: map.slug
        }
      }">{{ map.name }}</router-link>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'maps',
    computed: {
      ...mapState([
        'maps'
      ])
    },
    mounted: function () {
      this.$store.dispatch('GET_MAP_LIST')
    }
  }
</script>

<style module scoped>
</style>
