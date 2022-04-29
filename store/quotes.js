import { fireDatabase } from "../static/js/firebaseConfig";
import { getDocs, collection, setDoc, doc, query } from "firebase/firestore";

const state = () => ({
  quotes: {},
});

const getters = {
  getQuotes(quotes) {
    return state.quotes;
  },
};

const mutations = {
  SET_QUOTES(state, quotes) {
    state.quotes = quotes;
  },
};

const actions = {
  async fetchQuotes({commit}) {
    try {
      const db = fireDatabase
      const quoteQuery = query(collection(db, "quotes"))
      let quotes;
      const quoteSnap = await getDocs(quoteQuery)
      quoteSnap.forEach((quote) => {
        quotes = quote.data()
      })
      console.log(quotes)
      commit("SET_QUOTES", quotes)
    }catch(e) {
      console.error("CANNOT_GET_QUOTES",e)
    }
  },
  async uploadQuotes({ commit }, payload) {
    try {
      const db = fireDatabase;
      const quoteRef = doc(collection(db, "quotes"));
      console.log(payload, ...payload);
      const quotes = payload;
      await setDoc(quoteRef, quotes);
    } catch (e) {
      console.error("CANNOTE_SAVE_QUOTES", e);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
