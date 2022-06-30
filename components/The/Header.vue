<template>
  <header
    class="w-full bg-background shadow-sm py-4 px-2 sticky top-0 left-0 right-0 border-b border-gray-300 z-30"
  >
    <div class="mx-auto max-w-screen-2xl flex justify-between items-center">
      <GlobalIconButton
        iconName="menu"
        classes="bg-primary"
        @click="openMenu"
      />
      <nuxt-link to="/">
        <figure
          class="w-28 sm:w-36 md:w-40 lg:w-52 flex justify-center items-center"
        >
          <img src="~/static/images/logo/logotipo.png" alt="hallyu-store" />
        </figure>
      </nuxt-link>
      <div class="w-auto flex justify-end items-center">
        <div class="w-auto flex justify-center items-center mr-2">
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
          <div v-if="getUser" class="flex justify-center items-center relative">
            <GlobalIconButton
              v-if="!user"
              iconName="userAccount"
              class="bg-primary p-1 ml-1"
              @click="activeProfile"
            />
            <button
              v-else
              class="w-10 h-10 rounded-full bg-primary ml-1"
              @click="activeProfile"
            >
              <img
                :src="getUser.image"
                :alt="getUser.name"
                class="rounded-full w-10 h-10 object-cover"
              />
            </button>
            <div class="absolute top-full right-1/4 z-50">
              <TheUserProfile />
            </div>
          </div>
        </div>
        <div v-if="!getUser" class="flex jsutify-center items-center">
          <GlobalIconButton
            iconName="userAccount"
            classes="bg-primary p-1"
            @click="toSignUp"
            />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    userImage: "",
    userName: "",
  }),
  computed: {
    ...mapGetters("config_drawer", ["showMenu"]),
    ...mapGetters("cart", ["showCart"]),
    ...mapGetters("user", ["getUser"]),
    ...mapGetters("userData", ["getProfile"]),
    user() {
      if (this.getUser !== null) {
        if (this.getUser.image !== "") {
          this.userName = this.getUser.name;
          this.userImage = this.getUser.image;
          return true;
        } else {
          this.userName = this.getUser.name;
          return false;
        }
      } else {
        return;
      }
    },
  },
  watch: {
    getUser(value) {
      return value === null ? false : true;
    },
  },
  methods: {
    ...mapActions("config_drawer", ["activeMenu"]),
    ...mapActions("cart", ["activeCart"]),
    ...mapActions("user", ["activeSignIn", "activeSignUp", "showModal"]),
    ...mapActions("userData", ["showProfile"]),
    openMenu() {
      if (!this.showMenu) {
        this.activeMenu(true);
      }
    },
    getCart() {
      if (!this.showCart) {
        this.activeCart(true);
      } else {
        this.activeCart(false);
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
    activeProfile() {
      if (this.getProfile) {
        this.showProfile(false);
      } else {
        this.showProfile(true);
      }
    },
  },
};
</script>
