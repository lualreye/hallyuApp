const state = ({
  posts: []
})

const getters = {
  getPosts(state) {
    return state.posts
  }
}

const mutations = {
  SET_POST(state, post) {
    state.posts.push(post)
  },
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  DELETE_POST(state, id) {
    const postId = state.posts.findIndex((post) => post.id === id);
    state.posts.splice(postId, 1);
  }
}

const actions = {
  // TODO params (*) post
  async uploadPost({ commit }, payload) {
    try {
      console.log(payload)
      const post = {}
      commit("SET_POST", post)
    } catch(err) {
      console.error("CANNOT_UPLOAD_POST")
    }
  },
  async fetchPosts({ commit }) {
    try {
      let posts = []
      commit("SET_POSTS", posts)
    } catch(err) {
      console.error("CANNOT_GET_POSTS")
    }
  },
  async deletePost({ commit }, payload) {
    try {
      commit("DELETE_POST", payload)
    } catch(err) {
      console.error("CANNOT _DELETE_POST")
    }
  }
}