<template>
  <div v-if="state" class="w-52 p-2">
    <div class="relative">
      <div
        class="
          w-16
          h-10
          flex
          mx-2
          justify-center
          items-center
          rounded-lg
          absolute
          top-0
          left-0
        "
        :class="{
          'bg-aquamarine': isEven,
          'bg-lightPink': !isEven,
        }"
      >
        <p class="text-textColor font-junegull text-lg">{{ discount }} %</p>
      </div>
      <figure
        class="
          rounded-t-full rounded-b-lg
          w-44
          h-60
          flex
          justify-center
          items-center
          mb-2
          mx-auto
        "
        :class="{
          'product-image': isEven,
          'product-image-2': !isEven,
        }"
      >
        <img :src="image" :alt="productName" class="w-full h-60 object-cover object-center rounded-t-full rounded-b-lg">
      </figure>
      <div
        class="flex-col justify-center items-center rounded-2xl w-full py-2 mt-5"
        :class="{
          'bg-aquamarine': isEven,
          'bg-lightPink': !isEven,
        }"
      >
        <p
          class="
            w-full
            text-center text-textColor
            font-open
            font-semibold
            italic
            text-base
            line-through
          "
        >
          $ {{ price }}
        </p>
        <p class="w-full text-center text-textColor font-junegull text-xl mt-1">
          $ {{ priceWithDiscount }}
        </p>
        <nuxt-link
          :to="`/products/${id}`"
          class="w-full absolute -bottom-8 left-0 right-0 py-2 rounded-full text-center mt-6 bg-primary text-white font-open shadow-md">
          Agregar al carrito
        </nuxt-link>
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
  methods: {
    getToTheCart(id) {
      console.log(id)
    }
  }
};
</script>

<style scoped>
.product-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 0px 24px 0px rgba(135, 199, 201, 1);
}
.product-image-2 {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 0px 24px 0px rgba(255, 152, 201, 1);
}
</style>
