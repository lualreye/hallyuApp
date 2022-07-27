<template>
  <div>
    <div class="mx-auto w-full max-w-screen-2xl">
      <div class="py-6 flex justify-between mx-auto">
        <figure
          class="
            w-28
            ml-10
            sm:w-36
            md:w-40
            lg:w-52
            flex
            justify-center
            items-center
            mb-12
          "
        >
          <img src="~/static/images/logo/logotipo.png" alt="hallyu-store" />
        </figure>
        <nuxt-link
          to="/products"
          class="underline text-textColor mr-3 font-open"
        >
          Seguir Comprando
        </nuxt-link>
      </div>
    </div>
    <div
      class="
        w-full
        max-w-screen-2xl
        mx-auto
        flex flex-wrap-reverse
        justify-between
        items-end
      "
    >
      <div
        class="
          w-full
          lg:w-2/5
          flex flex-col
          justify-center
          items-center
          my-6
          mx-10
        "
      >
        <div class="w-full flex flex-col">
          <p class="font-junegull text-textColor text-2xl mb-4">
            Información de envio
          </p>
          <label for="" class="text-base text-textColor mt-3">Nombre</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Nombre"
          />
          <label for="" class="text-base text-textColor mt-3">Apellido</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Apellido"
          />
          <label for="" class="text-base text-textColor mt-3">Cédula</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Cédula"
          />
          <label for="" class="text-base text-textColor mt-3">Teléfono</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Teléfono"
          />
          <label for="" class="text-base text-textColor mt-3">Dirección</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Dirección"
          />
          <label for="" class="text-base text-textColor mt-3">Referencia</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Referencia"
          />
        </div>
        <div class="w-full flex flex-col my-10">
          <p class="font-junegull text-textColor text-2xl mb-4">
            Productos en lista
          </p>
          <div
            class="
              w-full
              h-96
              flex
              justify-center
              items-center
              border border-primary
              rounded-3xl
            "
          >
            <nav
              class="
                flex
                items-center
                justify-start
                px-4
                py-2
                cart-list
                overflow-x-auto
              "
            >
              <ul class="w-full flex flex-col justify-start items-center">
                <li v-for="(item, i) in getCart" :key="i" class="w-full mb-6">
                  <cart-card :product="item" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-2/5 flex justify-center items-center mx-10">
        <div class="w-full flex">
          <div
            class="
              bg-white
              w-full
              rounded-3xl
              shadow-md
              z-20
              flex flex-col
              transition-all
            "
          >
            <div
              v-if="getCart.length"
              class="w-full flex flex-col justify-between flex-grow h-full"
            >
              <div class="w-full h-56 p-4 rounded-3xl bg-aquamarine">
                <div
                  class="
                    w-full
                    flex flex-col
                    justify-center
                    align-items-center
                    px-2
                  "
                >
                  <div class="w-full flex justify-between items-center">
                    <p class="text-sm font-open text-textColor">Sub Total</p>
                    <p class="text-base text-textColor font-open">
                      $ {{ totalBeforeDiscount }}
                    </p>
                  </div>
                  <div class="w-full flex justify-between items-center mt-2">
                    <p class="text-sm font-open text-textColor">Descuento</p>
                    <p class="text-base font-open text-textColor">
                      $ {{ discount }}
                    </p>
                  </div>
                  <div class="w-full h-px bg-textColor my-2" />
                  <div class="w-full flex justify-between items-center">
                    <p class="text-base font-open text-textColor">Total</p>
                    <p class="text-xl font-junegull font-bold text-textColor">
                      $ {{ totalToPay }}
                    </p>
                  </div>
                  <div
                    class="w-1/2 flex justify-center items-center mx-auto mt-4"
                  >
                    <GlobalHButton
                      name="Pagar"
                      buttonColor="secondary"
                      @click="redirectionToPayment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WaveOne from "@/components/waves/WaveOne.vue";
import CartCard from "@/components/cards/CartCard.vue";

export default {
  layout: "pay",
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
        if (pr.offered === "Tiempo") {
          return pr.quantity * pr.price * (pr.offer.discount / 100);
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
  mounted() {
    if (!Object.keys(this.getCart).length) {
      this.$router.push("/");
    }
  },
};
</script>