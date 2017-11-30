<template lang="html">
  <section>
    {{ mapsCount }} maps: {{ mapsListOfNames }}
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
        'mapsListOfNames'
      ])
    },
    mounted: function () {
      this.$store.dispatch('GET_MAP_LIST')
    }
  }
</script>

<style module scoped>
</style>
