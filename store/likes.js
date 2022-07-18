import { fireDataBase } from '../static/js/firebaseConfig';
import { collection, getDoc, getDocs, query, limit, where, updateDoc, doc, increment, decrement, arrayUnion, arrayRemove } from 'firebase/firestore';

export const state = () => ({
  wishList: [],
  isLikedShown: false
});

export const getters = {
  getWishList(state) {
    return state.wishList;
  },
  getLiked(state) {
    return state.isLikedShown;
  },
};

export const mutations = {
  //generamos el cambio de estado en la visibilidad del carrito de compras
  ADD(state, product) {
    state.product = product
  },
  REMOVE(state, product) {
    const idx = state.wishList.findIndex(pr => pr.id === product.id)
    state.wishList.splice(idx, 1)
  },
  SHOW_LIKED(state, boolean) {
    state.isLikedShown = boolean
  },
  SET_LIKED_PRODUCTS(state, products) {
    state.wishList = products
  }
};

export const actions = {
  showLikedProducts({ commit }, payload) {
    commit('SHOW_LIKED', payload)
  },
  async addToWishList({ commit, rootGetters }, payload) {
    try {
      const db = fireDataBase
      const productRef = doc(collection(db, 'products'), payload.id)
      await updateDoc(productRef, {
        likes: increment(1)
      })
      const id = rootGetters['user/getUser'].uid
      const usersRef = collection(db, 'users')
      const q = await query(usersRef, where("uid", "==", id))
      const snap = await getDocs(q)
      let uid
      snap.forEach(doc => uid = doc.id)
      const userRef = doc(db, 'users', uid)
      await updateDoc(userRef, {
        liked: arrayUnion(payload)
      })
      commit('ADD', payload)
    } catch(err) {
      console.error("CANNOT_ADD_TO_WISHLIST", err)
    }
  },
  async removeFromWishList({ commit , payload}) {
    try {
      
    } catch(err) {
      console.error('CANNOT_REMOVE_FROM_WISHLIST', err)
    }
  },
  fetchLikedProducts({ commit, rootGetters }) {
    try { 
      const db = fireDataBase
      const likedProducts = [...rootGetters['user/getUser'].liked]
      commit('SET_LIKED_PRODUCTS', likedProducts)
    } catch (err) {
      console.error('CANNOT_GET_WISHLIST', err)
    }
  }
};
