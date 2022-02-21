const state = () => ({
  isModalActive: true,
  isSignUpActive: true,
  isSingInActive: false,
});

const getters = {
  getModal(state) {
    return state.isModalActive;
  },
  getSingIn(state) {
    return state.isSingInActive;
  },
  getSingUp(state) {
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
    console.log("Estamos en actions");
    commit("SHOW_MODAL", payload);
  },
  activeSignIn({ commit }, payload) {
    commit("SHOW_SIGNIN", payload)
  },
  activeSignUp({ commit }, payload) {
    console.log('activating signUp')
    commit("SHOW_SIGNUP", payload)
  },
};

export { state, getters, mutations, actions };
