<template>
  <div
    class="w-full flex flex-col justify-center items-start mt-3 max-w-5xl px-16"
  >
    <div class="w-full flex flex-col justify-between items-start">
      <p class="text-hBlack font-open">Subamos episodios</p>
      <!-- FAKE SONG  -->
      <div
        v-if="heroVideo.videoName"
        class="w-full max-w-xl flex justify-start items-center mt-2"
      >
        <div
          class="
            w-full
            flex
            justify-between
            items-center
            hover:bg-primary
            rounded-lg
            p-2
          "
        >
          <div class="w-full flex justify-start items-center">
            <button
              class="
                w-8
                h-8
                mr-3
                bg-aquamarine
                flex
                justify-center
                items-center
                rounded-lg
              "
            >
              <GlobalHIcon :name="getMusicIcon" class="text-textColor" />
            </button>
            <p class="text-textColor font-open">
              {{ heroVideo.videoName }}
            </p>
          </div>
          <button
            class="w-6 h-6 flex justify-center items-center"
            @click="resetVideo"
          >
            <GlobalHIcon
              name="delete"
              class="text-textColor hover:text-pink-600"
            />
          </button>
        </div>
      </div>
      <div
        class="
          w-40
          bg-lightPink
          relative
          flex
          justify-center
          items-center
          py-2
          rounded-lg
          mt-3
        "
      >
        <input
          type="file"
          class="absolute w-full h-full z-60 opacity-0"
          accept="video/mp4"
          @change="onVideoChange"
        />
        <div class="w-full flex justify-center items-center">
          <div class="w-6 h-6 flex justify-center items-center mr-2">
            <GlobalHIcon name="upload" class="text-textColor" />
          </div>
          <p class="text-textColor font-open">Subir video</p>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col justify-start items-start mt-2">
      <div class="flex justify-center items-center mb-2">
        <input
          type="number"
          v-model="optionA"
          class="
            outline-none
            w-14
            py-1
            px-2
            mr-2
            rounded-lg
            border border-primary
          "
        />
        <p class="text-hBlack text-sm">puntos</p>
      </div>
      <div class="flex justify-center items-center mb-2">
        <input
          type="number"
          v-model="optionB"
          class="
            outline-none
            w-14
            py-1
            px-2
            mr-2
            rounded-lg
            border border-primary
          "
        />
        <p class="text-hBlack text-sm">puntos</p>
      </div>
      <div class="flex justify-center items-center mb-2">
        <input
          type="number"
          v-model="optionC"
          class="
            outline-none
            w-14
            py-1
            px-2
            mr-2
            rounded-lg
            border border-primary
          "
        />
        <p class="text-hBlack text-sm">puntos</p>
      </div>
    </div>
    <div
      v-if="Object.keys(getClub).length"
      class="w-full flex flex-col items-start mt-4"
    >
      <div class="flex justify-center items-center mt-3">
        <p class="text-textColor font-medium mr-3">Opcion 1:</p>
        <span class="px-2 py-1 bg-primary rounded-md">{{
          getClub.option
        }}</span>
      </div>
      <div class="flex justify-center items-center mt-3">
        <p class="text-textColor font-medium mr-3">Opcion 2:</p>
        <span class="px-2 py-1 bg-primary rounded-md">{{
          getClub.option1
        }}</span>
      </div>
      <div class="flex justify-center items-center mt-3 mb-4">
        <p class="text-textColor font-medium mr-3">Opcion 3:</p>
        <span class="px-2 py-1 bg-primary rounded-md">{{
          getClub.option2
        }}</span>
      </div>
      <div
        v-for="(video, index) in getClub.videos"
        :key="index"
        class="flex justify-end items-center mb-3"
      >
        <video :src="video.image" class="w-24"></video>
        <p class="text-textColor font-open mx-3">
          {{ video.name }}
        </p>
        <button
          class="
            w-8
            h-8
            mr-3
            bg-aquamarine
            flex
            justify-center
            items-center
            rounded-lg
          "
          @click="deleteVideo(video)"
        >
          <GlobalHIcon name="delete" class="text-textColor" />
        </button>
      </div>
    </div>
    <button
      class="w-40 flex justify-center items-center rounded-lg py-2 mt-2"
      :class="{
        'bg-primary': !isThereVideo || pointChanged,
        'bg-gray-400': isThereVideo && !pointChanged,
      }"
      :disabled="isThereVideo && !pointChanged"
      @click="uploadVideo"
    >
      <p class="text-textColor font-open">Guardar y Publicar</p>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  layout: "app",
  data: () => ({
    isOpen: false,
    heroVideos: [],
    isVideo: false,
    heroVideo: {
      object: null,
      videoName: "",
      videoImage: "",
      id: "123",
    },
    optionA: 0,
    optionB: 0,
    optionC: 0,
  }),
  computed: {
    ...mapGetters("club", ["getClub"]),
    getIcon() {
      return this.isOpen === true ? "arrowUp" : "arrowDown";
    },
    isThereVideo() {
      return this.heroVideo.object === null ? true : false;
    },
    pointChanged() {
      return (
        (Number(this.optionA) !== this.getClub.option &&
          Number(this.optionA) !== 0) ||
        (Number(this.optionB) !== this.getClub.option1 &&
          Number(this.optionB) !== 0) ||
        (Number(this.optionC) !== this.getClub.option2 &&
          Number(this.optionC) !== 0)
      );
    },
    getMusicIcon() {
      return this.state === true ? "pause" : "play";
    },
  },
  mounted() {
    if (!Object.keys(this.getClub).length) {
      this.fetchClub();
    }
  },
  methods: {
    ...mapActions("club", ["uploadClub", "fetchClub", "deleteVideo"]),
    onVideoChange(e) {
      const file = e.target.files[0];
      const videoObject = file;
      const videoName = videoObject.name.split(".").shift();
      this.heroVideo.object = videoObject;
      this.heroVideo.videoName = videoName;
    },
    uploadVideo() {
      const optionA = Number(this.optionA);
      const optionB = Number(this.optionB);
      const optionC = Number(this.optionC);
      let video;
      let name;
      if (this.heroVideo.object !== null && this.heroVideo.videoName.length) {
        video = this.heroVideo.object;
        name = this.heroVideo.videoName;
        this.uploadClub({
          option: optionA,
          option1: optionB,
          option2: optionC,
          video: {
            name: name,
            image: video,
          },
        });
      } else {
        this.uploadClub({
          option: optionA,
          option1: optionB,
          option2: optionC,
          video: {},
        });
      }
      this.resetVideo();
    },
    resetVideo() {
      this.heroVideo = {
        object: null,
        videoName: "",
        videoImage: "",
        id: "123",
      };
    },
    removeVideo(video) {
      this.deleteVideo(video);
    },
    // fetchHeroVideos() {
    //   if (!this.getHeroSongs.length) {
    //     this.fetchSongs();
    //   } else {
    //     return;
    //   }
    // },
  },
};
</script>
