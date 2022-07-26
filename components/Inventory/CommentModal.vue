<template>
  <div
    v-if="productSelected.length"
    class="
      w-10/12
      sm:w-3/4
      max-w-4xl
      fixed
      top-44
      left-1/12
      sm:left-1/8
      z-50
      bg-background
      rounded-lg
      shadow-md
      p-3
    "
  >
    <div class="w-full flex-justify-center items-center">
      <div class="flex justify-end items-center w-full px-2">
        <button class="w-6 h-6 flex justify-center items-center" @click="close">
          <h-icon name="close" class="text-textColor" />
        </button>
      </div>
      <div class="flex flex-wrap">
        <div
          class="
            w-full
            sm:w-1/3
            lg:w-1/5
            p-2
            flex flex-col
            justify-center
            items-center
          "
        >
          <!-- THUMBNAIL -->
          <div
            class="
              relative
              w-36
              h-36
              flex
              justify-center
              items-center
              border border-primary
              rounded-lg
            "
          >
            <input
              type="file"
              accept=".png, .jpg, jpeg, .webp"
              class="absolute w-full h-32 opacity-0 z-60"
              @change="getThumbnail"
            />
            <div
              v-if="!thumbnail.url"
              class="w-full relative px-3 flex justify-center items-center"
            >
              <div class="w-6 h-6 flex justify-center items-center mr-1">
                <GlobalHIcon name="upload" class="text-textColor" />
              </div>
              <p class="text-textColor text-xs">Imagen Principal</p>
            </div>
            <figure
              v-else
              class="w-full h-32 rounded-lg flex justify-center items-center"
            >
              <img
                :src="thumbnail.url"
                alt=""
                class="w-full h-32 object-cover object-center rounded-lg"
              />
            </figure>
          </div>
        </div>
        <div class="flex flex-col justify-start w-5/6">
          <label for=""> Usuario </label>
          <input
            v-model="userName"
            class="py-1 px-2 rounded-md border border-primary w-full"
          />
        </div>
        <div class="my-2 flex flex-col justify-start w-5/6">
          <label for=""> Testimonio </label>
          <input
            v-model="comment"
            class="py-1 px-2 rounded-md border border-primary w-full"
          />
        </div>
        <div class="w-full justify-start items-center px-1">
          <button
            class="w-24 text-center text-textColor py-2 rounded-md shadow-md"
            :class="{ 'bg-primary': isReady, 'bg-gray-400': !isReady }"
            @click="upload"
          >
            Cargar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HIcon from "../Global/HIcon.vue";

export default {
  components: { HIcon },
  props: {
    productSelected: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    thumbnail: {
      object: null,
      url: null,
    },
    userName: "",
    comment: "",
  }),
  computed: {
    ...mapGetters("inventoryTotal", ["getTotalProducts"]),
    isReady() {
      return (
        (this.thumbnail.object !== null ||
          this.thumbnail.object !== undefined) &&
        this.userName.length > 0 &&
        this.comment.length > 0
      );
    },
  },
  mounted() {
    if (!this.getTotalProducts.length) {
      this.fetchProducts();
    }
  },
  methods: {
    ...mapActions("inventoryTotal", ["fetchProducts"]),
    ...mapActions("comments", ["uploadComment"]),
    close() {
      this.resetVariables();
      this.$emit("close-comment-modal");
    },
    resetVariables() {
      this.thumbnail = {
        object: null,
        url: null,
      };
      this.userName = "";
      this.comment = "";
    },
    getThumbnail(e) {
      const file = e.target.files[0];
      if (file === "" || file === null || file === undefined) {
        return;
      }
      const imgObj = file;
      const imgUrl = URL.createObjectURL(file);
      this.thumbnail.url = imgUrl;
      this.thumbnail.object = imgObj;
    },
    upload() {
      this.uploadComment({
        userImage: this.thumbnail.object,
        userName: this.userName,
        productId: this.productSelected,
        comment: this.comment,
      });

      this.close();
    },
  },
};
</script>