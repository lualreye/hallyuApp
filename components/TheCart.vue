<template>
  <div
    class="
      bg-white
      fixed
      top-0
      bottom-0
      h-screen
      w-2/3
      md:w-1/3
      rounded-l-3xl
      shadow-md
      z-50
      flex flex-col
      justify-between
      transition-all
    "
    :class="{
      'right-0': showCart,
      '-right-2/3': !showCart,
    }"
  >
    <div class="w-full flex justify-end items-center">
      <icon-button iconName="close" classes="bg-transparent" @click="closeCart" />
    </div>
    <nav class="flex flex-col justify-col items-center justify-start overflow-y-auto">
      <ul v-for="(item, i) in selectedProducts" :key="i" class="mb-6">
        <div class="">
          AQUI ESTAMOS POR TRABAJAR LA TARJETITA
        </div>
      </ul>
    </nav>
    <div class="w-full p-4 rounded-bl-3xl bg-primary border-t border-blue-500">
      aqui tenemos que poner nuestro subtotal y total
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    selectedProducts: [
      {
        name: 'Nombre del producto',
        price: 25,
        description: 'Esta es una descripcion del producto',
        discount: 3,
        image: require('@/static/images/idols/han.jpg')
      }
    ]
  }),
  computed: {
    ...mapGetters('cart', ['showCart'])
  },
  methods: {
    ...mapActions('cart', ['activeCart']),
    closeCart() {
      console.log('aqui se debe de abrir y cerrar')
    },
    newFunction() {
      console.log('pondremos la elimacion del objeto')
    },
  }
}
</script>