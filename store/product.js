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
};

const actions = {
  selectProduct({ commit }, payload) {
    // TODO: URLSearchParams(*) producId
    commit("RESET_PRODUCT");
    // HACEMOS LA BUSQUEDA
    commit("SET_PRODUCT", selectedProduct);
  },
};

export { state, getters, mutations, actions };
