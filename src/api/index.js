import {createClient} from 'contentful'
import {slugify} from 'lodash-addons'

// Authenticate
const apiClient = createClient({
  space: 'lvp1p3se851j',
  accessToken: 'a8dcf7a9aeb2b6898fc58b0dae20d92014fc6ae72c06c61276293d300e4001f7'
})

// Get a map
const getMap = (slug) => {
  return apiClient.getEntry({
    content_type: 'map',
    'fields.name': 'Wilderness'
  })
}

// Parse a map
const parseMap = (response) => {
  return response.items.map(item => ({
    name: item.fields.name,
    description: item.fields.description,
    slug: slugify(item.fields.name)
  }))
}

// Get Maps
// - returns Maps ordered by the `order` field
const getMapList = () => {
  return apiClient.getEntries({
    content_type: 'map',
    order: 'fields.order'
  })
}

// Export api functions
export default {
  getMapList,
  parseMap,
  getMap
}
