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
  heroSongs: [],
  playlist: [],
  indexPlaylist: [],
});

const getters = {
  getHeroSongs(state) {
    return state.heroSongs;
  },
  getIsPlaying(state) {
    return state.isPlaying;
  },
  getIndexPlaylist(state) {
    return state.indexPlaylist;
  },
};

const mutations = {
  // HERO SONGS
  SET_SONGS(state, heroImages) {
    state.heroSongs = heroImages;
  },
  SET_PLAYLIST(state, playlist) {
    state.indexPlaylist = playlist;
  },
  SET_SONG(state, heroImage) {
    state.heroSongs.push(heroImage);
  },
  DELETE_SONG(state, id) {
    const imageId = state.heroSongs.findIndex((image) => image.id === id);
    state.heroSongs.splice(imageId, 1);
  },
  RESET_PLAYING_SONG(state) {
    state.playedSong = '';
  },
  SET_PLAYING_SONG(state, id) {
    const songId = state.heroSongs.findIndex((song) => song.id === id);
    for (let i = 0; i < state.heroSongs.length; i++) {
      state.heroSongs[i].isPlaying = false;
    }
    if (state.playlist.length === 0) {
      state.playlist.push({
        audio: new Audio(state.heroSongs[songId].image),
        name: state.heroSongs[songId].image,
      });
      state.heroSongs[songId].isPlaying = true;
      state.playlist[0].audio.play();
      return;
    }
    if (state.playlist[0].name === state.heroSongs[songId].image) {
      state.playlist[0].audio.pause();
      state.heroSongs[songId].isPlaying = false;
      state.playlist = [];
      return;
    }
    state.playlist[0].audio.pause();
    state.playlist = [];
    state.playlist.push({
      audio: new Audio(state.heroSongs[songId].image),
      name: state.heroSongs[songId].image,
    });
    state.playlist[0].audio.play();
    state.heroSongs[songId].isPlaying = true;
  },
};

const actions = {
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
          isPlaying: false,
        };
        songs.push(heroSong);
      });
      commit('SET_SONGS', songs);
      commit('SET_PLAYLIST', songs);
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
  async playMusic({ commit }, payload) {
    try {
      commit('RESET_PLAYING_SONG');
      commit('SET_PLAYING_SONG', payload);
    } catch (err) {
      console.error('CANNOT_PLAY_SONG', err);
    }
  },
};

export { state, getters, mutations, actions };
