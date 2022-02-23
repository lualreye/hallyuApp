import { fireAuth } from "../static/js/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const state = () => ({
  isModalActive: false,
  isSignUpActive: false,
  isSignInActive: false,
});

const getters = {
  getModal(state) {
    return state.isModalActive;
  },
  getSignIn(state) {
    return state.isSignInActive;
  },
  getSignUp(state) {
    return state.isSignUpActive;
  },
};

const mutations = {
  SHOW_MODAL(state, boolean) {
    state.isModalActive = boolean;
  },
  SHOW_SIGNIN(state, boolean) {
    state.isSignInActive = boolean;
  },
  SHOW_SIGNUP(state, boolean) {
    state.isSignUpActive = boolean;
  },
};

const actions = {
  showModal({ commit }, payload) {
    commit("SHOW_MODAL", payload);
  },
  activeSignIn({ commit }, payload) {
    commit("SHOW_SIGNIN", payload);
  },
  activeSignUp({ commit }, payload) {
    commit("SHOW_SIGNUP", payload);
  },
  async signInWithGoogle({ commit }, payload) {
    const auth = fireAuth
    const provider = new GoogleAuthProvider
    try {
      const result = await signInWithPopup(auth, provider)
      const googleCredentials = GoogleAuthProvider.credentialFromResult(result)
      console.log(result, googleCredentials)
    } catch (error) {
      console.error(error)
    }
  }
};

export { state, getters, mutations, actions };
