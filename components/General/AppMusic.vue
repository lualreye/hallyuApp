<template>
  <div class="w-full flex flex-col justify-center items-start mt-3">
    <button
      class="w-96 flex justify-start items-center border border-text-gray-400 rounded-lg p-2"
      @click="openModal"
    >
      <div>
        <div class="w-6 h-6 flex justify-center items-center mr-3">
          <GlobalHIcon :name="getIcon" class="text-textColor" />
        </div>
      </div>
      <p class="text-textColor font-open">Música</p>
    </button>
    <div v-if="isOpen" class="w-full max-w-md mt-3 p-2">
      <div class="w-full flex flex-col justify-between items-start">
        <p class="text-hBlack font-open">Música de Hallyu</p>
        <!-- FAKE SONG  -->
        <div
          v-if="heroSong.songName"
          class="w-full flex justify-start items-center mt-2"
        >
          <div
            class="w-full flex justify-between items-center hover:bg-primary rounded-lg p-2"
          >
            <div class="w-full flex justify-start items-center">
              <button
                class="w-8 h-8 mr-3 bg-aquamarine flex justify-center items-center rounded-lg"
              >
                <GlobalHIcon :name="getMusicIcon" class="text-textColor" />
              </button>
              <p class="text-textColor font-open">
                {{ heroSong.songName }}
              </p>
            </div>
            <button
              class="w-6 h-6 flex justify-center items-center"
              @click="resetSng"
            >
              <GlobalHIcon
                name="delete"
                class="text-textColor hover:text-pink-600"
              />
            </button>
          </div>
        </div>
        <div
          class="w-40 bg-lightPink relative flex justify-center items-center py-2 rounded-lg mt-3"
        >
          <input
            type="file"
            class="absolute w-full h-full z-60 opacity-0"
            accept=".mp3"
            @change="onSongChange"
          />
          <div class="w-full flex justify-center items-center">
            <div class="w-6 h-6 flex justify-center items-center mr-2">
              <GlobalHIcon name="upload" class="text-textColor" />
            </div>
            <p class="text-textColor font-open">Subir canción</p>
          </div>
        </div>
      </div>
      <div
        v-if="getHeroSongs.length"
        class="w-full flex flex-col justify-start items-center mt-2"
      >
        <GeneralCardsSongs
          v-for="(heroSong, index) in getHeroSongs"
          :key="index"
          :songName="heroSong.name"
          :songImage="heroSong.image"
          :state="heroSong.isPlaying"
          :id="heroSong.id"
          class="mt-3"
        />
      </div>
      <div v-else class="w-full flex justify-start items-center mt-2">
        <div class="w-full flex justify-start items-center">
          <div
            class="w-8 h-8 mr-3 border border-dashed border-gray-400 flex justify-center items-center rounded-lg"
          >
            <div class="w-6 h-6 flex justify-center items-center">
              <GlobalHIcon name="plus" class="text-textColor" />
            </div>
          </div>
          <p class="text-textColor font-open">Nombre de la canción</p>
        </div>
      </div>
      <button
        class="w-40 flex justify-center items-center rounded-lg py-2 mt-2"
        :class="{ 'bg-primary': !isThereSong, 'bg-gray-400': isThereSong }"
        :disabled="isThereSong"
        @click="uploadSong"
      >
        <p class="text-textColor font-open">Guardar y Publicar</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    isOpen: false,
    heroSongs: [],
    isSong: false,
    heroSong: {
      object: null,
      songName: "",
      songImage: "",
      id: "123",
    },
  }),
  computed: {
    ...mapGetters("music", ["getHeroSongs"]),
    getIcon() {
      return this.isOpen === true ? "arrowUp" : "arrowDown";
    },
    isThereSong() {
      return this.heroSong.object === null ? true : false;
    },
    getMusicIcon() {
      return this.state === true ? "pause" : "play";
    },
  },
  methods: {
    ...mapActions("music", ["uploadHeroSong", "fetchSongs"]),
    openModal() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.fetchHeroSongs();
        this.isOpen = true;
      }
    },
    onSongChange(e) {
      const file = e.target.files[0];
      const songObject = file;
      const songName = songObject.name.split(".").shift();
      this.heroSong.object = songObject;
      this.heroSong.songName = songName;
    },
    uploadSong() {
      const song = this.heroSong.object;
      this.uploadHeroSong(song);
      this.resetSng()
    },
    resetSng() {
      this.heroSong = {
        object: null,
        songName: "",
        songImage: "",
        id: "123",
      };
    },
    fetchHeroSongs() {
      if (!this.getHeroSongs.length) {
        this.fetchSongs();
      } else {
        return;
      }
    },
  },
};
</script>
