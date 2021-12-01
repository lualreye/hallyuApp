<template>
  <div :to="link" v-if="state" class="w-48 p-2">
    <div class="relative">
      <div
        class="
          w-16
          h-16
          flex
          justify-center
          items-center
          rounded-lg
          absolute
          top-0
          left-0
        "
        :class="{
          'bg-primary': isEven,
          'bg-secondary': !isEven,
        }"
      >
        <p class="text-textColor font-junegull text-lg">{{ discount }} %</p>
      </div>
      <div
        class="
          rounded-t-full rounded-b-lg
          w-44
          h-60
          product-image
          flex
          justify-center
          items-center
          mb-2
        "
        :style="{ backgroundImage: 'url(' + image + ')' }"
        :classs="{
          'product-image': isEven,
          'product-image-2': !isEven,
        }"
      />
      <div
        class="flex-col justify-center items-center rounded-2xl w-full py-2"
        :class="{
          'bg-primary': isEven,
          'bg-secondary': !isEven,
        }"
      >
        <p
          class="
            w-full
            text-center text-textColor
            font-open
            text-base
            line-through
          "
        >
          $ {{ price }}
        </p>
        <p class="w-full text-center text-textColor font-junegull text-xl mt-1">
          $ {{ priceWithDiscount }}
        </p>
      </div>
    </div>
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
    order: {
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
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    newPrice: 0,
  }),
  computed: {
    isEven() {
      if (this.order % 2 === 0) {
        return true;
      } else {
        return false;
      }
    },
    priceWithDiscount() {
      return (this.newPrice = this.price - this.price * (this.discount / 100));
    },
  },
};
</script>

<style scoped>
.product-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 0px 33px 0px rgba(135, 199, 201, 1);
}
.product-image-2 {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 0px 33px 0px rgba(255, 152, 201, 1);
}
</style>
