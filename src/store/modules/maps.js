import api from './../../api'

// Data
const state = {
  /**
   * An array of Map objects
   * @type {Array}
   *
   * A Map object is defined in the api.parseMap()
   */
  maps: ['No maps yet']
}

// Computed data
const getters = {
}

// Get data
const actions = {
  GET_MAP_BY_SLUG: function ({ state }, params) {
    console.log('slug:' + params.slug)
    return state.maps.filter(item => item.slug === params.slug)
  },
  GET_MAP_LIST: function ({ commit }) {
    api.getMapList()
    .then((response) => {
      const maps = api.parseMap(response)
      commit('SET_MAP_LIST', { list: maps })
    })
    .catch(console.error)
  }
}

// Set data
const mutations = {
  SET_MAP_LIST: (state, { list }) => {
    state.maps = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
