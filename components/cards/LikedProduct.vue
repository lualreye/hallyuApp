<template>
  <div class="w-full mb-4">
    <div class="w-full flex justify-between items-start">
      <!-- LEFT SECTION OF THE CARD -->
      <div class="flex justify-start items-start w-3/4">
        <nuxt-link :to="`/products/${product.id}`">
          <figure
            class="w-1/4 h-20 rounded-3xl mr-2 flex justify-center items-center"
          >
            <img
              :src="product.thumbnail"
              :alt="product.name"
              class="
                rounded-xl
                w-full
                h-20
                object-cover
                border border-secondary
                object-center
                flex
                justify-center
                items-center
              "
            />
          </figure>
        </nuxt-link>
        <div class="w-3/4 flex flex-col py-1 justify-between items-start">
          <p class="w-full text-textColor text-sm mb-1 font-bold font-open">
            {{ product.name }}
          </p>
        </div>
      </div>
      <!-- RIGHT SECTION OF THE CARD -->
      <div class="flex py-1 flex-col justify-between items-end w-1/4">
        <p class="text-xl text-textColor font-open font-bold">
          $ {{ product.price }}
        </p>
        <button class="w-6 h-6" @click="removeLikedProduct">
          <HIcon name="delete" class="text-primary" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HIcon from "../Global/HIcon.vue";
export default {
  components: { HIcon },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("likes", ["removeFromWishList"]),
    removeLikedProduct() {
      this.removeFromWishList(this.product);
    },
  },
};
</script>
