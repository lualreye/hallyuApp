import { fireStorage, fireDataBase } from '../static/js/firebaseConfig';
import {
  getDocs,
  setDoc,
  doc,
  collection,
  deleteDoc,
} from 'firebase/firestore';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';

const state = () => ({
  categories: [],
});

const getters = {
  getCategories(state) {
    return state.categories;
  },
};

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_CATEGORY(state, category) {
    state.categories.push(category);
  },
  DELETE_CATEGORY(state, id) {
    const imageId = state.categories.findIndex((image) => image.id === id);
    state.categories.splice(imageId, 1);
  },
};

const actions = {
  async uploadCategory({ commit }, payload) {
    try {
      const db = fireDataBase;
      const storage = fireStorage;
      const filename = payload.img.name.split('.').shift();
      const imageRef = ref(storage, `categories/${filename}`);
      await uploadBytes(imageRef, payload.img);
      const imageUrl = await getDownloadURL(imageRef);
      const categoryRef = doc(collection(db, 'categories'));
      const category = {
        name: payload.name.toLowerCase(),
        image: imageUrl,
        sales: 0,
        id: categoryRef.id,
      };
      await setDoc(categoryRef, category);
      commit('SET_CATEGORY', category);
    } catch (err) {
      console.error('CANNOT_UPLOAD_CATEGORY', err);
    }
  },
  async fetchCategories({ commit }) {
    try {
      const db = fireDataBase;
      let categories = [];
      const queryCategory = await getDocs(collection(db, 'categories'));
      queryCategory.forEach((cat) => {
        let category = {
          ...cat.data(),
        };
        categories.push(category);
      });
      commit('SET_CATEGORIES', categories);
    } catch (err) {
      console.error('CANNOT_GET_CATEGORIES');
    }
  },
  async deleteCategory({ commit }, payload) {
    try {
      const db = fireDataBase;
      await deleteDoc(doc(db, 'categories', payload));
      commit('DELETE_CATEGORY', payload);
    } catch (err) {
      console.error('CANNOT_DELETE_CATEGORY');
    }
  },
};

export { state, getters, mutations, actions };
