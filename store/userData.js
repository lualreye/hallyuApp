import { fireStorage, fireDataBase } from "../static/js/firebaseConfig"
import { doc, getDocs, updateDoc } from "firebase/firestore"

const state = () => ({
  profileIsOpen: false
})

const getters = {
  getProfile(state) {
    return state.profileIsOpen
  }
}

const mutations = {
  SHOW_PROFILE(state, boolean) {
    state.profileIsOpen = boolean
  }
}


const actions = {
  //TODO: params(*) boolean
  // open menu
  showProfile({commit}, payload) {
    commit("SHOW_PROFILE", payload)
  },
  // TODO: params object image
  async udpateProfile({ commit }, payload) {
    const storeRef = fireStorage
    const db = fireDataBase
    console.log(payload.email)
    try {
      let userUid;
      const userCollectionRef = collection(db, "users")
      const userQuery = query(userCollectionRef, where("users", "==", payload.email))
      const userSnapshot = await getDocs(userQuery)
      userSnapshot.forEach((doc) => {
        userUid = doc.uid
      })
      const docRef = doc(fireDataBase, "users", userUid)
      console.log(docRef, payload.email, payload,image)
      // await updateDoc(docRef, {
      //   image: payload.image
      //   name: payload.name
      // })
    } catch (error) {
      console.error(error)
    }
  }
}



export {
  state,
  getters,
  mutations,
  actions
}