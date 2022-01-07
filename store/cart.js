export const state = () => ({
  show: false
})

export const getters = {
  showCart(state) {
    return state.show
  }
}

export const mutations = {
  //generamos el cambio de estado en la visibilidad del carrito de compras
  //recibimos un booleano indicando el estado requerido para su visualizacion
  ACTIVE_CART(state, bool) {
    return state.show = bool
  }
}

export const actions = {
  activeCart({commit}, bool) {
    commit('ACTIVE_CART', bool)
  }
}