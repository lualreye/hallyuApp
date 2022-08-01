<template>
  <div class="w-36 h-36 sm:w-56 sm:h-56">
    <div class="relative w-full h-full">
      <img
        :src="product.thumbnail"
        alt="productName"
        class="
          border-2 border-primary
          object-cover object-center
          rounded-3xl
          w-36 h-36
          sm:w-full
          sm:h-56
          producto-image
        "
      />
      <div
        class="
          absolute
          top-0
          bottom-0
          right-0
          py-2
          w-36 h-36
          sm:w-full
          sm:h-56
          producto-content
          flex flex-col
          justify-between
        "
      >
        <div
          class="w-full flex items-center px-4 relative z-30"
          :class="{
            'justify-end': !product.name.includes('/'),
            'justify-between': product.name.includes('/'),
          }"
        >
          <p
            v-if="product.name.includes('/')"
            class="
              text-white
              text-sm
              sm:text-base
              bg-secondary
              font-junegull
              rounded-md
              px-2
              py-1
              shadow
            "
          >
            {{ product.name.split("/").shift() }}
          </p>
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
              relative
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
            <div
              class="
                w-8
                h-8
                absolute
                top-0
                left-0
                bottom-0
                right-0
                flex
                justify-center
                items-center
              "
              v-show="productLiked"
              :class="{ grow: productLiked }"
            >
              <GlobalHIcon name="like" class="text-secondary" />
            </div>
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
  data: () => ({
    productLiked: false,
  }),
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
      this.liking();
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
      this.$router.push(`/products/${this.product.id}`);
    },
    liking() {
      this.productLiked = true;
      setTimeout(() => {
        this.productLiked = false;
      }, 700);
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
.grow {
  color: white;
  animation: growing 700ms ease-in infinite;
}

@keyframes growing {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(200%);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
