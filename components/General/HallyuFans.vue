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
      <p class="text-textColor font-open">Hallyu Fans</p>
    </button>
    <div v-if="isOpen" class="w-full mt-3">
      <button
        v-if="!isEditing"
        class="w-44 flex justify-start itesm-center"
        @click="edit"
      >
        <div class="2-6 h-6 flex jsutify-center items-center">
          <GlobalHIcon name="plus" class="text-textColor" />
        </div>
        <p class="text-textColor font-open">Añadir fan</p>
      </button>
      <div
        v-else
        class="w-full max-w-sm flex flex-wrap justify-start items-center pl-3"
      >
        <!-- UPLOAD FAN IMAGE -->
        <div class="w-full sm:w-1/2 flex justify-center items-center">
          <div class="w-32 flex justify-center items-center flex-col">
            <label class="w-full text-textColor font-open text-xs">
              Portada
            </label>
            <div
              class="relative h-32 w-32 border border-primary rounded-lg flex justify-center items-center"
            >
              <input
                type="file"
                class="h-32 w-full absolute top-0 bottom-0 left-0 opacity-0 z-60"
                @change="uploadFanImage"
              />
              <div
                v-if="!isImage"
                class="w-full flex justify-center items-center"
              >
                <img
                  :src="image.url"
                  class="w-full h-32 object-cover object-center rounded-lg"
                />
              </div>
              <div
                v-else
                class="w-full text-textColor flex justify-center items-center"
              >
                <div class="w-6 h-6 flex justify-center items-center mr-2">
                  <GlobalHIcon name="upload" class="text-textColor" />
                </div>
                <p class="text textColor text-xs">Sube una imagen</p>
              </div>
            </div>
          </div>
        </div>
        <!-- UPLOAD FAN NAME -->
        <div class="w-full sm:w-1/2 flex flex-col justify-center items-center">
          <label class="w-full text-textColor font-open text-xs">
            Nombre
          </label>
          <div
            class="w-full p-2 text-textColor border border-primary rounded-lg flex justify-center items-center"
          >
            <p class="text-textColor mr-2">@</p>
            <input
              v-model="name"
              type="text"
              class="w-3/4 border-none outline-none"
            />
          </div>
          <div class="w-full flex justify-between items-center mt-3">
            <div
              class="py-2 w-20 rounded-lg flex justify-center items-center bg-lightPink"
              @click="edit"
            >
              Cancelar
            </div>
            <div
              class="py-2 w-20 rounded-lg flex justify-center items-center"
              :class="{
                'bg-primary': isReadyToUpload,
                'bg-gray-400': !isReadyToUpload,
              }"
              :disabled="!!isReadyToUpload"
              @click="uploadFn"
            >
              Guardar
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="getFans.length"
        class="w-full max-w-md flex flex-col justify-center items-start my-2"
      >
        <GeneralCardsFan
          v-for="(fn, index) in getFans"
          :key="index"
          :image="fn.image"
          :fanName="fn.name"
          :id="fn.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    isOpen: false,
    isEditing: false,
    name: null,
    image: {
      object: null,
      url: null,
    },
  }),
  computed: {
    ...mapGetters("fans", ["getFans"]),
    getIcon() {
      return this.isOpen === true ? "arrowUp" : "arrowDown";
    },
    isImage() {
      return this.image.url === null;
    },
    isReadyToUpload() {
      return this.image.object !== null &&
        this.name !== null &&
        this.name !== ""
        ? true
        : false;
    },
  },
  methods: {
    ...mapActions("fans", ["uploadFan", "fetchFans"]),
    openModal() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
        this.fetchFn();
      }
    },
    edit() {
      if (this.isEditing) {
        this.name = null;
        this.image = {
          object: null,
          url: null,
        };
        this.isEditing = false;
      } else {
        this.isEditing = true;
      }
    },
    uploadFanImage(e) {
      const file = e.target.files[0];
      if (file === "" || file === null || file === undefined) {
        return;
      }
      const imgObj = file;
      const imgUrl = URL.createObjectURL(file);
      this.image.url = imgUrl;
      this.image.object = imgObj;
    },
    uploadFn() {
      const fan = {
        name: `https://www.instagram.com/${this.name}`,
        img: this.image.object,
      };
      this.name = null;
      this.image = {
        object: null,
        url: null,
      };
      this.uploadFan(fan);
    },
    fetchFn() {
      if (!this.getFans.length) {
        this.fetchFans();
      } else {
        return;
      }
    },
  },
};
</script>
