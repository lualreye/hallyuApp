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
      <div class="w-28 lg:w-96 flex justify-end items-center">
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
          <GlobalHIcon
            v-if="!user"
            iconName="userAccount"
            classes="bg-primary p-1"
          />
          <div
            v-else-if="user"
            class="bg-primary rounded-full w-10 h-10 ml-1 p-1 flex justify-center items-center"
          >
            <img :src="userImage" :alt="userName" class="w-full h-full object-cover" />
          </div>
        </div>
        <div v-if="!getUser" class="w-2/3 flex jsutify-center items-center">
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
  data: () => ({
    userImage: '',
    userName: ''
  }),
  computed: {
    ...mapGetters("config_drawer", ["showMenu"]),
    ...mapGetters("cart", ["showCart"]),
    ...mapGetters("user", ["getUser"]),
    user() {
      if(!this.getUser) {
        return false
      } else {
        this.userImage = this.getUser.image
        this.userName = this.getUser.name
        return true
      }
    }
  },
  watch: {
    getUser(value) {
      return value === null ? false : true
    }
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
