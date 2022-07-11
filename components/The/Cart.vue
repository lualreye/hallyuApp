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
        class="
          bg-transparent
          w-6
          h-6
          flex
          justify-center
          items-center
          rounded-full
          z-70
        "
        @click="closeCart"
      >
        <GlobalHIcon name="close" class="text-gray-400 w-full" />
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
        flex-grow
      "
    >
      <ul class="w-full flex flex-col justify-start items-center">
        <li v-for="(item, i) in getCart" :key="i" class="w-full mb-6">
          <cart-card
            :product="item" 
          />
        </li>
      </ul>
    </nav>
    <div
      class="w-full h-56 p-4 rounded-bl-3xl bg-primary border-t border-blue-500"
    >
      <div class="w-full flex flex-col justify-center align-items-center px-2">
        <div class="w-full flex justify-between items-center">
          <p class="text-sm font-open text-textColor">Sub Total</p>
          <p class="text-base text-textColor font-open">
            $ {{ totalBeforeDiscount }}
          </p>
        </div>
        <div class="w-full flex justify-between items-center mt-2">
          <p class="text-sm font-open text-textColor">Descuento</p>
          <p class="text-base font-open text-textColor">
            % {{ discount }}
          </p>
        </div>
        <div class="w-full h-px bg-blue-600 my-2" />
        <div class="w-full flex justify-between items-center">
          <p class="text-base font-open text-textColor">Total</p>
          <p class="text-xl font-junegull font-bold text-textColor">
            $ {{ totalToPay }}
          </p>
        </div>
        <div class="w-1/2 flex justify-center items-center mx-auto mt-4">
          <GlobalHButton name="Comprar" buttonColor="secondary" @click="redirectionToPayment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WaveOne from "@/components/waves/WaveOne.vue";
import CartCard from "../cards/CartCard.vue";
export default {
  components: {
    WaveOne,
    CartCard,
  },
  data: () => ({
    totalToPay: 45
  }),
  computed: {
    ...mapGetters("cart", ["showCart"]),
    ...mapGetters("cart", ["getCart"]),
    totalBeforeDiscount() {
      if (!this.getCart.length) {
        return 0
      } else {
        const allPrices = this.getCart.map(pr => pr.quantity * pr.price)
        const sum = allPrices.reduce((a, b) => a + b, 0)
        return sum
      }
    },
    // Arreglar el discount
    discount() {
      if (!this.getCart.length) {
        return 0
      }      
      return 0
    }
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
    redirectionToPayment() {
      this.$router.push('payment')
    }
  },
};
</script>
