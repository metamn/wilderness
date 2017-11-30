<template lang="html">
  <section>
    <h3>Maps</h3>
    <router-link
      v-if="!mapsEmpty"
      v-for="map in maps.maps"
      :key="map.id"
      :to="{
        name: 'map',
        params: {
          slug: map.slug
        }
      }">{{ map.name }}</router-link>
    <div v-else>
      There are no maps yet.
    </div>
  </section>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'maps',
    computed: {
      ...mapState([
        'maps'
      ]),
      ...mapGetters([
        'mapsEmpty'
      ])
    },
    mounted: function () {
      this.$store.dispatch('GET_MAPS')
    }
  }
</script>

<style module scoped>
</style>
