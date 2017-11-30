<template lang="html">
  <section>
    <h3 v-if="!mapEmpty">{{ getMap.name }}</h3>
    <div v-else>
      No map found.
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'map',
    computed: {
      ...mapGetters([
        'getMapBySlug',
        'mapEmpty',
        'getMap'
      ])
    },
    mounted: function () {
      const slug = this.$route.params.slug
      const mapBySlug = this.$store.getters.getMapBySlug(slug)
      if (mapBySlug) this.$store.dispatch('GET_MAP', { id: mapBySlug.id })
    }
  }
</script>

<style module scoped>
</style>
