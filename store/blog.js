import { fireStorage, fireDataBase } from "../static/js/firebaseConfig";
import {
  getDocs,
  setDoc,
  doc,
  collection,
  deleteDoc,
  updateDoc
} from "firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

const state = () => ({
  posts: [],
  editingPost: {},
  isEditing: false,
});

const getters = {
  getPosts(state) {
    return state.posts;
  },
  getEditingPost(state) {
    return state.editingPost;
  },
  getIsEditing(state) {
    return state.isEditing;
  },
};

const mutations = {
  SET_POST(state, post) {
    state.posts.push(post);
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  UPDATE_POST(state, updatedPost) {
    const postId = state.posts.findIndex((post) => post.id === updatedPost.id);
    state.posts[postId] = updatedPost
  },
  DELETE_POST(state, id) {
    const postId = state.posts.findIndex((post) => post.id === id);
    state.posts.splice(postId, 1);
  },
  RESET_EDITING_POST(state) {
    state.editingPost = {};
  },
  SET_EDITING_POST(state, id) {
    const postId = state.posts.findIndex((post) => post.id === id);
    state.editingPost = state.posts[postId];
  },
  SET_EDITING(state, boolean) {
    state.isEditing = boolean;
  },
};

const actions = {
  // TODO params (*) post
  async uploadPost({ commit, getters }, payload) {
    try {
      const db = fireDataBase;
      const storage = fireStorage;
      let imageUrl;
      if (Object.keys(getters.getEditingPost).length) {
        let updatedPost
        const postId = getters.getEditingPost.id
        const postRef = doc(db, "posts", postId);
        if (payload.image instanceof File) {
          const filename = payload.image.name.split(".").shift();
          const imageRef = ref(storage, `posts/${filename}`);
          await uploadBytes(imageRef, payload.image);
          imageUrl = await getDownloadURL(imageRef);
          await updateDoc(postRef, { image: imageUrl });
          updatedPost = {
            image: imageUrl
          }
        } else {
          updatedPost = {
            image: payload.image
          }
        }
        updatedPost = {
          title: payload.title.toLowerCase(),
          description: payload.description,
          body: payload.body,
          date: payload.date,
          ...updatedPost
        };
        await updateDoc(postRef, { ...updatedPost });
        commit("UPDATE_POST", { ...updatedPost, id: postId});
        commit("SET_EDITING", false);
      } else {
        const filename = payload.image.name.split(".").shift();
        const imageRef = ref(storage, `posts/${filename}`);
        await uploadBytes(imageRef, payload.image);
        imageUrl = await getDownloadURL(imageRef);
        const postRef = doc(collection(db, "posts"));
        const post = {
          title: payload.title.toLowerCase(),
          description: payload.description,
          body: payload.body,
          date: payload.date,
          image: imageUrl,
          id: postRef.id,
          comments: [],
        };
        await setDoc(postRef, post);
        commit("SET_POST", post);
        commit("SET_EDITING", false);
      }
    } catch (err) {
      console.error("CANNOT_UPLOAD_POST", err);
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
  async deletePost({ commit, getters }, payload) {
    try {
      const db = fireDataBase
      const postId = getters.getPosts.findIndex(x => x.id === payload)
      await deleteDoc(doc(db, "posts", getters.getPosts[postId].id))
      commit("DELETE_POST", payload);
    } catch (err) {
      console.error("CANNOT _DELETE_POST", err);
    }
  },
  editPost({ commit }, payload) {
    commit("RESET_EDITING_POST");
    commit("SET_EDITING_POST", payload);
    commit("SET_EDITING", true);
  },
  resetEditingPost({ commit, getters }) {
    commit("RESET_EDITING_POST");
  },
  showEditing({ commit }, payload) {
    commit("SET_EDITING", payload);
  },
};

export { state, getters, mutations, actions };
