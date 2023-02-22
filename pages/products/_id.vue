<template>
  <div
    v-if="Object.keys(getProduct).length"
    class="py-4 px-2 w-full max-w-screen-xl mx-auto my-9"
  >
    <div class="w-full flex flex-wrap justify-evenly">
      <div
        class="
          w-full
          md:w-2/5
          flex flex-col-reverse
          md:flex-row
          justify-evenly
          items-center
        "
      >
        <div
          class="
            w-full
            md:w-1/5
            flex flex-row
            md:flex-col
            justify-center
            items-center
            mr-3
          "
        >
          <figure
            class="w-16 h-16 m-2 flex justify-center items-center rounded-lg"
            @click="getImage(getProduct.thumbnail)"
          >
            <img
              :src="getProduct.thumbnail"
              :alt="getProduct.name"
              class="
                object-cover
                border-2 border-primary
                object-center
                w-full
                h-16
                rounded-md
              "
            />
          </figure>
          <figure
            v-for="image in getProduct.images"
            :key="image"
            class="w-16 h-16 m-2 flex justify-center items-center rounded-lg"
            @click="getImage(image)"
          >
            <img
              :src="image"
              :alt="getProduct.name"
              class="
                object-cover
                border-2 border-primary
                object-center
                w-full
                h-16
                rounded-md
              "
            />
          </figure>
        </div>
        <figure
          class="
            w-full
            min-w-full
            md:w-3/5
            h-96
            rounded-md
            flex
            justify-center
            items-center
          "
        >
          <img
            :src="selectedImage"
            :alt="getProduct.name"
            class="
              h-96
              w-full
              min-w-full
              border-2 border-primary
              object-cover object-center
              rounded-md
            "
          />
        </figure>
      </div>
      <div
        class="
          w-full
          md:w-2/5
          px-2
          flex flex-col
          justify-between
          items-start
          py-2
          my-4
        "
      >
        <div>
          <p class="text-textColor text-lg font-open text-left">
            {{ getProduct.name }}
          </p>
          <div class="flex justify-start items-center">
            <div class="w-5 h-5 flex justify-center items-center">
              <GlobalHIcon name="like" class="text-secondary" />
            </div>
            <p class="text-textColor font-open font-semibold">
              {{ getProduct.likes }}
            </p>
          </div>
          <p class="text-textColor text-4xl font-junegull text-left mt-3 mb-4">
            $ {{ getProduct.price }}
          </p>
        </div>
        <div class="w-full flex flex-col mb-4">
          <div v-if="getProduct.clothes.sizes.length" class="mb-2">
            <p class="text-textColor text-base font-light font-open text-left">
              Tallas
            </p>
            <p
              v-for="(size, index) in getProduct.clothes.sizes"
              :key="index"
              class="text-textColor text-base font-open text-left"
            >
              {{ size }}
            </p>
          </div>
        </div>
        <div class="w-full flex flex-col mb-4">
          <div v-if="getProduct.clothes.colors.length">
            <p class="text-textColor text-base font-light font-open text-left">
              Color
            </p>
            <p
              v-for="(item, index) in getProduct.clothes.colors"
              :key="index"
              class="text-textColor text-base font-open text-left"
            >
              {{ item.name }}
            </p>
          </div>
        </div>
        <div class="w-full lg:w-5/6 flex flex-col justify-center items-start">
          <div class="flex justify-center items-center mb-2">
            <p class="mr-2 text-textColor font-medium">Cantidad:</p>
            <span class="border-2 border-primary rounded-3xl px-3"
              >{{ getQuantity }}
            </span>
          </div>
          <button
            class="mb-3 w-full p-2 rounded-full text-white"
            :class="{
              'bg-gray-400': !isProductAvailable,
              'bg-secondary': isProductAvailable,
              shaking: productAdded,
            }"
            @click="addProductToCart"
          >
            <p v-if="isProductAvailable" class="text-white font-junegull">
              Agregar al carrito
            </p>
            <p v-else class="text-white">No hay más producto disponible</p>
          </button>
          <button
            class="w-full p-2 rounded-full bg-white border"
            :class="{
              'text-secondary border-secondary': isLiked,
              'text-gray-400 border-gray-400': !isLiked,
              shaking: productLiked,
            }"
            @click="like"
          >
            <p v-if="isLiked" class="font-junegull">Agregar a mis Favoritos</p>
            <p v-else class="font-junegull">Quitar de mis Favoritos</p>
          </button>
        </div>
        <p
          v-if="getProduct.description.length"
          class="text-base font-open text-textColor"
        >
          {{ getProduct.description }}
        </p>
      </div>
    </div>
    <h3 class="text-textColor w-full font-junegull text-lg mt-10">
      También puede interesarte
    </h3>
    <div
      v-if="getSuggestedProducts"
      class="
        flex
        w-full
        overflow-x-auto
        justify-start
        items-center
        mb-10
        sm:pl-6
        pl-1
        py-5
      "
    >
      <nuxt-link
        v-for="(product, index) in getSuggestedProducts"
        :key="index"
        :to="`/products/${product.id}`"
        class="flex-none w-56 h-56 p-1 relative mr-5"
      >
        <img
          :src="product.thumbnail"
          :alt="product.name"
          class="
            w-56
            h-56
            object-cover object-center
            rounded-xl
            border border-primary
          "
        />
        <span
          class="
            absolute
            bottom-2
            left-2
            px-3
            py-1
            rounded-full
            bg-gray-200
            text-textColor
            font-junegull
            text-xl
          "
          >$ {{ product.price }}</span
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  head() {
    return {
      script: [
        {
          src:
            'https://www.datafast.com.ec/js/dfAdditionalValidations1.js'
        }
      ]
    }
  },
  data: () => ({
    selectedImage: "",
    read: true,
    rate: 1,
    productAdded: false,
    productLiked: false,
  }),
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["getProduct", "getSuggestedProducts", "getCart"]),
    ...mapGetters("likes", ["getWishList"]),
    ...mapGetters("user", ["getUser"]),
    getParams() {
      return this.$route.params.id;
    },
    isProductAvailable() {
      const idx = this.getCart.findIndex(
        (pr) => pr.id === this.$route.params.id
      );
      if (idx === -1) {
        return true;
      }
      return this.getCart[idx].quantity < this.getCart[idx].stock;
    },
    getQuantity() {
      const idx = this.getCart.findIndex(
        (pr) => pr.id === this.$route.params.id
      );
      if (idx === -1) {
        return 0;
      }
      return this.getCart[idx].quantity;
    },
    isLiked() {
      const id = this.getWishList.findIndex(
        (pr) => pr.id === this.getProduct.id
      );
      return id === -1;
    },
  },
  watch: {
    getProduct(value) {
      const product = Object.keys(value).length;
      if (product) {
        this.selectedImage = value.thumbnail;
      }
    },
  },
  mounted() {
    this.fetchProduct(this.$route.params.id);
    this.fetchSuggestedProducts();
  },
  methods: {
    ...mapActions("cart", [
      "fetchProduct",
      "fetchSuggestedProducts",
      "addToCart",
      "removeToCart",
    ]),
    ...mapActions("likes", ["addToWishList", "removeFromWishList"]),
    getImage(image) {
      this.selectedImage = image;
    },
    addProductToCart() {
      this.buttonInteraction();
      const product = JSON.parse(JSON.stringify(this.getProduct));
      if (this.isProductAvailable) {
        this.addToCart(product);
      }
    },
    like() {
      this.secondButtonInteraction();
      if (this.getUser === null || this.getUser === undefined) {
        this.$router.push("/SignIn");
      } else {
        if (this.isLiked) {
          const product = JSON.parse(JSON.stringify(this.getProduct));
          this.addToWishList(product);
        } else {
          const product = JSON.parse(JSON.stringify(this.getProduct));
          this.removeFromWishList(product);
        }
      }
    },
    buttonInteraction() {
      this.productAdded = true;
      setTimeout(() => {
        this.productAdded = false;
      }, 300);
    },
    secondButtonInteraction() {
      this.productLiked = true;
      setTimeout(() => {
        this.productLiked = false;
      }, 300);
    },
  },
};
</script>

<style scoped>
.shaking {
  background-color: rgb(236, 72, 153);
  color: white;
  animation: shake 300ms ease-in-out infinite;
}

@keyframes shake {
  0% {
    transform: rotate(1deg);
  }
  50% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(1deg);
  }
}
</style>