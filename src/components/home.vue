<template lang="html">
  <section>
    {{ mapsCount }} maps: {{ mapsListOfNamesAsString }}
  </section>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'home',
    computed: {
      ...mapState([
        'maps'
      ]),
      ...mapGetters([
        'mapsCount',
        'mapsListOfNamesAsString'
      ])
    },
    mounted: function () {
      this.$store.dispatch('GET_MAP_LIST')
    }
  }
</script>

<style module scoped>
</style>
