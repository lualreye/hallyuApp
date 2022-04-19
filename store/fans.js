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
  fans: [],
});

const getters = {
  getFans(state) {
    return state.fans;
  },
};

const mutations = {
  SET_FANS(state, fans) {
    state.fans = fans;
  },
  SET_FAN(state, fan) {
    state.categories.push(fan);
  },
  DELETE_FAN(state, id) {
    const fanId = state.categories.findIndex((fan) => fan.id === id);
    state.fans.splice(fanId, 1);
  },
};

const actions = {
  async uploadFan({ commit }, payload) {
    try {
      const db = fireDataBase;
      const storage = fireStorage;
      const filename = payload.img.name.split(".").shift();
      const imageRef = ref(storage, `fans/${filename}`);
      await uploadBytes(imageRef, payload.img);
      const imageUrl = await getDownloadURL(imageRef);
      const fanRef = doc(collection(db, "fans"));
      const fan = {
        name: payload.name.toLowerCase(),
        image: imageUrl,
        id: fanRef.id,
      };
      await setDoc(fanRef, fan);
      commit("SET_FAN", fan);
    } catch (err) {
      console.error("CANNOT_UPLOAD_FAN", err);
    }
  },
  async fetchFans({ commit }) {
    try {
      const db = fireDataBase;
      let fans = [];
      const queryFan = await getDocs(collection(db, "fans"));
      queryFan.forEach((fn) => {
        let fan = {
          ...fn.doc(),
        };
        fans.push(fan);
      });
      commit("SET_FANS", fans);
    } catch (err) {
      console.error("CANNOT_GET_FANS");
    }
  },
  async deleteFan({ commit }, payload) {
    try {
      const db = fireDataBase;
      await deleteDoc(doc(db, "fans", payload));
      commit("DELETE_FAN", payload);
    } catch (err) {
      console.error("CANNOT_DELETE_FAN");
    }
  },
};

export { state, getters, mutations, actions };
