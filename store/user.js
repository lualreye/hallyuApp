import { fireAuth } from "../static/js/firebaseConfig";
import { fireDataBase } from "../static/js/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, collection, getDocs, query, where } from "firebase/firestore";

const state = () => ({
  isModalActive: false,
  isSignUpActive: false,
  isSignInActive: false,
  user: null,
  error: null,
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
  getUser(state) {
    return state.user;
  },
  getError(state) {
    return state.error;
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
  SET_USER(state, userData) {
    state.user = userData;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  CLEAR_ERROR(state) {
    state.error = null;
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
  // LOGIN WITH GOOGLE
  // CREATING USER IN DATABASE
  async loginWithGoogle({ commit }, payload) {
    const auth = fireAuth;
    const db = fireDataBase;
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const googleCredentials = GoogleAuthProvider.credentialFromResult(result);
      const googleToken = googleCredentials.accessToken;
      const userResult = result.user;
      const user = {
        uid: userResult.uid,
        name: userResult.displayName,
        email: userResult.email,
        image: userResult.photoURL,
      };
      const userRef = doc(collection(db, "users"));
      await setDoc(userRef, { ...user });
      commit("SET_USER", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    }
  },
  // SIGNUP WITH CREDENTIALS
  // CREATING USER IN DATABASE
  async signUpWithEmail({ commit }, payload) {
    const auth = fireAuth;
    const db = fireDataBase;
    try {
      const credentialResults = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      const user = {
        name: payload.name,
        email: payload.email,
        uid: credentialResults.user.uid,
        image: "",
      };
      const userRef = doc(collection(db, "users"));
      await setDoc(userRef, { ...user });
      commit("SET_USER", user);
    } catch (error) {
      console.error(error);
    }
  },
  // SIGNIN WITH CREDENTIALS
  // GETTING USER DATA FROM DATABASE
  async signInWithEmail({ commit }, payload) {
    const auth = fireAuth;
    const db = fireDataBase;
    try {
      const credentialResults = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      const userUid = credentialResults.user.uid;
      const docRef = collection(db, "users");
      const userQuery = query(docRef, where("uid", "==", userUid));
      const userDocs = await getDocs(userQuery)
      let user;
      userDocs.forEach(doc => user = doc.data())
      commit("SET_USER", user);
    } catch (error) {
      console.error(error);
    }
  },
};

export { state, getters, mutations, actions };
