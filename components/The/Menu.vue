<template>
  <div
    class="bg-lightPink fixed top-0 bottom-0 h-screen w-2/3 md:w-1/3 rounded-r-3xl shadow-md z-50 py-4 px-2 flex flex-col justify-between transition-all"
    :class="{
      'left-0': showMenu,
      '-left-2/3': !showMenu,
    }"
  >
    <div class="w-full flex justify-end items-center">
      <GlobalIconButton
        iconName="close"
        classes="bg-transparent"
        @click="getMenu"
      />
    </div>
    <nav class="flex flex-col justify-col items-center justify-start">
      <ul v-for="(item, i) in menu" :key="i" class="mb-6">
        <li @click="closeMenu">
          <nuxt-link
            :to="item.link"
            class="font-open text-3xl text-textColor font-bol mb-4"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="w-full px-2">
      <div v-if="!user" class="w-full">
        <div class="w-full mb-3">
          <GlobalHButton
            name="Inicia Sesión"
            buttonColor="primary"
            @click="toSignIn"
          />
        </div>
        <div class="w-full">
          <GlobalHButton
            name="Regístrate"
            buttonColor="secondary"
            @click="toSignUp"
          />
        </div>
      </div>
      <div v-else class="w-full">
        <GlobalHButton
          name="Cerrar sesión"
          buttonColor="primary"
          @click="logout"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    menu: [
      {
        link: "/",
        name: "Inicio",
      },
      {
        link: "categories",
        name: "Categorías",
      },
      {
        link: "offers",
        name: "Ofertas",
      },
      {
        link: "club",
        name: "Club Hallyu",
      },
      {
        link: "contacts",
        name: "Contáctanos",
      },
    ],
  }),
  computed: {
    ...mapGetters("config_drawer", ["showMenu"]),
    ...mapGetters("user", ["getUser"]),
    user() {
      return this.getUser === null ? false : true;
    },
  },
  methods: {
    ...mapActions("config_drawer", ["activeMenu"]),
    ...mapActions("user", ["activeSignIn", "activeSignUp", "showModal", "signUserOut"]),
    getMenu() {
      if (this.showMenu) {
        this.activeMenu(false);
      } else {
        this.activeMenu(true);
      }
    },
    closeMenu() {
      if (this.showMenu) {
        this.activeMenu(false);
      }
    },
    toSignIn() {
      this.closeMenu();
      this.showModal(true);
      this.activeSignIn(true);
    },
    toSignUp() {
      this.closeMenu();
      this.showModal(true);
      this.activeSignUp(true);
    },
    logout() {
      this.signUserOut()
      this.activeMenu(false)
    },
  },
};
</script>
