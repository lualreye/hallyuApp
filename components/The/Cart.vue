<template>
  <div
    class="
      bg-white
      fixed
      top-0
      bottom-0
      max-h-screen
      h-screen
      w-2/3
      md:w-1/3
      max-w-md
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
    <div class="w-full px-4 flex justify-end items-center py-3 relative close-container">
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
    <div
      v-if="getCart.length"
      class="w-full flex flex-col justify-between pt-4 cart-wrapper"
    >
      <nav
        class="
          flex flex-col
          justify-col
          items-center
          justify-start
          px-4
          py-2
          cart-list
        "
      >
        <ul class="w-full flex flex-col justify-start items-center">
          <li v-for="(item, i) in getCart" :key="i" class="w-full mb-6">
            <cart-card :product="item" />
          </li>
        </ul>
      </nav>
      <div
        class="
          w-full
          h-56
          p-4
          rounded-bl-3xl
          bg-primary
          border-t border-blue-500
        "
      >
        <div
          class="w-full flex flex-col justify-center align-items-center px-2"
        >
          <div class="w-full flex justify-between items-center">
            <p class="text-sm font-open text-textColor">Sub Total</p>
            <p class="text-base text-textColor font-open">
              $ {{ totalBeforeDiscount }}
            </p>
          </div>
          <div class="w-full flex justify-between items-center mt-2">
            <p class="text-sm font-open text-textColor">Descuento</p>
            <p class="text-base font-open text-textColor">$ {{ discount }}</p>
          </div>
          <div class="w-full h-px bg-blue-600 my-2" />
          <div class="w-full flex justify-between items-center">
            <p class="text-base font-open text-textColor">Total</p>
            <p class="text-xl font-junegull font-bold text-textColor">
              $ {{ totalToPay }}
            </p>
          </div>
          <div class="w-1/2 flex justify-center items-center mx-auto mt-4">
            <GlobalHButton
              name="Comprar"
              buttonColor="secondary"
              @click="redirectionToPayment"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="w-full flex flex-grow justify-center items-center">
      <p class="text-textColor font-junegull text-center px-2">
        No tenemos productos en el carrito
      </p>
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
  computed: {
    ...mapGetters("cart", ["showCart", "getCart"]),
    ...mapGetters("user", ["getUser"]),
    totalBeforeDiscount() {
      if (!this.getCart.length) {
        return 0;
      } else {
        const allPrices = this.getCart.map((pr) => pr.quantity * pr.price);
        const sum = allPrices.reduce((a, b) => a + b, 0);
        return sum;
      }
    },
    discount() {
      if (!this.getCart.length) {
        return 0;
      }
      const allDiscount = this.getCart.map((pr) => {
        if (pr.offered === "Descuento") {
          return pr.quantity * pr.price * (pr.offer / 100);
        }
        if (pr.offered === 'Tiempo') {
          return pr.quantity * pr.price * (pr.offer.discount / 100)
        }
        return 0;
      });
      const sum = allDiscount.reduce((a, b) => a + b, 0);
      return sum;
    },
    totalToPay() {
      return this.totalBeforeDiscount - this.discount;
    },
  },
  methods: {
    ...mapActions("cart", ["activeCart", "toPay"]),
    closeCart() {
      if (this.showCart) {
        this.activeCart(false);
      } else {
        return;
      }
    },
    redirectionToPayment() {
      if (this.getUser === null || this.getUser === undefined) {
        this.closeCart();
        this.$router.push("/SignIn");
      } else {
        this.toPay(Number(this.totalToPay));
        this.closeCart();
        this.$router.push("/payment");
      }
    },
  },
};
</script>

<style scoped>
.cart-wrapper {
  height: 90%;
}
.cart-list {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
