const state = () => ({
  totalProducts: []
})

const getters = {
  getTotalProducts(state) {
    return state.totalProducts
  }
}

const mutations = {
  SET_TOTAL_PRODUCTS(state, totalProducts) {
    state.totalProducs = totalProducts
  },
  SET_PRODUCT(state, product) {
    state.totalProducts.push(product)
  },
  DELETE_PRODUCT(state, id) {
    const productId = state.totalProducts.findIndex((product) => product.id === id);
    state.totalProducts.splice(productId, 1);
  },
  UPDATE_PRODUCT(state, product) {
    const productId = state.totalProducts.findIndex((pr) => pr.id === id);
    state.totalProducts[productId] = product;
  }
}


const actions = {
  async uploadProduct({commit}, payload) {
    try {
      console.log(payload)
      const product = {}
      commit("SET_PRODUCT", product)
    } catch(err) {
      console.error("CANNOT_UPDATE_PRODUCT")
    }
  },
  async fetchTotalProducts({commit}) {
    try {
      const products = []
      commit("SET_TOTAL_PRODUCTS", products)
    } catch(err) {
      console.error("CANNOT_GET_PRODUCTLIST")
    }
  },
}


