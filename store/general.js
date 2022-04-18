



const state = () => ({
  heroImages: [],
});

const getters = {
  getHeroImages(state) {
    return state.heroImages;
  },
};

const mutations = {
  SET_IMAGES(state, heroImages) {
    state.heroImages = heroImages;
  },
  SET_IMAGE(state, heroImage) {
    state.heroImages.push(heroImage)
  }
};

const actions = {
  async uploadHeroImages({ commit }, payload) {
    try {
      console.log(payload)
      commit("SET_IMAGE", image)
    } catch (err) {
      console.error("CANNOT_UPLOAD_HERO_IMAGE", err);
    }
  },
  async getHeroImages({commit}) {
    try {

      commit("SET_IMAGES", heroImages)
    } catch(err) {
      console.error("CANNOT_GET_HERO_IMAGES", err)
    }
  }
};

export { state, getters, mutations, actions };
