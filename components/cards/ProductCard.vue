<template>
  <div class="w-56">
    <div class="relative w-full h-full">
      <img
        :src="image"
        alt="productName"
        class="border-2 border-primary object-cover object-center rounded-3xl w-full h-96"
      />
      <div
        class="
          absolute
          top-0
          bottom-0
          right-0
          py-2
          w-full
          h-96
          flex flex-col
          justify-between
        "
      >
        <div class="w-full flex justify-end items-center  px-4">
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
            "
            @click="like"
          >
            <GlobalHIcon
              name="like"
              :class="{
                'text-gray-300': !isLiked,
                'text-secondary': isLiked,
              }"
            />
          </button>
        </div>
        <div class="w-full flex justify-between items-center px-4">
          <p class="text-white font-junegull">
            $ {{ price }}
          </p>
          <button class="w-8 h-8 p-1 flex justify-center items-center shadow-xl bg-primary rounded-full">
            <GlobalHIcon name='cart' class="text-gray-100" />
          </button>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
  },
  data: () => ({
    isLiked: false
  }),
  methods: {
    like() {
      if(this.isLiked) {
        this.isliked = false;
      } else {
        this.isLiked = true
      }
    }
  }
};
</script>

<style scoped>
.productImage {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
