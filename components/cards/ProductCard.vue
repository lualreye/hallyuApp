<template>
  <div class=" w-56 h-96">
    <div class="relative w-full h-full">
      <img
        :src="productImage"
        alt="productName"
        class="border-2 border-secondary rounded-3xl w-56 h-96"
      />
      <div class="w-full h-full flex-flex-col justify-between items-center">
        <div
          class="
            absolute
            top-2
            right-2
            w-full
            flex flex-col
            justify-between
          "
        >
          <div class="w-full flex justify-end items-center">
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
            >
              <h-icon
                name="like"
                :class="{
                  'text-gray-300': !isLiked,
                  'text-secondary': isLiked,
                }"
              />
            </button>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-white font-junegull">
            $ {{ price }}
          </p>
          <button class="w-8 h-8 flex justify-center items-center shadow-xl bg-primary rounded-full">
            <h-icon name='cart' class="text-gray-100" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HIcon from "../global/HIcon.vue";
export default {
  components: { HIcon },
  data: () => ({
    productImage: require("@/static/images/idols/han.jpg"),
  }),
};
</script>

<style scoped>
.productImage {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
