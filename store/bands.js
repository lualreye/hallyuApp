import { fireStorage, fireDataBase } from "../static/js/firebaseConfig";
import {
  getDocs,
  setDoc,
  doc,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

const state = () => ({
  bands: [],
});

const getters = {
  getBands(state) {
    return state.bands;
  },
};

const mutations = {
  SET_BANDS(state, bands) {
    state.bands = bands;
  },
  SET_BAND(state, band) {
    state.bands.push(band);
  },
  DELETE_BAND(state, id) {
    const bandId = state.bands.findIndex((band) => band.id === id);
    state.bands.splice(bandId, 1);
  },
};

const actions = {
  async uploadBand({ commit }, payload) {
    try {
      const db = fireDataBase;
      const storage = fireStorage;
      const filename = payload.img.name.split(".").shift();
      const imageRef = ref(storage, `bands/${filename}`);
      await uploadBytes(imageRef, payload.img);
      const imageUrl = await getDownloadURL(imageRef);
      const bandRef = doc(collection(db, "bands"));
      const band = {
        name: payload.name.toLowerCase(),
        image: imageUrl,
        id: bandRef.id,
      };
      await setDoc(bandRef, band);
      commit("SET_BAND", band);
    } catch (err) {
      console.error("CANNOT_UPLOAD_BAND", err);
    }
  },
  async fetchBands({ commit }) {
    try {
      const db = fireDataBase;
      let bands = [];
      const queryBand = await getDocs(collection(db, "bands"));
      queryBand.forEach((bn) => {
        let band = {
          ...bn.data(),
        };
        bands.push(band);
      });
      commit("SET_BANDS", bands);
    } catch (err) {
      console.error("CANNOT_GET_BANDS", err);
    }
  },
  async deleteBand({ commit }, payload) {
    try {
      const db = fireDataBase;
      await deleteDoc(doc(db, "bands", payload));
      commit("DELETE_BAND", payload);
    } catch (err) {
      console.error("CANNOT_DELETE_BAND");
    }
  },
};

export { state, getters, mutations, actions };
