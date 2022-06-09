<template>
  <div class="flex flex-col w-48">
    <nuxt-link :to="link" v-if="state" class="w-full h-48 p-2">
      <div class="relative">
        <figure class="w-full h-48 object-cover object-center rounded-lg flex justify-center items-center">
          <img :src="image" alt="productName" class="rounded-lg" />
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
            class="px-2 bg-aquamarine flex-justify-center items-center rounded-lg"
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
              {{ stock }}
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
      @click="getToTheCart(id)"
      class="w-full py-2 rounded-full mt-4 bg-primary text-white font-open shadow-md">
      Agregar al carrito
    </button>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    timesLeft: {
      type: String,
      required: true,
    },
    state: {
      type: Boolean,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    getTime() {
      return this.calcTime()
    }
  },
  methods: {
    calcTime() {
      const productTime = new Date(this.timesLeft).getTime()
      const date = new Date().getTime()
      const difference = date - productTime
      if (productTime < date) {
        console.log('el producto esta fuera de tiempo')
        return
      }
      return difference
    },
    getToTheCart(id) {
      console.log(id)
    }
  }
};
</script>

<style scoped>
.rotation {
  transform: rotate(345deg);
}
</style>
