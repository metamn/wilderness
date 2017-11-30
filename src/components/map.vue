<template lang="html">
  <section v-if="!mapEmpty">
    <h3>{{ getMap.name }}</h3>
    <div class="">
      {{ getMap.description }}
    </div>
  </section>
  <div v-else>
    No map found
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'map',
    computed: {
      slug () {
        // TODO: Check is route params has to be sanitized or not
        return this.$route.params.slug
      },
      ...mapGetters([
        'mapEmpty',
        'getMap'
      ])
    },
    mounted: function () {
      const mapBySlug = this.$store.getters.getMapBySlug(this.slug)
      if (mapBySlug) {
        this.$store.dispatch('GET_MAP', { id: mapBySlug.id })
      } else {
        // TODO: Where to mitigate bad function returns, like mapBySlug not returning an id field ????
        // We need to get maps first to get the ID of this slug
      }
    }
  }
</script>

<style module scoped>
</style>
