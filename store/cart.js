import { fireDataBase } from '../static/js/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const state = () => ({
  show: false,
  selectedProducts: [],
  flashProducts: [],
  discountProducts: [],
  products: [],
  productsByCategory: [],
  productsByBand: [],
});

export const getters = {
  showCart(state) {
    return state.show;
  },
  getSelectedProducts(state) {
    return state.selectedProducts;
  },
  getFlashProducts(state) {
    return state.flashProducts;
  },
  getDiscountProducts(state) {
    return state.discountProducts;
  },
  getProducts(state) {
    return state.products;
  },
  getProductsByCategory(state) {
    return state.productsByCategory;
  },
  getProductsByBands(state) {
    return state.productsByBand;
  },
};

export const mutations = {
  //generamos el cambio de estado en la visibilidad del carrito de compras
  //recibimos un booleano indicando el estado requerido para su visualizacion
  ACTIVE_CART(state, bool) {
    return (state.show = bool);
  },
  ADD_FLASH_PRODUCTS(state, flashProductsArray) {
    return (state.flashProducts = flashProductsArray);
  },
  ADD_DISCOUNT_PRODUCTS(state, discountProducts) {
    return (state.discountProducts = discountProducts);
  },
  ADD_PRODUCTS(state, products) {
    return (state.products = products);
  },
  ADD_PRODUCTS_BY_CATEGORY(state, products) {
    return (state.productsByCategory = products);
  },
  CLEAR_PRODUCTS_BY_CATEGORY(state) {
    return (state.productsByCategory = []);
  },
  ADD_PRODUCTS_BY_BAND(state, products) {
    return (state.productsByBand = products);
  },
  CLEAR_PRODUCTS_BY_BAND(state) {
    return (state.productsByBand = []);
  },
};

export const actions = {
  activeCart({ commit }, bool) {
    commit('ACTIVE_CART', bool);
  },
  async fetchFlashProducts({ commit }) {
    const db = fireDataBase;
    try {
      const ref = collection(db, 'products');
      const flashQuery = query(ref, where('offered', '==', 'Tiempo'));
      const querySnapshot = await getDocs(flashQuery);
      const flashProducts = [];
      querySnapshot.forEach((pr) => {
        const id = pr.id;
        const product = pr.data();
        flashProducts.push({ id, ...product });
      });
      commit('ADD_FLASH_PRODUCTS', flashProducts);
    } catch (err) {
      console.error('CANNOT_GET_FLASH_PORDUCTS');
    }
  },
  async fetchProductsByCategory({ commit }, payload) {
    const db = fireDataBase;
    try {
      const ref = collection(db, 'products');
      const productQuery = query(ref, where('category', '==', payload));
      const querySnapshot = await getDocs(productQuery);
      const productByCategory = [];
      querySnapshot.forEach((pr) => {
        const id = pr.id;
        const product = pr.data();
        productByCategory.push({ id, ...product });
      });
      commit('ADD_PRODUCTS_BY_CATEGORY', productByCategory);
    } catch (err) {
      console.error('CANNOT_GET_PORDUCTS_BY_CATEGORY');
    }
  },
  clearProductsByCategory({ commit }) {
    commit('CLEAR_PRODUCTS_BY_BAND');
  },
  async fetchProductsByBand({ commit }, payload) {
    const db = fireDataBase;
    try {
      const ref = collection(db, 'products');
      const productQuery = query(ref, where('band', '==', payload));
      const querySnapshot = await getDocs(productQuery);
      const productByBand = [];
      querySnapshot.forEach((pr) => {
        const id = pr.id;
        const product = pr.data();
        productByBand.push({ id, ...product });
      });
      commit('ADD_PRODUCTS_BY_BAND', productByBand);
    } catch (err) {
      console.error('CANNOT_GET_PORDUCTS_BY_BAND');
    }
  },
  clearProductsByBand({ commit }) {
    commit('CLEAR_PRODUCTS_BY_BAND');
  },
  async fetchDiscountProducts({ commit }) {
    const db = fireDataBase;
    try {
      const ref = collection(db, 'products');
      const discountQuery = query(ref, where('offered', '==', 'Descuento'));
      const querySnapshot = await getDocs(discountQuery);
      const discountProducts = [];
      querySnapshot.forEach((pr) => {
        const id = pr.id;
        const product = pr.data();
        discountProducts.push({ id, ...product });
      });
      commit('ADD_DISCOUNT_PRODUCTS', discountProducts);
    } catch (err) {
      console.error('CANNOT_GET_FLASH_PORDUCTS');
    }
  },
  async fetchProducts({ commit }) {
    const db = fireDataBase;
    try {
      const ref = collection(db, 'products');
      const productQuery = await getDocs(ref);
      const products = [];
      productQuery.forEach((pr) => {
        const id = pr.id;
        const product = pr.data();
        products.push({ id, ...product });
      });
      commit('ADD_PRODUCTS', products);
    } catch (err) {
      console.error('CANNOT_GET_PORDUCTS');
    }
  },
};
