import { fireStorage, fireDataBase } from '../static/js/firebaseConfig';
import {
  getDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  setDoc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const state = () => ({
  heroImages: [],
  heroSongs: [],
  selectedHero: '',
  greetings: '',
  communityGreeting: '',
  discount: {},
  displayTicket: false
});

const getters = {
  getHeroImages(state) {
    return state.heroImages;
  },
  getHeroSongs(state) {
    return state.heroSongs;
  },
  getHero(state) {
    return state.selectedHero;
  },
  getGreetings(state) {
    return state.greetings;
  },
  getCommunityGreeting(state) {
    return state.communityGreeting;
  },
  getDiscount(state) {
    return state.discount;
  },
  getDisplayTicket(state) {
    return state.displayTicket;
  }
};

const mutations = {
  // HERO IMAGES
  SET_IMAGES(state, heroImages) {
    state.heroImages = heroImages;
  },
  SET_IMAGE(state, heroImage) {
    state.heroImages.push(heroImage);
  },
  DELETE_IMAGE(state, id) {
    const imageId = state.heroImages.findIndex((image) => image.id === id);
    state.heroImages.splice(imageId, 1);
  },
  // HERO SONGS
  SET_SONGS(state, heroImages) {
    state.heroSongs = heroImages;
  },
  SET_SONG(state, heroImage) {
    state.heroSongs.push(heroImage);
  },
  DELETE_SONG(state, id) {
    const imageId = state.heroSongs.findIndex((image) => image.id === id);
    state.heroSongs.splice(imageId, 1);
  },
  SET_SELECTED_HERO(state, payload) {
    state.selectedHero = payload;
  },
  SET_GREETING(state, greetings) {
    state.greetings = ""
    state.greetings = greetings.greetings
  },
  SET_COMMUNITY_GREETING(state, greetings) {
    state.communityGreeting = ""
    state.communityGreeting = greetings.greetings
  },
  SET_DISCOUNT_CODE(state, discount) {
    state.discount = discount
  },
  DISPLAY_TICKET(state, boolean) {
    state.displayTicket = boolean
  }
};

const actions = {
  // CRUD IMAGES
  async uploadHeroImages({ commit }, payload) {
    try {
      const storage = fireStorage;
      const fileName = payload.name;
      const imageRef = ref(storage, `heroImages/${fileName}`);
      await uploadBytes(imageRef, payload);
      const imageUrl = await getDownloadURL(imageRef);
      const database = fireDataBase;
      const heroImageRef = doc(collection(database, 'heroImages'));
      const heroImage = {
        name: payload.name.split('.').shift(),
        image: imageUrl,
        id: heroImageRef.id,
      };
      await setDoc(heroImageRef, heroImage);
      commit('SET_IMAGE', heroImage);
    } catch (err) {
      console.error('CANNOT_UPLOAD_HERO_IMAGE', err);
    }
  },
  async fetchImages({ commit }) {
    try {
      const db = fireDataBase;
      const imagesSnapshot = await getDocs(collection(db, 'heroImages'));
      let images = [];
      let heroImage;
      imagesSnapshot.forEach((image) => {
        let img = image.data();
        heroImage = {
          ...img,
        };
        images.push(heroImage);
      });
      commit('SET_IMAGES', images);
    } catch (err) {
      console.error('CANNOT_GET_HERO_IMAGES', err);
    }
  },
  async deleteImage({ commit }, payload) {
    try {
      const db = fireDataBase;
      await deleteDoc(doc(db, 'heroImages', payload));
      commit('DELETE_IMAGE', payload);
    } catch (err) {
      console.error('CANNOT_DELETE_IMAGE', err);
    }
  },
  // TODO: CRUD SONGS
  // TODO: params(*) mp3 file
  async uploadHeroSong({ commit }, payload) {
    try {
      const storage = fireStorage;
      const fileName = payload.name;
      const songRef = ref(storage, `heroSongs/${fileName}`);
      await uploadBytes(songRef, payload);
      const songUrl = await getDownloadURL(songRef);
      const database = fireDataBase;
      const heroSongRef = doc(collection(database, 'heroSongs'));
      const heroSong = {
        name: payload.name.split('.').shift(),
        image: songUrl,
        id: heroSongRef.id,
      };
      await setDoc(heroSongRef, heroSong);
      commit('SET_SONG', heroSong);
    } catch (err) {
      console.error('CANNOT_UPLOAD_HERO_SONG', err);
    }
  },
  async fetchSongs({ commit }) {
    try {
      const db = fireDataBase;
      const songsSnapshot = await getDocs(collection(db, 'heroSongs'));
      let songs = [];
      let heroSong;
      songsSnapshot.forEach((song) => {
        let sng = song.data();
        heroSong = {
          ...sng,
        };
        songs.push(heroSong);
      });
      commit('SET_SONGS', songs);
    } catch (err) {
      console.error('CANNOT_GET_HERO_SONGS', err);
    }
  },
  async deleteSong({ commit }, payload) {
    try {
      const db = fireDataBase;
      await deleteDoc(doc(db, 'heroSongs', payload));
      commit('DELETE_SONG', payload);
    } catch (err) {
      console.error('CANNOT_DELETE_IMAGE', err);
    }
  },
  selectHero({ commit }, payload) {
    commit('SET_SELECTED_HERO', payload);
  },
  async uploadGreetings({ commit }, payload) {
    try {
      const db = fireDataBase
      const ref = doc(db, 'greetings', 'mIuR9T3Lz1xLpH9eeTGP')
      await updateDoc(ref, {
        "greetings": payload 
      })
      commit('SET_GREETING', payload)
    } catch(err) {
      console.error('CANNOT_ADD_GREETINGS', err)
    }
  },
  async uploadCommunityQuote({ commit }, payload) {
    try {
      const db = fireDataBase
      const ref = doc(db, 'communityQuote', '23YedEECc5AiupFpWwEn')
      await updateDoc(ref, {
        "greetings": payload 
      })
      commit('SET_COMMUNITY_GREETING', payload)
    } catch(err) {
      console.error('CANNOT_ADD_GREETINGS', err)
    }
  },
  async uploadDiscountCode({ commit }, payload) {
    try {
      const db = fireDataBase
      const ref = doc(db, 'discountCode', 'DsE46KoDYceJSaj2W0Ae')
      await updateDoc(ref, {
        "code": payload.code,
        "codeDiscount": payload.codeDiscount 
      })
    } catch(err) {
      console.error('CANNOT_ADD_GREETINGS', err)
    }
  },
  async fetchGreetings({commit}) {
    try {
      const db = fireDataBase
      const ref = doc(db, 'greetings', 'mIuR9T3Lz1xLpH9eeTGP')
      const snap = await getDoc(ref)
      const greeting = snap.data()
      commit('SET_GREETING', greeting)
    } catch (err) {
      console.error('CANNOT_GET_GREETINGS', err)
    }
  },
  async fetchCommunityGreetings({commit}) {
    try {
      const db = fireDataBase
      const ref = doc(db, 'communityQuote', '23YedEECc5AiupFpWwEn')
      const snap = await getDoc(ref)
      const greeting = snap.data()
      commit('SET_COMMUNITY_GREETING', greeting)
    } catch (err) {
      console.error('CANNOT_GET_GREETINGS', err)
    }
  },
  async fetchDiscountCode({commit}) {
    try {
      const db = fireDataBase
      const ref = doc(db, 'discountCode', 'DsE46KoDYceJSaj2W0Ae')
      const snap = await getDoc(ref)
      const discount = snap.data()
      commit('SET_DISCOUNT_CODE', discount)
    } catch (err) {
      console.error('CANNOT_GET_GREETINGS', err)
    }
  },
  showTicket({ commit, getters }) {
    commit('DISPLAY_TICKET', !getters.getDisplayTicket)
  }
};

export { state, getters, mutations, actions };
