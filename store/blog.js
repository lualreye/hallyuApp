import { fireStorage, fireDataBase } from "../static/js/firebaseConfig";
import {
  getDocs,
  setDoc,
  doc,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

const state = () => ({
  posts: [],
  editingPost: {},
});

const getters = {
  getPosts(state) {
    return state.posts;
  },
  getEditingPost(state) {
    return state.editingPost
  }
};

const mutations = {
  SET_POST(state, post) {
    state.posts.push(post);
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  DELETE_POST(state, id) {
    const postId = state.posts.findIndex((post) => post.id === id);
    state.posts.splice(postId, 1);
  },
  RESET_EDITING_POST(state) {
    state.editingPost = {}
  },
  SET_EDITING_POST(state, id) {
    const postId = state.posts.findIndex((post) => post.id === id)
    state.editingPost = state.posts[postId]
  }
};

const actions = {
  // TODO params (*) post
  async uploadPost({ commit }, payload) {
    try {
      const db = fireDataBase;
      const storage = fireStorage;
      const filename = payload.image.name.split(".").shift();
      const imageRef = ref(storage, `posts/${filename}`);
      await uploadBytes(imageRef, payload.image);
      const imageUrl = await getDownloadURL(imageRef);
      const postRef = doc(collection(db, "posts"));
      const post = {
        title: payload.title.toLowerCase(),
        body: payload.body,
        date: payload.date,
        image: imageUrl,
        id: postRef.id,
        comments: [],
      };
      await setDoc(postRef, post);
      commit("SET_POST", post);
    } catch (err) {
      console.error("CANNOT_UPLOAD_POST");
    }
  },
  async fetchPosts({ commit }) {
    try {
      const db = fireDataBase;
      let posts = [];
      const qSnapshot = await getDocs(collection(db, "posts"));
      qSnapshot.forEach((post) => {
        let ps = {
          ...post.data(),
        };
        posts.push(ps);
      });
      commit("SET_POSTS", posts);
    } catch (err) {
      console.error("CANNOT_GET_POSTS");
    }
  },
  async deletePost({ commit }, payload) {
    try {
      commit("DELETE_POST", payload);
    } catch (err) {
      console.error("CANNOT _DELETE_POST");
    }
  },
  editPost({commit}, payload) {
    commit("RESET_POST")
    commit("SET_EDITING_POST", payload)
  },
  resetEditingPost({commit}) {
    commit("RESET_EDITING_POST")
  }
};

export { state, getters, mutations, actions };
