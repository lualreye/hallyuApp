<template>
  <button class="w-32 flex justify-center items-center bg-primary py-2" @click="upload">
    <div class="mr-1 flex jutify-center items-center">
      <GlobalHIcon name="newProduct" />
    </div>
    <p class="text-hBlack font-open">
      Nuevo Producto
    </p>
  </button>
</template>

<script>
export default {
  methods: {
    upload() {
      console.log("Estamos subiendo el producto")
    }
  }
}
</script>