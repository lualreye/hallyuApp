const state = () => ({
  categories: [],
});

const getters = {
  getCategories(state) {
    return state.categories;
  },
};

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_CATEGORY(state, category) {
    state.categories.push(category);
  },
};

const actions = {
  async uploadCategory({ commit }, payload) {
    try {
    } catch (err) {
      console.error("CANNOT_UPLOAD_CATEGORY");
    }
  },
  async fetchCategories({ commit }) {
    try {
    } catch (err) {
      console.error("CANNOT_GET_CATEGORIES");
    }
  },
  async deleteCategory({ commit }, payload) {
    try {
    } catch (err) {
      console.error("CANNOT_DELETE_CATEGORY");
    }
  },
};

export { state, getters, mutations, actions };
