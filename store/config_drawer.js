export const state = () => ({
  show: false
})

export const getters = {
  showMenu(state) {
    state.show
  }
}

export const mutations = {
  SHOW_MENU(state, bool) {
    // recibimos un booleano que indica el estado del menu
    // false en caso de estar cerrado, true si esta abierto
    return state.show = bool
  }
}

export const actions = {
  activeMenu({ commit }, bool) {
    // recibimos un booleano en el payload para hacer el cambio en el state
    return commit('SHOW_MENU', bool)
  }
}