<template>
  <div class="w-56">
    <div class="relative w-full h-full">
      <img
        :src="product.thumbnail"
        alt="productName"
        class="
          border-2 border-primary
          object-cover object-center
          rounded-3xl
          w-full
          h-56
        "
      />
      <div
        class="
          absolute
          top-0
          bottom-0
          right-0
          py-2
          w-full
          h-56
          flex flex-col
          justify-between
        "
      >
        <div class="w-full flex justify-end items-center px-4 relative z-30">
          <button
            class="
              w-8
              h-8
              p-1
              shadow-xl
              rounded-full
              bg-gray-100
              flex
              justify-center
              items-center
            "
            @click="like"
          >
            <GlobalHIcon
              name="like"
              :class="{
                'text-gray-300': isLiked,
                'text-secondary': !isLiked,
              }"
            />
          </button>
        </div>
        <nuxt-link :to="`/products/${product.id}`" class="flex-grow" />
        <div class="w-full flex justify-between items-center px-4">
          <p
            class="
              text-primary text-2xl
              font-junegull
              bg-background
              price-shadow
              rounded-full
              py-1
              px-2
            "
          >
            $ {{ product.price }}
          </p>
          <button
            class="
              w-8
              h-8
              p-1
              flex
              justify-center
              items-center
              shadow-xl
              bg-primary
              rounded-full
            "
            @click="addToCart"
          >
            <GlobalHIcon name="cart" class="text-gray-100" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
    ...mapGetters("likes", ["getWishList"]),
    isLiked() {
      const id = this.getWishList.findIndex((pr) => pr.id === this.product.id);
      return id === -1;
    },
  },
  methods: {
    ...mapActions("likes", ["addToWishList", "removeFromWishList"]),
    like() {
      if (this.getUser === null || this.getUser === undefined) {
        this.$router.push("/SignIn");
      } else {
        if (this.isLiked) {
          const product = JSON.parse(JSON.stringify(this.product));
          this.addToWishList(product);
        } else {
          const product = JSON.parse(JSON.stringify(this.product));
          this.removeFromWishList(product);
        }
      }
    },
    addToCart() {
      console.log("Estamos yendo al carrito");
    },
  },
};
</script>

<style scoped>
.productImage {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.price-shadow {
  -webkit-box-shadow: 0px 0px 10px -2px #c4c4c4;
  box-shadow: 0px 0px 10px -2px #c4c4c4;
}
</style>
