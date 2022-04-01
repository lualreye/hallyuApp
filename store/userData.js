import { fireStorage, fireDataBase } from "../static/js/firebaseConfig";
import { doc, getDocs, updateDoc, collection, where, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const state = () => ({
  profileIsOpen: false,
});

const getters = {
  getProfile(state) {
    return state.profileIsOpen;
  },
};

const mutations = {
  SHOW_PROFILE(state, boolean) {
    state.profileIsOpen = boolean;
  },
};

const actions = {
  //TODO: params(*) boolean
  // open menu
  showProfile({ commit }, payload) {
    commit("SHOW_PROFILE", payload);
  },
  // TODO: params(*) object image, username
  async updateProfile({ commit }, payload) {
    const db = fireDataBase;
    let userId
    try {
      const collectionRef = collection(db, "users");
      const userQuery = query(collectionRef, where("email", "==", payload.email));
      const userResult = await getDocs(userQuery)
      userResult.forEach((doc) => {
        userId = doc.id;
      });
      const filename = payload.image.imageUrl.split("/").pop();
      const ext = payload.image.imageObject.name.split(".").pop();
      const file = filename + "." + ext;
      const imagesRef = ref(fireStorage, "users/" + file);
      await uploadBytes(imagesRef, payload.image.imageObject);
      const imageUrl = await getDownloadURL(imagesRef);
      const userData = {
        image: imageUrl,
        name: payload.name
      }
      const userRef = doc(db, "users", userId)
      await updateDoc(userRef, userData);
    } catch (error) {
      console.error("ERROR_UPDATING_DATA", error);
    }
  },
};

export { state, getters, mutations, actions };
