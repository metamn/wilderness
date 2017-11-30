import {createClient} from 'contentful'
import {slugify} from 'lodash-addons'

// Authenticate
const apiClient = createClient({
  space: 'lvp1p3se851j',
  accessToken: 'a8dcf7a9aeb2b6898fc58b0dae20d92014fc6ae72c06c61276293d300e4001f7'
})

const parseMap = (response) => {
  return {
    name: response.fields.name,
    description: response.fields.description,
    slug: slugify(response.fields.name),
    id: response.sys.id
  }
}

// Get a single map
const getMap = (id) => {
  return apiClient.getEntry(id)
}

// Parse maps
// - parse a set of maps
const parseMaps = (response) => {
  return response.items.map(item => ({
    name: item.fields.name,
    description: item.fields.description,
    slug: slugify(item.fields.name),
    id: item.sys.id
  }))
}

// Get Maps
// - returns Maps ordered by the `order` field
const getMaps = () => {
  return apiClient.getEntries({
    content_type: 'map',
    order: 'fields.order'
  })
}

// Export api functions
export default {
  getMaps,
  parseMaps,
  getMap,
  parseMap
}
