const state = () => ({
  isModalActive: true,
  isSignUpActive: false,
  isSignInActive: true,
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
    console.log('eSTAMOS EN EL MUTATION')
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
    console.log('Estamos en el accion de cierre')
    commit("SHOW_SIGNIN", payload)
  },
  activeSignUp({ commit }, payload) {
    console.log('activating signUp')
    commit("SHOW_SIGNUP", payload)
  },
};

export { state, getters, mutations, actions };
