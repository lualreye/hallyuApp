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
});

const getters = {
  getPosts(state) {
    return state.posts;
  },
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
};

const actions = {
  // TODO params (*) post
  async uploadPost({ commit }, payload) {
    try {
      console.log(payload);
      const db = fireDataBase;
      const storage = fireStorage;
      const filename = payload.img.name.split(".").shift();
      const imageRef = ref(storage, `posts/${filename}`);
      await uploadBytes(imageRef, payload.img);
      const imageUrl = await getDownloadURL(imageRef);
      const postRef = doc(collection(db, "posts"));
      const post = {
        name: payload.name.toLowerCase(),
        body: payload.body,
        date: payload.date,
        image: imageUrl,
        id: bandRef.id,
      };
      await setDoc(postRef, post);
      commit("SET_POST", post);
    } catch (err) {
      console.error("CANNOT_UPLOAD_POST");
    }
  },
  async fetchPosts({ commit }) {
    try {
      let posts = [];
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
};

export { state, getters, mutations, actions };
