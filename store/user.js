const state = () => ({
  isModalActive: false
})

const getters = {
  getModal(state) {
    return state.isModalActive
  }
}

const mutations = {
  SHOW_MODAL(state, boolean) {
    state.isModalActive = boolean
  }
}

const actions = {
  showModal({ commit }, payload) {
    console.log('Estamos en actions')
    commit('SHOW_MODAL', payload)
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}