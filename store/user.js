import { fireAuth } from '../static/js/firebaseConfig';
import { fireDataBase } from '../static/js/firebaseConfig';
import { fireFunctions } from '../static/js/firebaseConfig';
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';

import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import { httpsCallable } from 'firebase/functions';

const state = () => ({
  isModalActive: false,
  isSignUpActive: false,
  isSignInActive: false,
  user: null,
  error: null,
  recoveryEmailSent: false,
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
  getRecoveryEmail(state) {
    return state.recoveryEmailSent;
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
  SET_USER_IMAGE(state, userImage) {
    state.user.image = userImage;
  },
  SET_USER_NAME(state, userName) {
    state.user.image = userName;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  CLEAR_ERROR(state) {
    state.error = null;
  },
  SENT_RECOVERY_EMAIL(state, boolean) {
    state.recoveryEmailSent = boolean;
  },
};

const actions = {
  showModal({ commit }, payload) {
    commit('SHOW_MODAL', payload);
  },
  activeSignIn({ commit }, payload) {
    commit('SHOW_SIGNIN', payload);
  },
  activeSignUp({ commit }, payload) {
    commit('SHOW_SIGNUP', payload);
  },
  // TODO: login with google
  // TODO: creating user in firebase
  async loginWithGoogle({ commit }, payload) {
    const auth = fireAuth;
    const db = fireDataBase;
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const googleCredentials = GoogleAuthProvider.credentialFromResult(result);
      const googleToken = googleCredentials.accessToken;
      const userResult = result.user;
      const userRef = collection(db, 'users');
      const userQuery = query(userRef, where('email', '==', userResult.email));
      const userSnap = await getDocs(userQuery);
      let user;
      if (userSnap.docs.length !== 0) {
        userSnap.forEach((doc) => {
          user = doc.data();
        });
        const userId = await fireAuth.currentUser.getIdTokenResult();
        let role = {}
        if ('admin' in userId.claims) {
          role = {admin: true} 
        }
        if ('costumer' in userId.claims) {
          role = {costumer: true} 
        }
        commit('SET_USER', {...user, role});
        commit('SHOW_SIGNIN', false);
        commit('SHOW_SIGNUP', false);
        commit('SHOW_MODAL', false);
        this.$router.push('/')
      } else {
        user = {
          uid: userResult.uid,
          name: userResult.displayName,
          email: userResult.email,
          image: userResult.photoURL,
        };
        const userId = await fireAuth.currentUser.getIdTokenResult();
        let role = {}
        if ('admin' in userId.claims) {
          role = {admin: true} 
        }
        if ('costumer' in userId.claims) {
          role = {costumer: true} 
        }
        const docRef = doc(userRef);
        await setDoc(docRef, { ...user });
        commit('SET_USER', { ...user, role});
        commit('SHOW_SIGNIN', false);
        commit('SHOW_SIGNUP', false);
        commit('SHOW_MODAL', false);
        this.$router.push('/')
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error('Error: ', errorCode, errorMessage, email, credential);
    }
  },
  // TODO: params(*) name, email, password
  // creating user in firebase
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
        image: '',
      };
      const userRef = doc(collection(db, 'users'));
      await setDoc(userRef, { ...user });
      commit('SET_USER', user);
      commit('SHOW_SIGNUP', false);
      commit('SHOW_MODAL', false);
    } catch (error) {
      console.error(error);
    }
  },
  // TODO: params(*) email, password
  // login user and fetching data
  async signInWithEmail({ commit }, payload) {
    const auth = fireAuth;
    const db = fireDataBase;
    let user;
    try {
      const credentialResults = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );

      const userId = await fireAuth.currentUser.getIdTokenResult();

      if (userId.claims.admin) {
        const adminRole = userId.claims.admin;
        let role = { adminRole };
        const userUid = credentialResults.user.uid;
        const docRef = collection(db, 'team');
        const userQuery = query(docRef, where('uid', '==', userUid));
        const userDocs = await getDocs(userQuery);
        userDocs.forEach((doc) => {
          user = {
            ...doc.data(),
            role: role,
          };
        });
        commit('SET_USER', user);
        commit('SHOW_SIGNIN', false);
        commit('SHOW_MODAL', false);
      } else if (userId.claims.costumer) {
        const userRol = userId.claims.costumer;
        let role = { userRol };
        const userUid = credentialResults.user.uid;
        const docRef = collection(db, 'users');
        const userQuery = query(docRef, where('uid', '==', userUid));
        const userDocs = await getDocs(userQuery);
        userDocs.forEach((doc) => {
          user = {
            ...doc.data(),
            role: role,
          };
        });
        commit('SET_USER', user);
        commit('SHOW_SIGNIN', false);
        commit('SHOW_MODAL', false);
      } else {
        console.error('ROLE_NOT_FOUND');
      }
    } catch (error) {
      console.error('USER_NOT_AUTHENTICATED', error);
    }
  },
  async signUserOut({ commit }, payload) {
    const auth = fireAuth;
    try {
      const signOutMessage = await signOut(auth);
      commit('SET_USER', null);
    } catch (error) {
      console.error(error);
    }
  },
  // TODO: updating user information
  changeUserImage({ commit }, payload) {
    commit('SET_USER_IMAGE', payload);
  },
  changeUserName({ commit }, payload) {
    commit('SET_USER_NAME', payload);
  },
  // TODO: params(*) name, email, password
  // sign admin up
  async signAdminUp({ commit }, payload) {
    try {
      const auth = fireAuth;
      const db = fireDataBase;
      const credentialsResult = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      const user = {
        email: payload.email,
        image: '',
        name: payload.name,
        uid: credentialsResult.user.uid,
      };
      const setAdmin = httpsCallable(fireFunctions, 'setAdmin');
      await setAdmin({ uid: credentialsResult.user.uid });
      const newTeamRef = doc(collection(db, 'team'));
      await setDoc(newTeamRef, user);
    } catch (err) {
      console.error('SIGN_ADMIN_ERROR', err);
    }
  },
  async recoverPassword({ commit }, payload) {
    try {
      const auth = fireAuth;
      sendPasswordResetEmail(auth, payload);
      commit('SENT_RECOVERY_EMAIL', true);
    } catch (e) {
      console.error('CANNOT_RECOVER_PASSWORD');
    }
  },
};

export { state, getters, mutations, actions };
