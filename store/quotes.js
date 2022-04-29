import { fireDataBase } from "../static/js/firebaseConfig";
import { getDocs, collection, updateDoc, doc, query } from "firebase/firestore";

const state = () => ({
  quotes: {},
});

const getters = {
  getQuotes(state) {
    return state.quotes;
  },
};

const mutations = {
  SET_QUOTES(state, quotes) {
    state.quotes = quotes;
  },
};

const actions = {
  async fetchQuotes({ commit }) {
    try {
      const db = fireDataBase;
      const quoteQuery = query(collection(db, "quotes"));
      let quotes;
      const quoteSnap = await getDocs(quoteQuery);
      quoteSnap.forEach((quote) => {
        quotes = quote.data();
      });
      commit("SET_QUOTES", quotes);
    } catch (e) {
      console.error("CANNOT_GET_QUOTES", e);
    }
  },
  async uploadQuotes({ commit }, payload) {
    try {
      const db = fireDataBase;
      console.log(payload);
      const quoteRef = doc(db, "quotes", payload.id);
      const quotes = { ...payload.quotes, id: payload.id };
      await updateDoc(quoteRef, quotes);
      commit("SET_QUOTES", quotes);
    } catch (e) {
      console.error("CANNOT_SAVE_QUOTES", e);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
