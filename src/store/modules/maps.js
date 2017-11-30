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
  /**
   * A comma separated list of Map names
   * @param  {Object} state The state object
   * @return {String}       A comma separated list of Map names
   */
  mapsListOfNamesAsString: state => {
    return state.maps.map(item => item.name).join(', ')
  },
  /**
   * The number of Maps
   * @param  {Object} state The state object
   * @return {Integer}       The number of Maps
   */
  mapsCount: state => {
    return (state.maps[0] === 'No maps yet') ? 0 : state.maps.length
  }
}

// Get data
const actions = {
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
