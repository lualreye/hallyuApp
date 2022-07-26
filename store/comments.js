import { fireStorage, fireDataBase } from '../static/js/firebaseConfig';
import {
  getDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  setDoc,
  getDocs,
  deleteDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const state = () => ({
  productsCommented: []
});

const getters = {
  getProductsCommented(state) {
    return state.productsCommented;
  },
};

const mutations = {
  // HERO SONGS
  SET_PRODUCTS_COMMENTED(state, products) {
    state.productsCommented = products;
  },
  REMOVE_PRODUCT_COMMENTED(state, product) {
    const idx = state.productsCommented.findIndex(pr => pr.id === product.id)
    state.productsCommented.splice(idx, 1)
  },
  ADD_COMMENT(state, product) {
    state.productsCommented.push(product)
  }
};

const actions = {
  // TODO: CRUD SONGS
  // TODO: params(*) mp3 file
  async uploadComment({ commit, rootGetters }, payload) {
    try {
      const storage = fireStorage;
      const fileName = payload.userImage.name.split('.').shift();
      const imageRef = ref(storage, `userComments/${fileName}`);
      await uploadBytes(imageRef, payload.userImage);
      const imageUrl = await getDownloadURL(imageRef);

      const db = fireDataBase;

      const commentRef = doc(collection(db, 'productCommented'))

      
      const comment = {
        userImage: imageUrl,
        userName: payload.userName,
        productId: payload.productId,
        comment: payload.comment
      }

      const products = rootGetters['inventoryTotal/getTotalProducts']
      const idx = products.findIndex(pr => pr.id === payload.productId )
      const pr = products[idx]
      await setDoc(commentRef, { ...comment })

      commit('ADD_COMMENT', {...comment, likes: pr.likes, thumbnail: pr.thumbnail, commentId: commentRef.id })
    } catch (err) {
      console.error('CANNOT_UPLOAD_COMMENT', err);
    }
  },
  async fetchCommentedProducts({ commit }) {
    try {
      const db = fireDataBase;
      const q = query(collection(db, 'productCommented'))
      const snap = await getDocs(q)
      const productComments = []
      snap.forEach( async (com) => {
        productComments.push({commentId: com.id, ...com.data()})
      })
      const commentsWithProduct = productComments.map(async (com) => {
        const productRef = doc(db, 'products', com.productId);
        const productSnap = await getDoc(productRef);
        const product = productSnap.data();
        return {
          ...com,
          likes: product.likes,
          thumbnail: product.thumbnail
        }
      })
      
      commit('SET_PRODUCTS_COMMENTED', await Promise.all(commentsWithProduct))
    } catch (err) {
      console.error('CANNOT_GET_COMMENTS', err);
    }
  },
  async deleteComment({ commit }, payload) {
    try {
      const db = fireDataBase
      const prRef = doc(db, 'productCommented', payload)
      await deleteDoc(prRef)
      commit('REMOVE_PRODUCT_COMMENTED', payload)
    } catch(err) {
      console.error('REMOVE_PRODUCT_COMMENTED', err)
    }
  }
};

export { state, getters, mutations, actions };
