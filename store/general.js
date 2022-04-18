import { fireStorage, fireDataBase } from "../static/js/firebaseConfig";
import {
  getDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const state = () => ({
  heroImages: [],
});

const getters = {
  getHeroImages(state) {
    return state.heroImages;
  },
};

const mutations = {
  SET_IMAGES(state, heroImages) {
    state.heroImages = heroImages;
  },
  SET_IMAGE(state, heroImage) {
    state.heroImages.push(heroImage);
  },
};

const actions = {
  async uploadHeroImages({ commit }, payload) {
    try {
      const storage = fireStorage
      const fileName = payload.name
      const imageRef = ref(storage, `heroImages/${fileName}`);
      await uploadBytes(imageRef, payload)
      const imageUrl = await getDownloadURL(imageRef)
      const database = fireDataBase
      const heroImageRef = doc(collection(database, "heroImages"))
      const heroImage = {
        name: payload.name.split(".").shift(),
        image: imageUrl
      }
      await setDoc(heroImageRef, heroImage)
      commit("SET_IMAGE", heroImage);
    } catch (err) {
      console.error("CANNOT_UPLOAD_HERO_IMAGE", err);
    }
  },
  async getHeroImages({ commit }) {
    try {
      commit("SET_IMAGES", heroImages);
    } catch (err) {
      console.error("CANNOT_GET_HERO_IMAGES", err);
    }
  },
};

export { state, getters, mutations, actions };
