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
      <p class="text-textColor font-open">Subir Bandas de portada</p>
    </button>
    <div v-if="isOpen" class="w-full max-w-md mt-3 p-2">
      <div class="w-full flex flex-wrap justify-between items-center">
        <p class="text-hBlack font-open">Imagenes de Bandas para Productos</p>
        <div
          class="w-40 relative flex justify-center items-center py-2 rounded-lg mt-3 sm:mt-0"
          :class="{
            'bg-lightPink': isThereImage,
            'bg-gray-400': !isThereImage,
          }"
        >
          <input
            type="file"
            class="absolute w-full h-full z-60 opacity-0"
            :disabled="!isThereImage"
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
        v-if="bandImage.url"
        class="w-full flex justify-start items-center mt-2"
      >
        <GeneralCardsBandImage
          :image="bandImage.url"
          :imageName="bandImage.imageName"
          :id="bandImage.id"
        />
      </div>
      <div
        v-if="getBandImages.length"
        class="w-full flex flex-col justify-start items-center mt-2"
      >
        <GeneralCardsBandImage
          v-for="(bandImage, index) in getBandImages"
          :key="index"
          :image="bandImage.image"
          :imageName="bandImage.name"
          :id="bandImage.id"
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
    bandImages: [],
    isImage: false,
    bandImage: {
      url: null,
      object: null,
      imageName: "",
      id: "123",
    },
  }),
  computed: {
    ...mapGetters("bandImage", ["getBandImages"]),
    getIcon() {
      return this.isOpen === true ? "arrowUp" : "arrowDown";
    },
    isThereImage() {
      return this.bandImage.object === null ? true : false;
    },
  },
  methods: {
    ...mapActions("bandImage", ["uploadBandImages", "fetchBandImages"]),
    openModal() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.fetchBnImages();
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
      this.bandImage.object = imageObject;
      this.bandImage.imageName = imageName;
      this.bandImage.url = URL.createObjectURL(file);
    },
    uploadImage() {
      const image = this.bandImage.object;
      this.uploadBandImages(image);
      this.bandImage = {
        url: null,
        object: null,
        imageName: "",
        id: "123",
      };
    },
    fetchBnImages() {
      if (!this.getBandImages.length) {
        this.fetchBandImages();
      } else {
        return;
      }
    },
  },
};
</script>
