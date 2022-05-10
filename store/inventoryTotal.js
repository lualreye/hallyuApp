import { fireDataBase } from "../static/js/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const state = () => ({
  totalProducts: [],
  selectedProduct: {},
});

const getters = {
  getTotalProducts(state) {
    return state.totalProducts;
  },
  getSelectedProduct(state) {
    return state.selectedProduct;
  },
};

const mutations = {
  SET_TOTAL_PRODUCTS(state, totalProducts) {
    state.totalProducts = totalProducts;
  },
  SET_PRODUCT(state, product) {
    state.totalProducts.push(product);
  },
  DELETE_PRODUCT(state, id) {
    const productId = state.totalProducts.findIndex(
      (product) => product.id === id
    );
    state.totalProducts.splice(productId, 1);
  },
  UPDATE_EXTRA_IMAGES(state, product) {
    const id = product.id;
    const index = state.totalProducts.findIndex((pr) => pr.id === id);
    state.totalProducts[index].images = product.images;
  },
  UPDATE_IMAGES_BY_COLOR(state, product) {
    console.log(product);
    const id = product.id;
    const index = state.totalProducts.findIndex((pr) => pr.id === id);
    console.log(index);
    state.totalProducts[index].clothes.colors = product.colors;
  },
  UPDATE_PRODUCT(state, product) {
    const id = product.id;
    const index = state.totalProducts.findIndex((pr) => pr.id === id);
    const updatedProduct = Object.assign(state.totalProducts[index], product);
    state.totalProducts[index] = updatedProduct;
  },
  SELECT_PRODUCT(state, productId) {
    const index = state.totalProducts.findIndex((pr) => pr.id === productId);
    const pr = state.totalProducts.filter((pr) => pr.id === productId);
    state.totalProducts[index].selected = true;
    state.selectedProduct = pr[0];
  },
  RESET_SELECTED_PRODUCT(state) {
    state.totalProducts.forEach((product, index) => {
      if (product.selected) {
        state.totalProducts[index].selected = false;
      }
    });
    state.selectedProduct = {};
  },
  PUBLISH_PRODUCT(state, publish) {
    const index = state.totalProducts.findIndex((pr) => pr.id === publish.id);
    state.totalProducts[index].published = publish.publish;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    const db = fireDataBase;
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = [];
      querySnapshot.forEach((product) => {
        products.push({ ...product.data(), selected: false });
      });
      commit("SET_TOTAL_PRODUCTS", products);
    } catch (err) {
      console.error("CANNOT_GET_PRODUCTS", err);
    }
  },
  unselectProduct({ commit }) {
    commit("RESET_SELECTED_PRODUCT");
  },
  selectProduct({ commit }, payload) {
    // TODO: URLSearchParams(*) producId
    commit("RESET_SELECTED_PRODUCT");
    // HACEMOS LA BUSQUEDA
    commit("SELECT_PRODUCT", payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
