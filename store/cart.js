import { fireDataBase } from '../static/js/firebaseConfig';
import { collection, getDocs, query, limit, where } from 'firebase/firestore';

export const state = () => ({
  show: false,
  cart: [],
  flashProducts: [],
  discountProducts: [],
  products: [],
  productsByCategory: [],
  productsByBand: [],
  product: {},
  suggestedProducts: [],
  newProducts: [],
});

export const getters = {
  showCart(state) {
    return state.show;
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
  getProductsByBand(state) {
    return state.productsByBand;
  },
  getProduct(state) {
    return state.product;
  },
  getSuggestedProducts(state) {
    return state.suggestedProducts;
  },
  getNewProducts(state) {
    return state.newProducts;
  },
  getCart(state) {
    return state.cart;
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
  ADD_PRODUCT(state, product) {
    state.product = {};
    return (state.product = product);
  },
  ADD_SUGGESTED_PRODUCTS(state, products) {
    state.suggestedProducts = [];
    return (state.suggestedProducts = products);
  },
  ADD_NEW_PRODUCTS(state, products) {
    state.newProducts = [];
    return (state.newProducts = products);
  },
  ADD_PRODUCT_TO_CART(state, product) {
    const id = state.cart.findIndex((pr) => pr.id === product.id);
    if (id === -1) {
      state.cart.push(product);
    } else {
      state.cart[id].quantity += 1;
    }
  },
  REMOVE_PRODUCT_TO_CART(state, product) {
    const id = state.cart.findIndex((pr) => pr.id === product.id);
    if (state.cart[id].quantity >= 2) {
      state.cart[id].quantity -= 1;
    } else {
      state.cart.splice(id, 1);
    }
  },
  ADD_ONE(state, product) {
    const id = state.cart.findIndex((pr) => pr.id === product.id);
    state.cart[id].quantity += 1;
  },
  SUBSTRACT_ONE(state, product) {
    const id = state.cart.findIndex((pr) => pr.id === product.id);
    state.cart[id].quantity -= 1;
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
      const productByBand = [];
      if (payload === undefined) {
        const productQuery = query(ref, where('band', '!=', 'Sin banda'));
        const querySnapshot = await getDocs(productQuery);
        querySnapshot.forEach((pr) => {
          const id = pr.id;
          const product = pr.data();
          productByBand.push({ id, ...product });
        });
      }
      if (payload !== undefined) {
        const productQuery = query(ref, where('band', '==', payload));
        const querySnapshot = await getDocs(productQuery);
        querySnapshot.forEach((pr) => {
          const id = pr.id;
          const product = pr.data();
          productByBand.push({ id, ...product });
        });
      }
      commit('ADD_PRODUCTS_BY_BAND', productByBand);
    } catch (err) {
      console.error('CANNOT_GET_PRODUCTS_BY_BAND');
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
  async fetchProduct({ commit }, payload) {
    const db = fireDataBase;
    try {
      const ref = collection(db, 'products');
      const productQuery = query(ref, where('id', '==', payload));
      const querySnapshot = await getDocs(productQuery);
      let product = {};
      querySnapshot.forEach((pr) => {
        product = pr.data();
      });
      commit('ADD_PRODUCT', { ...product, quantity: Number(0) });
    } catch (err) {
      console.error('CANNOT_GET_PRODUCT');
    }
  },
  async fetchNewProducts({ commit }, payload) {
    const db = fireDataBase;
    try {
      const ref = collection(db, 'products');
      const productQuery = query(ref, limit(6));
      const querySnapshot = await getDocs(productQuery);
      const products = [];
      querySnapshot.forEach((pr) => {
        let product = pr.data();
        products.push(product);
      });
      commit('ADD_NEW_PRODUCTS', products);
    } catch (err) {
      console.error('CANNOT_NEW_PRODUCTS');
    }
  },
  async fetchSuggestedProducts({ commit }, payload) {
    const db = fireDataBase;
    try {
      const ref = collection(db, 'products');
      const productQuery = query(ref, limit(6));
      const querySnapshot = await getDocs(productQuery);
      const products = [];
      querySnapshot.forEach((pr) => {
        let product = pr.data();
        products.push(product);
      });
      commit('ADD_SUGGESTED_PRODUCTS', products);
    } catch (err) {
      console.error('CANNOT_SUGGESTED_PRODUCTS');
    }
  },
  addToCart({ commit }, payload) {
    const product = { ...payload, quantity: Number(1) };
    commit('ADD_PRODUCT_TO_CART', product);
  },
  removeToCart({ commit }, payload) {
    commit('REMOVE_PRODUCT_TO_CART', payload);
  },
  addOne({ commit }, payload) {
    commit('ADD_ONE', payload);
  },
  substractOne({ commit }, payload) {
    commit('SUBSTRACT_ONE', payload);
  },
};
