const state = {
  username: 'kelvin'
}

const getters = {
  username(state) {
    return state.username
  }
}
const mutations = {
  setUsername(state, username) {
    state.username = username
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
