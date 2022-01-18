<template>
  <div
    class="
      bg-white
      fixed
      top-0
      bottom-0
      h-screen
      w-2/3
      md:w-1/3
      rounded-l-3xl
      shadow-md
      z-50
      flex flex-col
      justify-between
      transition-all
    "
    :class="{
      'right-0': showCart,
      '-right-2/3': !showCart,
    }"
  >
    <div class="w-full px-4 flex justify-end items-center py-4 relative">
      <div class="w-full absolute top-0 left-0 right-0 bottom-0 z-60">
        <wave-one />
      </div>
      <button
        class="bg-transparent w-6 h-6 flex justify-center items-center rounded-full z-70"
        @click="closeCart"
      >
        <h-icon name="close" class="text-gray-400 w-full" />
      </button>
    </div>
    <nav
      class="
        flex flex-col
        justify-col
        items-center
        justify-start
        overflow-y-auto
        p-4
      "
    >
      <ul v-for="(item, i) in getSelectedProducts" :key="i" class="mb-6">
        <cart-card
          :productName="item.productName"
          :description="item.description"
          :price="item.price"
          :image="item.image"
          :discount="item.discount"
        />
      </ul>
    </nav>
    <div class="w-full p-4 rounded-bl-3xl bg-primary border-t border-blue-500">
      aqui tenemos que poner nuestro subtotal y total
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WaveOne from '@/components/waves/WaveOne.vue'
import CartCard from './cards/CartCard.vue';
export default {
  components: {
    WaveOne,
    CartCard
  },
  computed: {
    ...mapGetters("cart", ["showCart"]),
    ...mapGetters("cart", ["getSelectedProducts"]),
  },
  methods: {
    ...mapActions("cart", ["activeCart"]),
    closeCart() {
      if (this.showCart) {
        this.activeCart(false);
      } else {
        return;
      }
    },
    newFunction() {
      console.log("pondremos la elimacion del objeto");
    },
  },
};
</script>
