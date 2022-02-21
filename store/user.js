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
  }
};

const actions = {
  showModal({ commit }, payload) {
    commit("SHOW_MODAL", payload);
  },
  activeSignIn({ commit }, payload) {
    commit("SHOW_SIGNIN", payload)
  },
  activeSignUp({ commit }, payload) {
    commit("SHOW_SIGNUP", payload)
  },
};

export { state, getters, mutations, actions };
