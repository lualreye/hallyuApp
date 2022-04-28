import { fireStorage, fireDataBase } from "../static/js/firebaseConfig";
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
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const state = () => ({
  bandImages: [],
});

const getters = {
  getBandImages(state) {
    return state.bandImages;
  },
};

const mutations = {
  // BAND IMAGES
  SET_BAND_IMAGES(state, bandImages) {
    state.bandImages = bandImages;
  },
  SET_BAND_IMAGE(state, bandImage) {
    state.bandImages.push(bandImage);
  },
  DELETE_BAND_IMAGE(state, id) {
    const imageId = state.bandImages.findIndex((image) => image.id === id);
    state.bandImages.splice(imageId, 1);
  },
};

const actions = {
  // CRUD IMAGES
  async uploadBandImages({ commit }, payload) {
    try {
      const storage = fireStorage;
      const fileName = payload.name;
      const imageRef = ref(storage, `bandImages/${fileName}`);
      await uploadBytes(imageRef, payload);
      const imageUrl = await getDownloadURL(imageRef);
      const database = fireDataBase;
      const bandImageRef = doc(collection(database, "bandImages"));
      const bandImage = {
        name: payload.name.split(".").shift(),
        image: imageUrl,
        id: bandImageRef.id,
      };
      await setDoc(bandImageRef, bandImage);
      commit("SET_BAND_IMAGE", bandImage);
    } catch (err) {
      console.error("CANNOT_UPLOAD_BAND_IMAGE", err);
    }
  },
  async fetchBandImages({ commit }) {
    try {
      const db = fireDataBase;
      const imagesSnapshot = await getDocs(collection(db, "bandImages"));
      let images = [];
      let bandImage;
      imagesSnapshot.forEach((image) => {
        let img = image.data();
        bandImage = {
          ...img,
        };
        images.push(bandImage);
      });
      commit("SET_BAND_IMAGES", images);
    } catch (err) {
      console.error("CANNOT_GET_BAND_IMAGES", err);
    }
  },
  async deleteBandImage({ commit }, payload) {
    try {
      const db = fireDataBase;
      console.log(payload)
      await deleteDoc(doc(db, "bandImages", payload));
      commit("DELETE_BAND_IMAGE", payload);
    } catch (err) {
      console.error("CANNOT_DELETE_BAND_IMAGE", err);
    }
  },
};

export { state, getters, mutations, actions };
