<template>
  <div class="w-full mb-4">
    <div class="w-full flex justify-between items-start">
      <!-- LEFT SECTION OF THE CARD -->
      <div class="flex justify-start items-start w-3/4">
        <figure class="w-1/4 h-20 rounded-3xl mr-2 flex justify-center items-center">
          <img
            :src="product.thumbnail"
            :alt="product.name"
            class="rounded-xl w-full h-20 object-cover border border-secondary object-center flex justify-center items-center"
          />
        </figure>
        <div class="w-3/4 flex flex-col py-1 justify-between items-start">
          <p class="w-full text-textColor mb-1` text-base font-bold font-open">
            {{ product.name }}
          </p>
          <div class="w-full flex justify-start items-center">
            <button class="w-4 h-4" @click="substract">
              <HIcon name="minus" class="text-primary" />
            </button>
            <span class="mx-2 border text-textColor border-aquamarine rounded-lg">{{ product.quantity }}</span>
            <button class="w-4 h-4" :disabled="product.quantity === product.stock" @click="add">
              <HIcon name="plus" class="text-primary" :class="{'text-gray-400': product.quantity === product.stock}" />
            </button>
          </div>
          <p v-if="product.size" class="text-textColor text-sm w-full">
            Talla: {{product.size }}
          </p>
          <div v-if="product.color"   class="flex w-full justify-start items-center">
            <p class="text-textColor text-sm mr-1">
              Color: 
            </p>
            <div class="rounded-full w-3 h-3 border border-primary" :style="{backgroundColor: red}"></div>
          </div>
        </div>
      </div>
      <!-- RIGHT SECTION OF THE CARD -->
      <div class="flex py-1 flex-col justify-between items-end w-1/4">
        <p class="text-xl text-textColor font-open font-bold">
          $ {{ product.price }}
        </p>
        <p v-if="product.offered" class="text-secondary font-bold">
          - {{ product.discount }} %
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HIcon from '../Global/HIcon.vue';
export default {
  components: { HIcon },
  props: {
      product: {
          type: Object,
          required: true
      }
  },
  methods: {
    ...mapActions('cart', ['addOne', 'removeToCart']),
    add() {
      this.addOne(this.product)
    },
    substract() {
      this.removeToCart(this.product)
    },
  }
};
</script>
