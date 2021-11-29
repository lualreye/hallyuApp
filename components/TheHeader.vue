<template>
  <div class="w-full bg-white py-4 px-2">
    <div class="mx-auto max-w-screen-2xl flex justify-between items-center">
      <icon-button iconName="menu" classes="bg-primary" />
      <figure class="w-28 sm:w-36 md:w-40 lg:w-52 flex justify-center items-center">
        <img src="~/static/images/logo/logotipo.png" alt="hallyu-store" />
      </figure>
      <div class="w-32 md:w-40 flex justify-between items-center">
        <icon-button iconName="userAccount" classes="bg-primary p-1" />
        <icon-button iconName="like" classes="bg-primary p-1" class="mx-1" />
        <icon-button iconName="cart" classes="bg-primary p-1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    probando() {
      console.log("estoy vivo");
    },
  },
};
</script>
