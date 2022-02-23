<template>
  <div class="w-full bg-white py-4 px-2">
    <div class="mx-auto max-w-screen-2xl flex justify-between items-center">
      <GlobalIconButton
        iconName="menu"
        classes="bg-primary"
        @click="openMenu"
      />
      <figure
        class="w-28 sm:w-36 md:w-40 lg:w-52 flex justify-center items-center"
      >
        <img src="~/static/images/logo/logotipo.png" alt="hallyu-store" />
      </figure>
      <div class="w-24 lg:w-96 flex justify-end items-center">
        <div class="w-1/3 flex justify-center items-center mr-4">
          <GlobalIconButton
            iconName="like"
            classes="bg-primary p-1"
            class="mx-1"
          />
          <GlobalIconButton
            iconName="cart"
            classes="bg-primary p-1"
            @click="getCart"
          />
        </div>
        <div class="w-2/3 flex jsutify-center items-center">
          <div class="w-1/2 hidden lg:flex justify-center items-center mr-2">
            <GlobalHButton
              name="Inicia Sesión"
              buttonColor="primary"
              @click="toSignIn"
            />
          </div>
          <div class="w-1/2 hidden lg:flex justify-center items-center">
            <GlobalHButton
              name="Regístrate"
              buttonColor="secondary"
              @click="toSignUp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("config_drawer", ["showMenu"]),
    ...mapGetters("cart", ["showCart"]),
  },
  methods: {
    ...mapActions("config_drawer", ["activeMenu"]),
    ...mapActions("cart", ["activeCart"]),
    ...mapActions("user", ["activeSignIn", "activeSignUp", "showModal"]),
    openMenu() {
      if (!this.showMenu) {
        this.activeMenu(true);
      }
    },
    getCart() {
      if (!this.showCart) {
        this.activeCart(true);
      }
    },
    toSignIn() {
      this.showModal(true);
      this.activeSignIn(true);
    },
    toSignUp() {
      this.showModal(true);
      this.activeSignUp(true);
    },
  },
};
</script>
