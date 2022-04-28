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
      <p class="text-textColor font-open">Subir Portadas</p>
    </button>
    <div v-if="isOpen" class="w-full max-w-md mt-3 p-2">
      <div class="w-full flex flex-col flex-wrap justify-between items-start">
        <p class="text-hBlack font-open">Imagenes de Bienvenida</p>
        <div
          v-if="heroImage.url"
          class="w-full flex justify-between items-center hover:bg-primary rounded-lg p-2"
        >
          <div class="w-full flex justify-start items-center">
            <div
              class="w-8 h-8 mr-3 bg-aquamarine flex justify-center items-center rounded-lg"
            >
              <img
                :src="heroImage.url"
                class="w-full h-8 rounded-lg object-cover object-center"
              />
            </div>
            <p class="text-textColor font-open">
              {{ heroImage.imageName }}
            </p>
          </div>
          <button
            class="w-6 h-6 flex justify-center items-center"
            @click="resetImage"
          >
            <GlobalHIcon
              name="delete"
              class="text-textColor hover:text-pink-600"
            />
          </button>
        </div>
        <div
          class="w-40 bg-lightPink relative flex justify-center items-center py-2 rounded-lg mt-3"
        >
          <input
            type="file"
            class="absolute w-full h-full z-60 opacity-0"
            @change="onImageChange"
          />
          <div class="w-full flex justify-center items-center">
            <div class="w-6 h-6 flex justify-center items-center mr-2">
              <GlobalHIcon name="upload" class="text-textColor" />
            </div>
            <p class="text-textColor font-open">Subir imagen</p>
          </div>
        </div>
      </div>
      <div
        v-if="getHeroImages.length"
        class="w-full flex flex-col justify-start items-center mt-2"
      >
        <GeneralCardsHeroImage
          v-for="(hero, index) in getHeroImages"
          :key="index"
          :image="hero.image"
          :imageName="hero.name"
          :id="hero.id"
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
          <p class="text-textColor font-open">Nombre de la imagen</p>
        </div>
      </div>
      <button
        class="w-40 flex justify-center items-center rounded-lg py-2 mt-2"
        :class="{ 'bg-primary': !isThereImage, 'bg-gray-400': isThereImage }"
        :disabled="isThereImage"
        @click="uploadImage"
      >
        <p class="text-textColor font-open">Guardar y Publicar</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    isOpen: false,
    heroImages: [],
    isImage: false,
    heroImage: {
      url: null,
      object: null,
      imageName: "",
      id: "123",
    },
  }),
  computed: {
    ...mapGetters("general", ["getHeroImages"]),
    getIcon() {
      return this.isOpen === true ? "arrowUp" : "arrowDown";
    },
    isThereImage() {
      return this.heroImage.object === null ? true : false;
    },
  },
  methods: {
    ...mapActions("general", ["uploadHeroImages", "fetchImages"]),
    openModal() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.fetchHeroImages();
        this.isOpen = true;
      }
    },
    onImageChange(e) {
      const file = e.target.files[0];
      if (file === "" || file === null || file === undefined) {
        return;
      }
      const imageObject = file;
      const imageName = imageObject.name.split(".").shift();
      this.heroImage.object = imageObject;
      this.heroImage.imageName = imageName;
      this.heroImage.url = URL.createObjectURL(file);
    },
    uploadImage() {
      const image = this.heroImage.object;
      this.uploadHeroImages(image);
      this.resetImage()
    },
    resetImage() {
      this.heroImage = {
        url: null,
        object: null,
        imageName: "",
        id: "123",
      };
    },
    fetchHeroImages() {
      if (!this.getHeroImages.length) {
        this.fetchImages();
      } else {
        return;
      }
    },
  },
};
</script>
