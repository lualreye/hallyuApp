import { fireDataBase } from '../static/js/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const state = () => ({
  show: false,
  selectedProducts: [],
  flashProducts: [],
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
      console.log(flashProducts);
      commit('ADD_FLASH_PRODUCTS', flashProducts);
    } catch (err) {
      console.error('CANNOT_GET_FLASH_PORDUCTS');
    }
  },
};
