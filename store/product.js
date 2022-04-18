const state = () => ({
  isModalOpen: false,
  selectedProduct: null,
});

const getters = {
  getIsModalOpen(state) {
    return state.isModalOpen;
  },
  getProduct(state) {
    return state.selectedProduct;
  },
};

const mutations = {
  SET_PRODUCT(state, selectedProduct) {
    state.selectedProduct = selectedProduct;
  },
  RESET_PRODUCT(state) {
    state.selectedProduct = {};
  },
  SHOW_MODAL(state, boolean) {
    state.isModalOpen = boolean
  }
};

const actions = {
  showProdctutModal({commit}, payload) {
    commit("SHOW_MODAL", payload)
  },
  selectProduct({ commit }, payload) {
    // TODO: URLSearchParams(*) producId
    commit("RESET_PRODUCT");
    // HACEMOS LA BUSQUEDA
    commit("SET_PRODUCT", selectedProduct);
  },
};

export { state, getters, mutations, actions };
