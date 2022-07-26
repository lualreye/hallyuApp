<template>
  <div class="flex flex-col w-48">
    <nuxt-link :to="product.id" class="w-full h-48 p-2">
      <div class="relative">
        <figure
          class="
            w-full
            h-48
            object-cover object-center
            rounded-lg
            flex
            justify-center
            items-center
          "
        >
          <img :src="product.thumbnail" alt="product.name" class="rounded-lg" />
        </figure>
        <div
          class="
            rotation
            absolute
            right-3/4
            bottom-2/3
            flex flex-col
            justify-center
            items-center
          "
        >
          <div
            class="
              px-2
              bg-aquamarine
              flex-justify-center
              items-center
              rounded-lg
            "
          >
            <p class="text-textColor bg-aquamarine px-2">Quedan</p>
          </div>
          <div
            class="
              w-14
              h-14
              flex
              justify-center
              items-center
              bg-background
              rounded-full
              shadow-2xl
            "
          >
            <p class="text-textColor text-lg">
              {{ product.stock }}
            </p>
          </div>
        </div>
        <div
          class="
            w-44
            absolute
            left-1/4
            bottom-0
            flex flex-col
            justify-center
            items-center
            shadow-2xl
          "
        >
          <div
            class="
              flex
              px-2
              py-1
              justify-center
              items-center
              bg-background
              rounded-lg
              shadow-2xl
              border border-secondary
            "
          >
            <client-only>
              <vac :end-time="getTime">
                <span
                  slot="process"
                  slot-scope="{ timeObj }"
                  class="text-secondary text-xs"
                >
                  {{
                    ` ${timeObj.d} d : ${timeObj.h} hrs : ${timeObj.m} min : ${timeObj.s} s`
                  }}
                </span>
              </vac>
            </client-only>
          </div>
        </div>
      </div>
    </nuxt-link>
    <button
      @click="getToTheCart(product.id)"
      class="
        w-full
        py-2
        rounded-full
        mt-4
        bg-primary
        text-white
        font-open
        shadow-md
      "
    >
      Agregar al carrito
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getTime() {
      return this.calcTime().getTime();
    },
  },
  methods: {
    ...mapActions("cart", ["removeTimeOffer"]),
    calcTime() {
      const dateString = this.product.offer.time.replaceAll("-", "");
      const year = dateString.substring(0, 4);
      const month = dateString.substring(4, 6);
      const day = dateString.substring(6, 8);
      const date = new Date(year, month - 1, day);
      const today = new Date();
      if (date.getTime() <= today.getTime()) {
        this.removeTimeOffer(this.product);
      }
      return date;
    },
    getToTheCart(id) {
      this.$router.push(`/products/${id}`);
    },
  },
};
</script>

<style scoped>
.rotation {
  transform: rotate(345deg);
}
</style>
