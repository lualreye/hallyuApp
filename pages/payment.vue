<template>
  <div>
    <div class="mx-auto w-full max-w-screen-2xl">
      <div class="py-6">
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
            Información de envio
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
            Boton de pago
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
              h-96
              flex flex-col
              transition-all
            "
          >
            <div
              class="w-full px-4 flex justify-end items-center py-3 relative"
            >
              <div
                class="
                  w-full
                  absolute
                  top-0
                  left-0
                  right-0
                  bottom-0
                  z-60
                  rounded-3xl
                "
              >
                <wave-one class="rounded-3xl" />
              </div>
            </div>
            <div
              v-if="getCart.length"
              class="
                w-full
                flex flex-col
                justify-between
                flex-grow
                h-full
                pt-4
                pb-10
              "
            >
              <nav
                class="
                  flex flex-col
                  justify-col
                  items-center
                  justify-start
                  overflow-y-auto
                  px-4
                  py-2
                "
              >
                <ul class="w-full flex flex-col justify-start items-center">
                  <li
                    v-for="(item, i) in getCart"
                    :key="i"
                    class="w-full mb-6 mt-12"
                  >
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
                  <div class="w-full h-px bg-blue-600 my-2" />
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
                      name="Comprar"
                      buttonColor="secondary"
                      @click="redirectionToPayment"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              v-else
              class="w-full flex flex-grow justify-center items-center"
            >
              <p class="text-textColor font-junegull">
                No tenemos productos en el carrito
              </p>
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
  components: {
    WaveOne,
    CartCard,
  },
  computed: {
    ...mapGetters("cart", ["getCart"]),
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