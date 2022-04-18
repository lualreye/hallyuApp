import { fireStorage, fireDataBase } from "../static/js/firebaseConfig";
import {
  getDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const state = () => ({
  heroImages: [],
  heroSongs: [],
});

const getters = {
  getHeroImages(state) {
    return state.heroImages;
  },
  getHeroSongs(state) {
    return state.heroSongs;
  },
};

const mutations = {
  // HERO IMAGES
  SET_IMAGES(state, heroImages) {
    state.heroImages = heroImages;
  },
  SET_IMAGE(state, heroImage) {
    state.heroImages.push(heroImage);
  },
  // HERO SONGS
  SET_SONGS(state, heroImages) {
    state.heroSongs = heroImages;
  },
  SET_SONG(state, heroImage) {
    state.heroSongs.push(heroImage);
  },
};

const actions = {
  async uploadHeroImages({ commit }, payload) {
    try {
      const storage = fireStorage;
      const fileName = payload.name;
      const imageRef = ref(storage, `heroImages/${fileName}`);
      await uploadBytes(imageRef, payload);
      const imageUrl = await getDownloadURL(imageRef);
      const database = fireDataBase;
      const heroImageRef = doc(collection(database, "heroImages"));
      const heroImage = {
        name: payload.name.split(".").shift(),
        image: imageUrl,
      };
      await setDoc(heroImageRef, heroImage);
      commit("SET_IMAGE", heroImage);
    } catch (err) {
      console.error("CANNOT_UPLOAD_HERO_IMAGE", err);
    }
  },
  async fetchImages({ commit }) {
    try {
      const db = fireDataBase;
      const imagesSnapshot = await getDocs(collection(db, "heroImages"));
      let images = [];
      let heroImage;
      imagesSnapshot.forEach((image) => {
        let img = image.data();
        heroImage = {
          id: image.id,
          ...img,
        };
        images.push(heroImage);
      });
      commit("SET_IMAGES", images);
    } catch (err) {
      console.error("CANNOT_GET_HERO_IMAGES", err);
    }
  },
  // TODO: params(*) mp3 file
  async uploadHeroSong({ commit }, payload) {
    try {
      const storage = fireStorage;
      const fileName = payload.name;
      const songRef = ref(storage, `heroSongs/${fileName}`);
      await uploadBytes(songRef, payload);
      const songUrl = await getDownloadURL(songRef);
      const database = fireDataBase;
      const heroSongRef = doc(collection(database, "heroSongs"));
      const heroSong = {
        name: payload.name.split(".").shift(),
        image: songUrl,
      };
      await setDoc(heroSongRef, heroSong);
      commit("SET_SONG", heroSong);
    } catch (err) {
      console.error("CANNOT_UPLOAD_HERO_SONG", err);
    }
  },
  async fetchSongs({ commit }) {
    try {
      const db = fireDataBase;
      const songsSnapshot = await getDocs(collection(db, "heroSongs"));
      let songs = [];
      let heroSong;
      songsSnapshot.forEach((song) => {
        let sng = song.data();
        heroSong = {
          id: song.id,
          ...sng,
        };
        songs.push(heroSong);
      });
      commit("SET_SONGS", songs);
    } catch (err) {
      console.error("CANNOT_GET_HERO_SONGS", err);
    }
  },
};

export { state, getters, mutations, actions };