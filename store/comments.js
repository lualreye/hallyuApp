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
  async uploadComment({ commit }, payload) {
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

      await setDoc(commentRef, { ...comment })

      commit('ADD_COMMENT', {...comment})
    } catch (err) {
      console.error('CANNOT_UPLOAD_COMMENT', err);
    }
  },
  async fetchCommentedProducts({ commit }) {
    try {
      const db = fireDataBase;
      const q = query(collection(db, 'productCommented'))
      const snap = await getDocs(q)
      const comments = []
      snap.forEach( async (com) => {
        const commentId = com.id;
        const comment = com.data();
        console.log(comment)
        const productRef = doc(db, 'products', comment.productId)
        const productSnap = await getDoc(productRef)
        const product = productSnap.data()
        console.log(product)
        comments.push({
          commentId: commentId,
          thumbnail: product.thumbnail,
          likes: product.likes,
          userName: comment.userName,
          userImage: comment.userImage,
          comment: comment.comment
        })
      })
      commit('SET_PRODUCTS_COMMENTED', comments)
    } catch (err) {
      console.error('CANNOT_GET_COMMENTS', err);
    }
  },
  async deleteVideo({ commit }, payload) {
    try {
      const db = fireDataBase
      const clubRef = doc(db, 'club', 'ae8stDTjGj7Cga3OvhEd')
      await updateDoc(clubRef, {
        videos: arrayRemove(payload)
      })
      commit('REMOVE_VIDEO', payload)
    } catch(err) {
      console.error('CANNOT_DELETE_VIDEO', err)
    }
  }
};

export { state, getters, mutations, actions };
