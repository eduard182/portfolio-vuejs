import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

const state = {
  home: {},
  contact: {},
  links: [],
  projects: [],
  webpackContext: null
}

export default {
  state,
  getters,
  actions,
  mutations
}
