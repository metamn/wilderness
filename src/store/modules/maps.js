import api from './../../api'

// Data
const state = {
  /**
   * An array of Map objects
   * @type {Array}
   *
   */
  maps: [
    'No maps yet'
  ],
  /**
   * A single Map object
   * @type {Object}
   *
   * * A Map object is defined in the api.parseMap()
   */
  map: {
    'name': 'Unknown map'
  }
}

// Computed data
const getters = {
  getMaps () {
    return state.maps
  },
  getMap () {
    return state.map
  },
  getMapBySlug: state => (slug) => {
    return state.maps.find(item => item.slug === slug)
  },
  mapEmpty () {
    return (state.map.name === 'Unknown map')
  },
  mapsEmpty () {
    return (state.maps[0] === 'No maps yet')
  }
}

// Get data
const actions = {
  GET_MAP: function ({ commit }, params) {
    api.getMap(params.id)
    .then((response) => {
      const map = api.parseMap(response)
      commit('SET_MAP', { map: map })
    })
    .catch('GET_MAP error: ' + console.error)
  },
  GET_MAPS: function ({ commit }) {
    api.getMaps()
    .then((response) => {
      const maps = api.parseMaps(response)
      commit('SET_MAPS', { maps: maps })
    })
    .catch('GET_MAPS error: ' + console.error)
  }
}

// Set data
const mutations = {
  SET_MAP: (state, { map }) => {
    state.map = map
  },
  SET_MAPS: (state, { maps }) => {
    state.maps = maps
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
