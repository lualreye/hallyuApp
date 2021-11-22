<template>
  <nuxt-link :to="link" v-if="state" class="w-48 h-48 p-2">
    <div class="relative">
      <figure class="w-full h-full rounded-lg flex justify-center items-center">
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
            <vac :end-time="new Date().getTime() + timesLeft">
              <span
                slot="process"
                slot-scope="{ timeObj }"
                class="text-secondary text-sm"
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
      type: Number,
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
  },
};
</script>

<style scoped>
.rotation {
  transform: rotate(345deg);
}
</style>
