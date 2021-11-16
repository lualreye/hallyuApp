<template>
  <div class="w-full bg-white py-2">
    <div class="mx-auto max-w-2xl flex justify-between items-center px-4">
      <icon-button iconName="menu" color="bg-primary" @click="probando" />
      <figure class="w-48 flex justify-center items-center">
        <img src="~/static/images/logo/imagotipo.png" alt="hallyu-store">
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    probando() {
      console.log('estoy vivo')
    }
  }
}
</script>