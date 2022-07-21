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
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const state = () => ({
  club: {}
});

const getters = {
  getClub(state) {
    return state.club;
  },
};

const mutations = {
  // HERO SONGS
  SET_CLUB(state, club) {
    state.club = club;
  },
  REMOVE_VIDEO(state, video) {
    const idx = state.club.videos.findIndex(vid => vid.image === video.image)
    state.club.videos.splice(idx, 1)
  },
  ADD_VIDEO(state, video) {
    console.log('estamos en add', video)
    state.club.videos.push(video)
  }
};

const actions = {
  // TODO: CRUD SONGS
  // TODO: params(*) mp3 file
  async uploadClub({ commit }, payload) {
    try {
      const storage = fireStorage;
      let videoUrl = ''
      if(Object.keys(payload.video).length) {
        const fileName = payload.video.name;
        const videoRef = ref(storage, `clubVideos/${fileName}`);
        await uploadBytes(videoRef, payload.video.image);
        videoUrl = await getDownloadURL(videoRef);
      }
      const database = fireDataBase;
      const heroVideoRef = doc(database, 'club', 'ae8stDTjGj7Cga3OvhEd');
      if(!videoUrl.length) {
        await updateDoc(heroVideoRef, {
          option: payload.option,
          option1: payload.option1,
          option2: payload.option2,
        });
      } else {
        const heroVideo = {
          name: payload.video.name,
          image: videoUrl,
        };
        console.log({...heroVideo})
        await updateDoc(heroVideoRef, {
          option: payload.option,
          option1: payload.option1,
          option2: payload.option2,
          videos: arrayUnion({...heroVideo})
        });
        commit('ADD_VIDEO', {...heroVideo})
      }
      // commit('SET_SONG', heroSong);
    } catch (err) {
      console.error('CANNOT_UPLOAD_CLUB_VIDEO', err);
    }
  },
  async fetchClub({ commit }) {
    try {
      const db = fireDataBase;
      const videoSnapshot = await getDoc(doc(db, 'club', 'ae8stDTjGj7Cga3OvhEd'));
      let club = {}
      if (videoSnapshot.exists()) {
        club = videoSnapshot.data()
      }
      commit('SET_CLUB', club)
    } catch (err) {
      console.error('CANNOT_GET_HERO_SONGS', err);
    }
  },
  async deleteVideo({ commit }, payload) {
    try {
      const db = fireDataBase
      const clubRef = doc(db, 'club', 'ae8stDTjGj7Cga3OvhEd')
      await updateDoc(clubRef, {
        videos: arrayRemove(payload)
      })
      commit('REMOVE_VIDEO', payload)
    } catch(err) {
      console.error('CANNOT_DELETE_VIDEO', err)
    }
  }
};

export { state, getters, mutations, actions };
