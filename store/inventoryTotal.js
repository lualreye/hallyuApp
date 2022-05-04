import { fireDataBase } from "../static/js/firebaseConfig"
import { getDocs, collection } from "firebase/firestore"

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
    state.totalProducts = totalProducts
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
  async fetchProducts({ commit }) {
    const db = fireDataBase;
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = [];
      querySnapshot.forEach((product) => {
        products.push(product.data());
      });
      commit("SET_TOTAL_PRODUCTS", products);
    } catch (err) {
      console.error("CANNOT_GET_PRODUCTS", err);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
